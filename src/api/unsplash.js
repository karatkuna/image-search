import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 2OMlYx4oFDgARxew7bCfFr2ftdFaxioz6ibdz2mw1e8'
  }
})