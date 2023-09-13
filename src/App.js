import "./App.css";
import Hero from "./components/hero/Hero";
import Post from "./components/post/Post";
import Banner1 from "./components/banners/banner1/Banner1";
import Buttons from "./components/buttons/Buttons";
import Banner2 from "./components/banners/banner2/Banner2";
import Feedback from "./components/feedback/Feedback";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Hero />
      <Post />
      <Banner1 />
      <Buttons />
      <Banner2 />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
