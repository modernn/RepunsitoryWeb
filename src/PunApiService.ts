import axios from "axios";
import Pun from './Pun'

type ServerError = {
  code: string;
  description: string;
};

const apiClient = axios.create({
  baseURL: "https://repunsitoryapi.azurewebsites.net/api/Puns",
  responseType: "json",
  headers: {
    "Content-Type": "application/json"
  }
});


export const getNewRandomPun = async () => {
  try {
    const response = await apiClient.get<Pun>("/GetRandom");
    const user = response.data;
    return user;
  } catch (err) {
    // if (err && err.response) {
    //   const axiosError = err as AxiosError<ServerError>;
    //   return Json.axiosError.response.data;
    // }

    throw err;
  }
};

