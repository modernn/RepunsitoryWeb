import * as request from 'request'

export class PunApiService{
    static getNewRandomPun(){
        request.get("https://repunsitoryapi.azurewebsites.net/api/Puns/GetRandom",(response: any, body: any) =>{
            return body;
        })
    }
    static upvotePun(punGuid:string){
        request.put("https://repunsitoryapi.azurewebsites.net/api/Puns/Upvote/"+ punGuid,(error:any,response:any, body: any)=>{
            if(response!=null)
            {
                return body;
            }
            return error;
        })
    }
    static downvotePun(punGuid:string){
        request.put("https://repunsitoryapi.azurewebsites.net/api/Puns/Downvote/"+ punGuid,(error:any,response:any, body:any)=>{
            if(response!=null)
            {
                return body;
            }
            return error;
        })
    }
}