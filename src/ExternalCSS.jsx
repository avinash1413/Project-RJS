// import './CSS/Style.css';
// import React from "react";

// Team data
const users = [
  {
    name: "Avi18",
    info: "Fullstack Developer, Code Enthusiast, React/Spring Boot Architect.",
    image: "https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826",
    category: "Tech"
  },
  {
    name: "Sam",
    info: "UI/UX Designer with strong ReactJS and CSS experience.",
    image: "https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826",
    category: "Design"
  },
  {
    name: "Priya",
    info: "Database Architect, DevOps Practitioner, MySQL Expert.",
    image: "https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826",
    category: "Database"
  },
  {
    name: "Menaka",
    info: "Fitness and Nutrition advisor, Macro planning specialist.",
    image: "https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826",
    category: "Lifestyle"
  }
];

// Featured products/items
const products = [
  {
    name: "Sneaker Store",
    desc: "Spring Boot + ReactJS based e-commerce sneaker shop. JWT Authentication & MySQL integration.",
    image: "https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826",
    price: "₹2999"
  },
  {
    name: "Tech Blog",
    desc: "A modern blog app built in ReactJS, featuring full responsive design and instant search.",
    image: "https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826",
    price: "Free"
  },
  {
    name: "Nutrition Tracker",
    desc: "Track your macros with a robust fullstack planner. Powerful analytics, built in Spring Boot and React.",
    image: "https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826",
    price: "₹499"
  },
  {
    name: "Portfolio Website",
    desc: "A beautiful personal portfolio template—HTML, CSS, React, fully customizable with your style.",
    image: "/img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826",
    price: "Free"
  }
];

export default function ExternalCSS() {
  return (
    <div className="container" style={{flexWrap:'wrap'}}>
      {/* Project Header */}
      <div className="header">
        <h1>Fullstack Showcase</h1>
        <p>
          Explore featured team members and project samples. All styling powered by an external CSS file with responsive and interactive elements.
        </p>
      </div>

      {/* Team Members Section */}
      <div className="heading">Our Core Team Members</div>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {users.map((user, idx) => (
          <div className="user-card" key={idx}>
            <img className="user-image" src={user.image} alt={user.name} />
            <div className="user-info">
              <h4>{user.name}</h4>
              <p>{user.info}</p>
              <button className="button-style">Contact</button>
              <button className="button-style">Profile</button>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Items Section */}
      <div className="heading" style={{marginTop:40}}>Featured Projects</div>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {products.map((product, idx) => (
          <div className="box-style" key={idx}>
            <img className="img-style" src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.desc}</p>
            <span style={{fontWeight:"bold",color:"#646cff"}}>{product.price}</span>
            <div>
              <button className="button-style">View</button>
              <button className="button-style">Clone</button>
            </div>
          </div>
        ))}
      </div>

      {/* Text Wrap Section */}
      <div className="text-wrap">
        <p>
          This page is styled using custom external CSS. Cards, images, buttons, and typography scale responsively and look great on all devices.
        </p>
        <p>
          Try hovering over every card and button to see interactive effects. The layout adapts for mobile screens with media queries.
        </p>
      </div>

      {/* Footer */}
      <div className="footer">
        &copy; {new Date().getFullYear()} | Fullstack Demo | <a href="https://github.com/">GitHub</a>
      </div>
    </div>
  );
}




