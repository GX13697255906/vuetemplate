import axios from "axios"
import Qs from "qs"
axios.defaults.timeout = 50000;

export function GET(url, params){
  console.log(params,"---------------------------------------")
  return new Promise((resolve, reject) =>{
    axios.get(url,{
      params: params
    }).then(res =>{
      /*请求成功*/
      console.log("请求成功")
      resolve(res.data);
      console.log(res.data)
    }).catch(err =>{
      /*请求失败*/
      console.log("请求失败")
      reject(err.code);
      console.log(err.code)
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
