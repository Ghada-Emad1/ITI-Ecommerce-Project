import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 sticky top-0 bg-black text-white">
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex gap-6">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};
