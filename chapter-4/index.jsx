import React from "react";
import { restrautList } from "./constants";
import "./styles.css";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);

const RestaruntList = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
        alt="restarunt-list"
      />
      <h2>{name}</h2>
      <h3>{cuisines}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {restrautList.map((item) => (
        <RestaruntList {...item.data} key={item.data.id} />
      ))}
    </div>
  );
};
const Footer = () => {
  return <h4>Footer</h4>;
};
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Chapter4 = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Chapter4;
