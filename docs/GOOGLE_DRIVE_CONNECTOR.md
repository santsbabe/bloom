# Bloom — Google Drive Connector

**Status:** connector scaffold only; not deployed and not wired into the live app.

## Purpose

Bloom’s iPhone Health Shortcut writes `latest.json` to a Google Drive folder. This connector gives the redesigned Bloom code a narrow, explicit way to read that file later.

Initial intended folder:

`Google Drive / Bloom / Health Bridge / latest.json`

The connector does **not** currently:

- run OAuth UI
- store credentials or client secrets
- poll Drive automatically
- deploy a backend
- modify or delete Drive files
- read arbitrary Drive content for analysis

It only defines the Drive-reading contract needed by Bloom.

## Why this pattern

Homework Quest already uses a parent-controlled Google connection pattern. Bloom should reuse that design principle: one explicit Google consent, clear error states, no Google password/session sharing, and only the scopes actually required.

Bloom is different in one important respect: the Health Shortcut creates `latest.json` outside the Bloom app. Therefore `drive.file` is not sufficient for unattended folder reading unless the file is explicitly granted to Bloom through a picker or created by Bloom itself. For the planned automatic folder connector, the current scaffold declares the read-only Drive scope:

`https://www.googleapis.com/auth/drive.readonly`

That scope should only be activated when the connection UI is built and the user explicitly consents.

## Connector module

`next/google-drive-connector.js`

Exports `window.BloomGoogleDriveConnector` with:

- `REQUIRED_SCOPE`
- `DEFAULT_FILE_NAME`
- `findFile(...)`
- `downloadJson(...)`
- `readLatestHealthBridgeSnapshot(...)`
- `testConnection(...)`

The caller supplies:

- an OAuth access token
- the exact configured Health Bridge folder ID
- optionally a different filename

The module searches only that folder for the configured filename, downloads the newest matching file and parses it as JSON.

## Connection errors

The connector distinguishes at least:

- missing Google token
- missing configured folder
- expired/invalid authorisation
- forbidden Drive access
- missing file/folder
- invalid JSON
- generic HTTP failure

The eventual UI should surface these as separate, useful messages rather than repeatedly asking the user to re-enable APIs when that is not the actual problem.

## Health hand-off

The JSON returned by this connector is intended to pass into `next/health-bridge.js`, which converts supported fields into Bloom event records.

Expected Phase 1 fields include:

- `capturedAt`
- `steps`
- `restingHeartRate`
- `heartRateMin`
- `heartRateMax`
- `heartRateAverage`
- `hrv`
- `respiratoryRate`

Sleep can be added later without changing the connector itself.

## Authentication architecture — later phase

When we wire authentication, prefer the same broad principles already used for Homework Quest:

1. explicit user-initiated Google connection
2. Google OAuth rather than Google password/session sharing
3. one configured OAuth client for Bloom
4. access token supplied to the Drive connector
5. refresh/reconnect handled by the hosting/auth layer, not scattered through app logic
6. no client secret committed to GitHub
7. precise, separate error messages for configuration, consent, token expiry and file access

A separate Bloom OAuth client is preferable to silently reusing Homework Quest’s client because the apps have different origins, scopes and data purposes. They may live in the same Google Cloud project if desired, but should remain independently identifiable.

## Not live

Nothing in this document or module changes the current GitHub Pages app. The connector lives only on the `bloom-redesign-v2` branch until the redesigned architecture is ready for integration and testing.
