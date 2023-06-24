import AboutSection from "../components/AboutSection";
import CallToAction from "../components/CallToAction";
import GallerySection from "../components/GallerySection";
import HeroSection from "../components/HeroSection";
import MissionVisionObjectiveSection from "../components/MissionVisionObjectiveSection";
import Navbar from "../components/Navbar";
import { MdFacebook } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MissionVisionObjectiveSection />
      <GallerySection />
      <CallToAction />

      <section className="stories-list">
        <div className="container">
          <div>
            <h3>
              LATEST STORIES AND <br /> UPDATES
            </h3>
            <span className="accent-line"></span>

            <div className="card-container">
              {[
                {
                  img: "Rectangle 8.png",
                  title: "Lorem ipsum dolor sit amet consectetur",
                  description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur adipisci deleniti ullam consectetur reprehenderit
                nemo, rem cupiditate fugiat magni non!`,
                },
                {
                  img: "2.png",
                  title: "Lorem ipsum dolor sit amet consectetur",
                  description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur adipisci deleniti ullam consectetur reprehenderit
                nemo, rem cupiditate fugiat magni non!`,
                },
                {
                  img: "3.png",
                  title: "Lorem ipsum dolor sit amet consectetur",
                  description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur adipisci deleniti ullam consectetur reprehenderit
                nemo, rem cupiditate fugiat magni non!`,
                },
              ].map(({ title, description, img }, i) => (
                <div key={i} className="card">
                  <img src={img} alt="" />
                  <div className="typography">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <button>+</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button>lorem ipsum</button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-contents">
          <div>
            <h3>
              Subscribe to our weekly <br /> news letter
            </h3>
            <form action="">
              <input type="email" />
              <button>Submit</button>
            </form>
          </div>
          <div>
            <h3>Reach Us</h3>

            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Be Social</h3>

            <ul>
              <li>
                <a href="#">
                  <MdFacebook /> Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineTwitter /> Twitter
                </a>
              </li>
              <li>
                <a href="#"> LinkedIn</a>
              </li>
              <li>
                <a href="#">YouTube Channel</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Quick links</h3>

            <ul>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 3</a>
              </li>
            </ul>
          </div>
        </div>
        <p>
          &copy; Rwanda. All rights reserved | <a href="#">Privacy policy</a>
        </p>
      </footer>
    </main>
  );
}
