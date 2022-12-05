import './App.css';
import { Gallery } from "react-grid-gallery";

const urls = [
  "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
  "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg"
]

var images = [];

function App() {

  urls.forEach(e => {
    images.push({
      src: e,
      width: 320,
      height: 212,
      alt: "Image not loaded"
    })
  });
  
  return (
    <div className="App">
      <Gallery images={images} />      
    </div>
  );
}

export default App;
