import axios from "axios";  
  
export default axios.create({  
  baseURL: "https://localhost:44363/",  
  headers: {  
    "Content-type": "application/json"  
  }  
});  