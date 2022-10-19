import Main from './components/Main/Main.js';
import Head from './components/Head/Head.js';
import Below from './components/Below/Below.js';
import Product from './components/RelatedProducts/Product.js';
import Footer from './components/Footer/Footer.js';
function App() {
  return (
    <div className="App">
      <Head />
      <Main />
      <Below />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
