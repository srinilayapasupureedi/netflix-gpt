// src/utils/GenAI.js
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { GEMINI_API_KEY } from "./constants";
// const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// export default genAI;
import { GoogleGenAI } from "@google/genai";
import { GEMINI_API_KEY } from "./constants";

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export default ai;