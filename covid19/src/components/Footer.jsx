import FooterLogo from "../assets/images/covid-19-footer-logo.png";
import "../assets/styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="flex border-b border-[#FFFBEB] border-solid">
        <div className="grid ml-[8rem] my-[5rem] gap-7">
          <img src={FooterLogo} alt="covid-19-logo" />
          <p className="description">
            This landing page was designed by DesignMamba and Kosar Ghafarian
            Mobarez Tabrizi displayed it with react technology.
          </p>
        </div>
      </div>
      <div>
        <p className="copyright">
          <a href="https://dribbble.com/hmhafizibrahim">©Designmamba</a>{" "}
          <a href="https://github.com/KosarGhafarian">
            @Kosar Ghafarian Mobarez Tabrizi
          </a>{" "}
          All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
