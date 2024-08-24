import dns from 'dns';

export function discoverSubdomains(domain: string) {
  const subdomains = ['api', 'beta', 'dev']; // Example subdomains
  subdomains.forEach(subdomain => {
    dns.resolve(`${subdomain}.${domain}`, (err, addresses) => {
      if (addresses) {
        console.log(`Subdomain Found: ${subdomain}.${domain}`);
      }
    });
  });
}
