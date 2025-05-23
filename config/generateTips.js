// const {
//     GoogleGenerativeAI,
//   } = require("@google/generative-ai");
  
//   const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
//   const genAI = new GoogleGenerativeAI(apiKey);
  
//   const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-flash",
//   });
  
//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 64,
//     maxOutputTokens: 8192,
//     responseMimeType: "application/json",
//   };
  
//   export const generateTips = model.startChat({
//     generationConfig,
//     history: [
//       {
//         role: "user",
//         parts: [
//           {
//             text: `Generate an array of 5 daily learning tips in valid JSON.
//   Each tip should include:
//   - id (number)
//   - tip (string)
//   - date (YYYY-MM-DD)
//   - liked (boolean)
//   - saved (boolean)
//   Return JSON only.`,
//           },
//         ],
//       },
//       {
//         role: "model",
//         parts: [
//           {
//             text: `{
//     "example_format": {
//       "id": 1,
//       "tip": "Use active recall when reviewing study material.",
//       "date": "2025-04-25",
//       "liked": false,
//       "saved": false
//     }
//   }`,
//           },
//         ],
//       },
//     ],
//   });
  

 


















