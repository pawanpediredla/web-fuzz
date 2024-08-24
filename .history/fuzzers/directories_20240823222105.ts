import axios from "axios";
export async function  enumerateDirectories(baseUrl:String){
    const paths =['admin','uploads','config'];
    for(const path of paths)
        {
            try{
                const url =`${baseUrl}/${path}`;
                const response =await axios.get(url);
                if (response.status===200){
                    console.log(`found :${url}`);
                }

            }

}}