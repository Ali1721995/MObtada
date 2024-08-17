
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Layout from './component/Layout/Layout';
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MetaTags from './component/Helmet';




function App() {
  return <>
  <MetaTags/>
<Layout/>
  </>
}

export default App;
