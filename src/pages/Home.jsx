import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
export const Home = () => {
  return (
    <div>
      <div className="relative">
        <Navbar/>
        <div className="bg-backgroundImage bg-no-repeat h-[100vh] bg-center bg-cover flex items-center justify-center flex-col  gap-6">
          <h2 className="font-bold text-5xl text-orange">Welcome To Our shop</h2>
          <Link to="gallery"className="px-6 py-2 text-white bg-orange font-semibold rounded-lg text-lg">Go to Shopping</Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
// background-repeat: no-repeat;
// height: 100vh;
// background-repeat: no-repeat;
// background-position: center;
// background-size: cover;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// color: white;
// font-family:Georgia, 'Times New Roman', Times, serif;
