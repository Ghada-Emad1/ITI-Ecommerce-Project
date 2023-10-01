import Img from "../../public/images/About.jpg";
import { Footer } from "../components/Footer";
function About() {
  return (
    <div>
      <div className=" p-10">
        <img src={Img} />
      </div>
      <div className="p-10 text-xl font-semibold text-darkGray ">
        Our Shop
        <br></br> is bringing a fresh and modern look to the modest fashion
        scene. We saw a gap in the industry where modest minded women are not
        acknowledged nor catered for. We decided to be part of the change! EMMA
        stems phonetically from the word أَمَة , meaning servant of Allah ﷻ It
        reflects our belief in how faith reflects the way we dress.<br></br> It also
        stands for Elegant, Modern, Modest Attire. We believe dressing modestly
        and fashionably shouldn’t be mutually exclusive. Want to get to know us
        more? Read more here We’d love to share this journey with you, Let’s be
        modest and proud. Love, emma family
      </div>
      <Footer/>
    </div>
  );
}

export default About;
