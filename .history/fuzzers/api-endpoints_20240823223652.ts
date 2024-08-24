import axios from "axios";
export async function testApiEndPoints(baseUrl:string){
    const endpoints =['/api/user','api/admin']
;
for(const endPoint of endpoints)
{
 const url =`${baseUrl}${endPoint}`;
 try{
    const response = await axios.get(url);

    if (response.status===200){

        console.log(`API ENDPOINT FOUND :${url}`);
    }

 }  
 catch(error){
    con
 } 
}

}