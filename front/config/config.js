// import axios from "axios";
// export const backUrl = 'http://3.34.130.207/';  

let port = process.env.NODE_ENV === 'production' ? 80 : 3065;

export const backUrl = `http://localhost:/${port}`;  