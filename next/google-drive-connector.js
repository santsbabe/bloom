(()=>{
  'use strict';

  // Bloom Google Drive connector scaffold.
  // Connector only: no UI, no automatic polling, no secrets and no deployment assumptions.
  // The caller supplies an OAuth access token. This module limits its work to the configured
  // Bloom Health Bridge folder/file and returns parsed JSON for the existing health-bridge adapter.

  const DRIVE_API = 'https://www.googleapis.com/drive/v3';
  const DEFAULT_FILE_NAME = 'latest.json';
  const REQUIRED_SCOPE = 'https://www.googleapis.com/auth/drive.readonly';

  class BloomDriveConnectorError extends Error {
    constructor(message, code, details){
      super(message);
      this.name = 'BloomDriveConnectorError';
      this.code = code || 'drive_error';
      this.details = details || null;
    }
  }

  function escapeDriveQueryValue(value){
    return String(value).replace(/\\/g,'\\\\').replace(/'/g,"\\'");
  }

  async function driveFetch(url, accessToken, init={}){
    if(!accessToken) throw new BloomDriveConnectorError('Google Drive is not connected.','missing_token');
    const headers = new Headers(init.headers || {});
    headers.set('Authorization', `Bearer ${accessToken}`);
    const response = await fetch(url,{...init,headers});
    if(!response.ok){
      let body = null;
      try{ body = await response.json(); }catch{ body = await response.text(); }
      if(response.status === 401) throw new BloomDriveConnectorError('Google Drive authorisation expired or is invalid.','unauthorised',body);
      if(response.status === 403) throw new BloomDriveConnectorError('Google Drive access is not permitted for this connection.','forbidden',body);
      if(response.status === 404) throw new BloomDriveConnectorError('The requested Google Drive file or folder was not found.','not_found',body);
      throw new BloomDriveConnectorError(`Google Drive request failed (${response.status}).`,'http_error',body);
    }
    return response;
  }

  async function findFile({accessToken, folderId, fileName=DEFAULT_FILE_NAME}){
    if(!folderId) throw new BloomDriveConnectorError('Bloom Health Bridge folder ID is not configured.','missing_folder');
    const q = [
      `'${escapeDriveQueryValue(folderId)}' in parents`,
      `name='${escapeDriveQueryValue(fileName)}'`,
      'trashed=false'
    ].join(' and ');
    const params = new URLSearchParams({
      q,
      spaces:'drive',
      fields:'files(id,name,mimeType,modifiedTime,size,md5Checksum)',
      orderBy:'modifiedTime desc',
      pageSize:'10'
    });
    const res = await driveFetch(`${DRIVE_API}/files?${params.toString()}`,accessToken);
    const payload = await res.json();
    const files = Array.isArray(payload.files) ? payload.files : [];
    return files[0] || null;
  }

  async function downloadJson({accessToken,fileId}){
    if(!fileId) throw new BloomDriveConnectorError('No Google Drive file was selected.','missing_file');
    const res = await driveFetch(`${DRIVE_API}/files/${encodeURIComponent(fileId)}?alt=media`,accessToken);
    const text = await res.text();
    try{
      return JSON.parse(text);
    }catch(error){
      throw new BloomDriveConnectorError('Bloom Health Bridge file is not valid JSON.','invalid_json',{cause:String(error)});
    }
  }

  async function readLatestHealthBridgeSnapshot({accessToken,folderId,fileName=DEFAULT_FILE_NAME}){
    const file = await findFile({accessToken,folderId,fileName});
    if(!file) return {status:'missing',file:null,data:null};
    const data = await downloadJson({accessToken,fileId:file.id});
    return {status:'ok',file,data};
  }

  async function testConnection({accessToken,folderId,fileName=DEFAULT_FILE_NAME}){
    try{
      const result = await readLatestHealthBridgeSnapshot({accessToken,folderId,fileName});
      return {
        ok: result.status === 'ok',
        status: result.status,
        file: result.file || null,
        keys: result.data && typeof result.data === 'object' ? Object.keys(result.data) : []
      };
    }catch(error){
      return {ok:false,status:'error',error:{name:error.name,code:error.code,message:error.message}};
    }
  }

  window.BloomGoogleDriveConnector = Object.freeze({
    REQUIRED_SCOPE,
    DEFAULT_FILE_NAME,
    findFile,
    downloadJson,
    readLatestHealthBridgeSnapshot,
    testConnection,
    BloomDriveConnectorError
  });
})();
