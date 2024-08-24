import axios from 'axios';

export async function fuzzParameters(baseUrl: string) {
  const params = ['param1', 'param2'];
  const payloads = ['<script>alert(1)</script>', "' OR 1=1 --"]; // Example payloads

  for (const param of params) {
    for (const payload of payloads) {
      const url = `${baseUrl}?${param}=${encodeURIComponent(payload)}`;
      try {
        const response = await axios.get(url);
        if (response.status === 200) {
          console.log(`Parameter Fuzzing: ${url}`);
        }
      } catch (error) {
        // Ignore errors
      }
    }
  }
}
