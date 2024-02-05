// import pic from "../../assets/images/why.jpeg";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Why Us</span>
        <p>
- Set personalized goals and receive real-time progress updates.<br />
- Join challenges, compete with friends, and stay motivated.<br />
- Sync seamlessly with your favorite devices and apps.   <br />     </p>
        </div>

        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Fitness</li>
            <li className="sidebarListItem">Health</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Travel</li>

        </ul>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US @</span>
            <div className="sidebarSocial">

            <a href="https://www.facebook.com">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            </a>

            <a href="https://www.instagram.co/">
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </a>

            <a href="https://twitter.com/">
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            </a>

            <a href="https://www.linkedin.com">
            <i className="sidebarIcon fa-brands fa-linkedin"></i>
            </a>
            
            </div>
        </div>

    </div>
  )
}