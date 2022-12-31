import ReactDom from 'react-dom/client';
import { Provider } from 'react-redux';
 
import './assets/css/index.css';
import App from './App';
import store from './redux/store';
import { BrowserRouter } from "react-router-dom";

// import AuthRoutes from './routes';

const root = ReactDom.createRoot(document.getElementById("root"));

// root.render(
//   <Provider store={store}>
// 		<App />
//   </Provider>
// );


root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
);


// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );