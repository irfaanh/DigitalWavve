import "./WhyChooseUs.css";
import { FaClipboardList } from "react-icons/fa";
import { IoBulbOutline } from "react-icons/io5";
import { Ri24HoursFill } from "react-icons/ri";
const WhyChooseUs = () => {
  return (
    <section className="why_section fade-in">
      <div className="why_content">
        <div className="why_head">
          <h2>Why DigitalWave?</h2>
          <p>We’ve earned trust by uplifting and empowering communities across the globe.</p>
        </div>
        <div className="why_innercontent">
          <div className="inner inner1">
            <FaClipboardList className="why_icons"/>
            <h3>Results-Driven</h3>
            <p>
              Your generosity is safe with us.<br /> Every donation is handled transparently<br /> to make a meaningful impact.
            </p>
          </div>
          <div className="inner inner2">
            <IoBulbOutline className="why_icons"/>
            <h3>Innovative Strategies</h3>
            <p>
              Our streamlined platform ensures your <br />
              donations are quick, secure, and impactful—making <br />
              giving easier than ever.
            </p>
          </div>
          <div className="inner inner3">
            <Ri24HoursFill className="why_icons"/>
            <h3>24/7 Support</h3>
            <p>
              Our platform ensures your donation reaches those who<br /> need it most, no matter their location. Your gift has <br />
              the power to transform lives across the globe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;