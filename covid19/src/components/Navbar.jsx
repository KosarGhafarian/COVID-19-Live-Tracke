import Logo from "../assets/images/covid-19-logo.png";

const Navbar = () => {
  return (
    <nav>
      <img src={Logo} alt="covid-19-logo" className="covid-19-logo" />
    </nav>
  );
};

export default Navbar;
