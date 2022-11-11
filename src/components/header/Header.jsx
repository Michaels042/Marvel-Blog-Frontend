// import Heropic from "../../assets/images/everst.jpg";
import Heropic from "../../assets/images/1a501ey1uwe91.jpg";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm glow">....coming soon</span>
        {/* <span className="headerTitleLg">Blog</span> */}
      </div>
      <img className="headerImg" src={Heropic} alt="" />
    </div>
  );
};

export default Header;
