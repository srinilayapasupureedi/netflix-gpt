// import OpenAI from "openai";
// import { REACT_APP_OPENAI_API_KEY } from "./constants";

// // Debug log (optional, remove in production)
// console.log("OpenAI API Key:", REACT_APP_OPENAI_API_KEY);

// export const openai = new OpenAI({
//   apiKey: REACT_APP_OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true ,
// });



import OpenAI from 'openai';
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});
export default  openai;