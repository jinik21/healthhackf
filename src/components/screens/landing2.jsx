import { Navigation } from "./navigation";
import { Header } from "./header";
import { Features } from "./features";
// import { About } from "../landing/about";
// import { Services } from "../landing/services";
// import { Gallery } from "../landing/gallery";
// import { Testimonials } from "../landing/testimonials";
// import { Team } from "../landing/Team";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const landing2 = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Features />
      {/* <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Team /> */}
    </div>
  );
};

export default landing2;
