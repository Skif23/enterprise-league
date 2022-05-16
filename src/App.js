import "./App.css";
import Header from "./components/header/Header";
import News from "./components/news/News";
import Press from "./components/press/Press";
import NewsRoom from "./components/newsroom/NewsRoom";
import Media from "./components/media/Media";
import Modal from "./components/modal/Modal";
import Footer from "./components/footer/Footer";
import { useState } from "react";

function App() {
  const [newsOpen, setNewsOpen] = useState(true);

  return (
    <div className="App">
      <Modal />
      <Header />
      <NewsRoom setNewsOpen={setNewsOpen} newsOpen={newsOpen} />
      {newsOpen ? <News /> : <Press />}
      <Media />
      <Footer />
    </div>
  );
}

export default App;
