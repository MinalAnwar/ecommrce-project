import Carousel from '../components/carousel';
import TertiryButton from '../components/tertiryButton';
import Navbar from '../components/navbar';
import Images from '../components/lannding_page_images.jsx';
import Footer from '../components/footer.jsx';

function LandingPage() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="relative w-screen h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/static/Assets/images/background.webp')" }}
        >
          <div className="w-full h-full bg-opacity-50 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 md:mt-25 mt-24 flex items-center justify-center w-full h-full">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-monoton font-extrabold text-white">
              Fashion Redefined
            </h1>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mt-4">
              Discover Your Signature Look
            </h2>
            <TertiryButton text="Shop Now" onClick={() => alert('Button clicked!')} className="mt-8" />
          </div>
        </div>
        <Carousel />
      </div>
      <Images/>
      <Footer/>
    </div>
  );
}

export default LandingPage;
