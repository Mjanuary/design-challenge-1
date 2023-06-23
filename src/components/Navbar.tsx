import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="container">
      <div className="container">
        <img src="/logo.png" className="logo" alt="" />
      </div>
      <ul>
        <li>
          <NavLink to={"/"}>HOME</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>GALLERY</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>ABOUT US</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>CONTACT</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>BLOG</NavLink>
        </li>
      </ul>
      <ul>
        <li>Search</li>
        <li>Profile</li>
        <li>Card</li>
      </ul>
    </nav>
  );
}
