import axios from "axios";
import Pun from './Pun'

type ServerError = {
  code: string;
  description: string;
};

const apiClient = axios.create({
  baseURL: "https://api.repunsitory.com/api/Pun",
  responseType: "json",
  headers: {
    "Content-Type": "application/json"
  }
});


export const getNewRandomPun = async () => {
  try {
    const response = await apiClient.get<Pun>("/GetRandom");
    const pun = response.data;
    return pun;
  } catch (err) {
    // if (err && err.response) {
    //   const axiosError = err as AxiosError<ServerError>;
    //   return Json.axiosError.response.data;
    // }

    throw err;
  }
};

export async function upvotePun(punGuid:string|undefined){
    try {
      const response = await apiClient.put<Pun>("/Upvote/"+punGuid);
      const pun = response.data;
      return pun;
    } catch (err) {
      // if (err && err.response) {
      //   const axiosError = err as AxiosError<ServerError>;
      //   return Json.axiosError.response.data;
      // }
  
      throw err;
    }
  };
  export async function downvotePun(punGuid:string|undefined){
    try {
      const response = await apiClient.put<Pun>("/Downvote/"+punGuid);
      const pun = response.data;
      return pun;
    } catch (err) {
      // if (err && err.response) {
      //   const axiosError = err as AxiosError<ServerError>;
      //   return Json.axiosError.response.data;
      // }
  
      throw err;
    }
  };