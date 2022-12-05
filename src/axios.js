import axios from "axios";

const instance = axios.create({
  
    URL : 'http://localhost:3004'

});

export default instance;
