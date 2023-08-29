import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Footer from './Footer';
import Root from './components/root';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// <div>
//   <App/>
//   <Footer/>
// </div>,
// );
// const text ="Hello webbrain";
// const title=<h1>Hi webbrain</h1>

root.render(
  <React.StrictMode>
    {/* <h1>{text.toUpperCase()}</h1> */}
    {/* {title} */}
    <Root/>
  </React.StrictMode>
)


