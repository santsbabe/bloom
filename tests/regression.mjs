import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const js = readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const css = readFileSync(new URL('../design-v32.css', import.meta.url), 'utf8');
const config = JSON.parse(readFileSync(new URL('../bloom.config.json', import.meta.url), 'utf8'));

assert.match(html, /id="weekRibbon"/, 'Home must include the seven-day ribbon');
assert.match(html, /data-home-section="medication"/, 'Home medication accordion missing');
assert.match(html, /data-home-section="triggers"/, 'Home trigger accordion missing');
assert.match(html, /data-home-section="context"/, 'Home context accordion missing');
assert.match(html, /class="trigger-caption">SLEEP</, 'Trigger captions must remain visible');
assert.match(js, /button\.classList\.add\('recorded'\)/, 'Trigger save must set a visible recorded state');
assert.match(js, /if\(!primary\)return alert/, 'Trigger save must require a primary answer');
assert.match(js, /closeModal\(\);renderToday\(\);showSaved/, 'Trigger save must close and confirm immediately');
assert.match(js, /function sortTriggers\(\)/, 'Most-used trigger ordering missing');
assert.match(js, /Cycle day \$\{cd\}/, 'Cycle day must be written in full');
assert.match(js, /data-history-filter/, 'History category filters missing');
assert.doesNotMatch(js, /data-del=/, 'History must not expose later deletion');
assert.match(js, /function refreshHealth/, 'Apple Health on-open refresh missing');
assert.match(js, /window\.addEventListener\('load',\(\)=>refreshHealth\(\)\)/, 'Health refresh must run when Bloom opens');
assert.match(js, /status:total<5\?'Emerging':'Observed'/, 'Early pattern labelling missing');
assert.match(css, /@keyframes lotus-breathe/, 'Living lotus motion missing');
assert.ok(existsSync(new URL('../assets/bloom-garden-v34.webp', import.meta.url)), 'Garden backdrop missing');
assert.equal(config.home.visualTriggerOrder, 'most-used-first');
assert.equal(config.history.correctionModel, 'immediate-undo-only');
assert.equal(config.patterns.showEmergingEarly, true);

console.log('Bloom v34 regression checks passed');
