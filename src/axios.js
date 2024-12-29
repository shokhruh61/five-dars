import axios from "axios";

const RegisterUrl = axios.create({
  baseURL: "https://auth-rg69.onrender.com/api/",
});

export default RegisterUrl;
