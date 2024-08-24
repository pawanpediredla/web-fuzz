import { enumerateDirectories } from './fuzzers/directories';
import  { fuzzParameters } from './fuzzers/parameters';
import { discoverSubdomains } from './fuzzers/subdomains';

const baseUrl = 'http://example.com';

async function runFuzzer() {
  await enumerateDirectories(baseUrl);
  await discoverVHosts(baseUrl);
  await testApiEndpoints(baseUrl);
  await fuzzParameters(baseUrl);
  discoverSubdomains('example.com');
}

runFuzzer().catch(console.error);
