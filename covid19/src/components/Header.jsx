import { HeaderCard } from "../constants";
import Covid from "../assets/images/Covid.svg";
import HeaderBackground from "../assets/images/HeaderBackground.svg";
import "../assets/styles/header.css";
import Navbar from "./Navbar";
import Button from "./Button";
import CardBox from "./CardBox";

const Header = () => {
  return (
    <>
      <Navbar />
      <div
        style={{ backgroundImage: `url(${HeaderBackground})` }}
        className="header"
      >
        <p className="header-title">COVID-19 Live Tracke</p>
        <p className="header-description">
          The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China
          in December 2019, the outbreak was later recognized as a pandemic by
          the World Health Organization (WHO) on 11 March 2020.
        </p>
        <Button
          buttonTitle="FIND A DOCTOR"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="m8.25 4.5 7.5 7.5-7.5 7.5" strokeWidth="3" />
            </svg>
          }
          className="header-white-button"
        />
        <Button
          buttonTitle="How to Protect"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="m8.25 4.5 7.5 7.5-7.5 7.5" strokeWidth="3" />
            </svg>
          }
          className="header-pink-button"
        />
        <img src={Covid} alt="covid19" className="emo-covid" />
        <div className="flex flex-row flex-nowrap justify-end items-center status-part">
          {HeaderCard.map((i) => (
            <CardBox key={i.id} data={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
