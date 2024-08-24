import { enumerateDirectories } from './fuzzers/directories';
import { fuzzParameters } from './fuzzers/parameters';
import { discoverSubdomains } from './fuzzers/subdomains';
import { discoverHosts } from './fuzzers/vhosts';
import { testApiEndPoints } from './fuzzers/api-endpoints';

const baseUrl = 'https://jsonplaceholder.typicode.com'; // Example API for testing

async function runFuzzer() {
  try {
    console.log('Starting fuzzing operations...');
    
    // Run fuzzing operations in sequence
    await enumerateDirectories(baseUrl);
    await discoverHosts(baseUrl);
    await testApiEndPoints(baseUrl);
    await fuzzParameters(baseUrl);
    
    await discoverSubdomains('example.com'); // Use a domain for subdomain discovery
    
    console.log('Fuzzing operations completed.');
  } catch (error) {
    console.error('Error during fuzzing:', error);
  }
}

runFuzzer();
