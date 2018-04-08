import axios from 'axios';
import CONF from '../config.json';
import Storage from './Storage';

class ApiWrapper{

  _url : string
  _version: string

  constructor() {
      this._url = CONF.API_URL;
  }

  async checkBackend(){
    let status = false;
    try{
      const res = await axios(this._url);
      if(res.status === 200){
        this.version = res.data.version;
        status = true;
      }
    } catch(err) {
      console.error(err);
    }
    return status;
  }

  async getProfile(){
    let user = null;
    try{
      var axiosInstance = axios.create({
          baseURL: this._url+'v1/profile',
          headers: {
            'X-TOKEN': Storage.getToken()
          }
      });
      const res = await axiosInstance.get();
      if(res.status === 200){
        user = res.data;
      }
    } catch(err) {
      console.error(err);
    }
    return user;
  }

  async login(mail){
    let result = false;
    try{
      var axiosInstance = axios.create({
          baseURL: this._url+'v1/login/'+mail
      });
      const res = await axiosInstance.post();
      if(res.status === 201){
        result = true;
      }
    } catch(err) {
      console.error(err);
    }
    return result;
  }

}

export default ApiWrapper;
