import axios from "axios";
import { url } from "inspector";
export async function discoverHosts(baseUrl:string){
    const subdomains =['api','admin','beta'];
    for(const subdomain of subdomains){
        const url =`http://${subdomain}.${baseUrl}`;

    
    try{
        const response =await axios.get(url);
        if (response.status===200){
            console.log(`found Vhost :${url}`);
        }

    }
    catch(error){
        console.log(`${error}`);
    }
}
}
