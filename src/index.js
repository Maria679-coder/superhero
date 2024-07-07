import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
// import SuperHero from './FetchApi/SuperHero';
import News from './Newsapi/news';
// import Darkmod from './props/Darkmod';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <App/> */}
   {/* <Counter/> */}
   {/* <UseEffectComponent/> */}
   {/* <App/> */}
   {/* <Darkmod/> */}
   {/* <Books/> */}
   {/* <SuperHero/> */}
   <News/>
  </React.StrictMode>
);

