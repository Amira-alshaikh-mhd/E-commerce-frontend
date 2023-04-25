import './Home.css';
import logo from "../src/images/logo.png"
import cartlogo from "../src/images/cartlogo.png"
import slider1 from "../src/images/slider1.jpg"
import slider2 from "../src/images/slider2.jpg"
import slider3 from "../src/images/slider3.jpg"
import slider4 from "../src/images/slider4.jpg"
import jacket from "../src/images/jacket.png"
import rightarrow from "../src/images/arrowright.png"
import leftarrow from "../src/images/arrowleft.png"
import facebook from "../src/images/facebook.png"
import whatsapp from "../src/images/whatsapp.png"
import instagram from "../src/images/instagram.png"
import gmail from "../src/images/gmail.png"
import axios from 'axios';
import Arrow from "../src/images/Arrow.png"
import { useState, useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
function App() {

const [categoryFetching,setCategory]=useState([])
const loadCategories = async () => {
    const res = await axios.get('http://localhost:3030/cat/');
    setCategory(res.data);
  };
  

  useEffect(() => {
    loadCategories();
  }, []);

  let currentSlide = 0;
  
  const imagesss=[
    {src:slider2, alt:"Image 1"},
    {src:slider3, alt:"Image 2"},
    {src:slider4, alt:"Image 3"}
  ]
const delay = 2500;


  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === imagesss.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);



  




  const scroll = () => {
    var left = document.querySelector(".scroll-devs");
    left.scrollBy(280, 0)
  }


  const scrollr = () => {
    var right = document.querySelector(".scroll-devs");
    right.scrollBy(-380, 0)
  }



  const scrollsec = () => {
    var left = document.querySelector(".scroll-devos");
    left.scrollBy(380, 0)
  }


  const scrollrsec = () => {
    var right = document.querySelector(".scroll-devos");
    right.scrollBy(-380, 0)
  }







  return (
    <div className="App">

      <div className='navbar-container'>

        <div>
          <img className='logoimg' src={logo} alt="" srcset="" />
        </div>



        <div className='navigation-buttons'>

          <a href="/Home "> <p className='nav-buttons '>Home</p></a>
          <a href="/Home/#about-Us"><p className='nav-buttons '>About Us</p></a>
          <a href="/Home/#winterCollection"><p className='nav-buttons '>Collection</p></a>

        </div>
        <div className='last-header'>
          <p className="nav-buttons">sign in </p>
          <img src={cartlogo} className="cartlogo" alt="" />

        </div>




      </div>



       <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {imagesss.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="slideP"
          />
        ))}
      </div>

      <div className="slideshowDots">
        {imagesss.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
      




      <div className='winter-collection'>

        <p className='heading-collection' id="winterCollection">winter collection </p>

        <div className='scroll-collection'>
          <div className='parent-arrow'>

            <button className='leftarrow' onClick={() => scrollr()}><img className='arrows-heights' src={leftarrow} /> </button>
          </div>


          <div className='cover'>
      
            <div className='scroll-devs'>
  { categoryFetching.filter(item => item.season === "winter" || item.season==="Winter").map((item, index) => (
    <div key={item._id} className='child'>
    { item.sale >0 && ( <div className="discount">{item.sale}%</div>)}
    <Link to={`/ProductsPage/${item._id}`}>
      <img className='child-image' src={item.image.url} alt={item.name} /></Link>
      <button className='child-image-button'>{item.name} <img src={Arrow} alt="" srcSet="" /></button>
    </div>
  ))}
</div>



          </div>


          <div className='parent-arrow'><button className='leftarrow' onClick={() => scroll()}><img className='arrows-heights' src={rightarrow} /></button></div>

        </div>






      </div>








      <div className='winter-collection'>

        <p className='heading-collection' id="summerCollection">Summer collection </p>

        <div className='scroll-collection'>
          <div className='parent-arrow'>

            <button className='leftarrow' onClick={() => scrollrsec()}><img className='arrows-heights' src={leftarrow} /> </button>
          </div>
           

          <div className='cover'>
            <div className='scroll-devos'>
             
            {categoryFetching.filter(item => item.season === "summer").map((item, index) => (
          <div key={index} className='child'>
         
           { item.sale >0 && ( <div className="discount">{item.sale}%</div>)}
              <Link to={`/ProductsPage/${item._id}`}>
      <img className='child-image' src={item.image.url} alt={item.name} /></Link>
            <button className='child-image-button'>{item.name} <img src={Arrow} alt="" srcSet="" /></button>
          </div>
        ))}
                        </div>



          </div>


          <div className='parent-arrow'><button className='leftarrow' onClick={() => scrollsec()}><img className='arrows-heights' src={rightarrow} /></button></div>

        </div>






      </div>






      <div className='pablo-description'>

        <p className='description-header' >PABLO</p>
        <p className='description-description' id="about-Us">Welcome to PABLO, your one-stop shop for stylish and affordable men's clothing. Our carefully curated collection features the latest trends in men's fashion, including casual wear, business attire, and formal wear. </p>


        <div className='description-butt'>

          <button className='description-buttons'>Read more...</button>
        </div>

      </div>




      <div className='footer'>

        <div className='footer-first'>

          <a href="/Home"><p className='footer-first-p '>Home </p></a>
          <a href="/Home/#about-Us"><p className='footer-first-p ' > About Us </p></a>
          <a href="/Home/#winterCollection"><p className='footer-first-p '  >Winter Collection </p></a>
          <a href="/Home/#summerCollection"><p className='footer-first-p ' >Summer Collection </p></a>





        </div>






        <div className='footer-second'>

          <p className='footer-second-p'> @ Copy Right: 2023</p>
          <p className='footer-second-p'>Powered by: Codi Team</p>


        </div>






        <div>


          <p className='footer-second-p'> Stay IN TOUCH:</p>
          <div className='footer-links'>
            <button className='button-footer-background' ><img className='images-buttons-footer' src={whatsapp} alt="" /></button>
            <button className='button-footer-background' ><img className='images-buttons-footer' src={facebook} alt="" /></button>
            <button className='button-footer-background' ><img className='images-buttons-footer' src={instagram} alt="" /></button>
            <button className='button-footer-background' ><img className='images-buttons-footer' src={gmail} alt="" /></button>



          </div>



        </div>


      </div>






    </div>
  );
}

export default App;
