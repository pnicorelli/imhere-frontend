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

  async getStatus(){
    let data = null;
    try{
      var axiosInstance = axios.create({
          baseURL: this._url+'v1/status',
          headers: {
            'X-TOKEN': Storage.getToken()
          }
      });
      const res = await axiosInstance.get();
      if(res.status === 200){
        data = res.data;
      }
    } catch(err) {
      console.error(err);
    }
    return data;
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

  async checkIn(){
    let result = false;
    try{
      var axiosInstance = axios.create({
          baseURL: this._url+'v1/checkin',
          headers: {
            'X-TOKEN': Storage.getToken()
          }
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

  async checkOut(){
    let result = false;
    try{
      var axiosInstance = axios.create({
          baseURL: this._url+'v1/checkout',
          headers: {
            'X-TOKEN': Storage.getToken()
          }
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

  async getWho(){
    let result = null;
    try{
      var axiosInstance = axios.create({
          baseURL: this._url+'v1/who',
          headers: {
            'X-TOKEN': Storage.getToken()
          }
      });
      const res = await axiosInstance.get();
      if(res.status === 200){
        result = res.data.colleagues;
      }
    } catch(err) {
      console.error(err);
    }
    return result;
  }

  async getMonthlyReports(year, month){
    month = ('0'+month).slice(-2);
    let period = year + '-' + month;
    let result = null;
    try{
      var axiosInstance = axios.create({
          baseURL: this._url+'v1/report/monthly/'+period,
          headers: {
            'X-TOKEN': Storage.getToken()
          }
      });
      const res = await axiosInstance.get();
      if(res.status === 200){
        result = res.data.reports;
      }
    } catch(err) {
      console.error(err);
    }
    return result;
  }

}

export default ApiWrapper;
