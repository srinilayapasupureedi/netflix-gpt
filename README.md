# 🎬 Netflix-GPT

A fully functional Netflix clone built using **React**, **Redux Toolkit**, **Firebase Authentication**, **Tailwind CSS**, **TMDB APIs**, and **GPT-powered movie search**.

This project includes authentication, movie browsing, YouTube trailer autoplay, multi-language support, and a GPT search system powered by OpenAI.

---

## 🚀 Features

### 🔐 Authentication
- Login / Sign-up form  
- Form validation using custom `checkValidation`  
- `useRef` hooks for input handling  
- Firebase authentication  
- Create user account  
- Sign-in API  
- Update user profile (name + photo)  
- Sign-out  
- Redirect based on login state  
- onAuthStateChanged cleanup (unsubscribe)

---

### 🎥 Browse Page
- Header with language switch & Sign-Out  
- Now Playing movies  
- Top Rated movies  
- Popular movies  
- Movie Recommendations  
- Background autoplay trailer  
- Video title overlay  
- Movie list components  
- Movie card component  
- TMDB Image CDN support  
- Responsive Tailwind-styled layout  

---

### 🧠 GPT Movie Search
- GPT Search Bar  
- GPT Movie Suggestions  
- Multi-Language support  
- Integrated OpenAI APIs  

---

### 🗂 Redux Store
- Configured Redux Toolkit  
- `userSlice`  
- `movieSlice`  
- Custom Hooks:
  - `useNowPlayingMovies`
  - `usePopularMovies`

---

## 🧩 Project Structure
src/
│── components/
│── hooks/
│── utils/
│── redux/
│── pages/
│── constants/
│── App.js
│── index.js
