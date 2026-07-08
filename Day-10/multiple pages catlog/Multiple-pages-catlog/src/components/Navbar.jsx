import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#0077cc",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/products" style={{ color: "white", textDecoration: "none" }}>Products</Link>
      <Link to="/categories" style={{ color: "white", textDecoration: "none" }}>Categories</Link>
      <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
      <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;