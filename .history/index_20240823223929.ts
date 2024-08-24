import { enumerateDirectories } from './fuzzers/directories';
import  { fuzzParameters } from './fuzzers/parameters';
import { discoverSubdomains } from './fuzzers/subdomains';
import { discoverHosts } from './fuzzers/vhosts';
import { testApiEndPoints } from './fuzzers/api-endpoints';
const baseUrl = 'http://example.com';

async function runFuzzer() {
  await enumerateDirectories(baseUrl);
  await discoverHosts(baseUrl);
  await testApiEndpoints(baseUrl);
  await fuzzParameters(baseUrl);
  discoverSubdomains('example.com');
}

runFuzzer().catch(console.error);
