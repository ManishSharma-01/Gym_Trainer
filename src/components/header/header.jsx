import pic from "../../assets/images/logo.png";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">React & Node</span> */}
        <span className="headerTitleLg">Welcome To online Gym trainer</span>
      </div>
      <img
      className="headerImg"
      src={pic}
        alt="" />
    </div>
  )
}