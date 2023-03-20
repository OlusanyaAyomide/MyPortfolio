import { useMutation } from "react-query";
import {useEffect, useState} from "react"
import axios from "axios";
const fetchdata = (data) => {
  console.log(data);
  return axios.post("https://portfolio-mailer-2.onrender.com/message-portfolio-ayomide", data);
};
export const useFetch = (onSuccess) => {
  return useMutation(fetchdata, {
    onSuccess:onSuccess,
    onError: (e) => {
      console.log(e);
    },
  });
};



export const useTimeOut = (timer)=>{
  const [val,setval] = useState(false)
  useEffect(()=>{
      setTimeout(()=>{setval(true)},timer)
  },[])
  return {val}
}