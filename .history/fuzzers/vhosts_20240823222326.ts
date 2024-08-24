import axios from "axios";
export async function discoverHosts(baseUrl:string){
    const subdomains =['api','admin','beta'];
    for(const subdomain of subdomains){
        const url =`http://${subdomain}.${baseUrl}`;
        
    }
}
