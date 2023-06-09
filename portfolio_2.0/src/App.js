import "./App.css";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import Cards from "./components/Cards/Cards";
import Pattern from "./components/Pattern/Index";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <section className="main">
      <Header />
      <Introduction />
      <Cards />
      <Pattern />
      <Footer />
    </section>
  );
}

export default App;
