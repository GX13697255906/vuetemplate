import axios from "axios"
import Qs from "qs"
axios.defaults.timeout = 3000;

export function GET(url, params){
  return new Promise((resolve, reject) =>{
    axios.get(url,{
      params: params
    }).then(res =>{
      resolve(res.data);
      console.log(res.data)
    }).catch(err =>{
      reject(err.data);
      console.log(err.data())
    })
  });
}

export function POST(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, Qs.stringify(params))
      .then(res =>{
        resolve(res.data);
      })
      .catch(err =>{
        reject(err.data);
      })
  });
}
