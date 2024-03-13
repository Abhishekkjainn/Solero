import './App.css';
import Header from './components/header';
import Slider from './components/slider';
import SmallSlider from './components/smallSlider';
import About from './components/about';
import Categories from './components/categories';
import SubscribetoEmail from './components/subscribe';

function App() {
  return (
    <div className="mainbody bg-black ">
      <Header />
      <Slider />
      <SmallSlider />
      <About />
      <Categories />
      <SubscribetoEmail />
    </div>
  );
}

export default App;
