import React from "react";

const experienceContent = [
  {
    year: "   2018 - Present",
    position: " Web Application And Ai",
    details: `  E-Commerce Customizable Post Card Website , Forums and blogs , MarketPlace with Banking systeme
                and  integrated ERP`,
  },
  {
    year: "2015 - 2018",
    position: " Desktop Application ",
    details: `Shell mini ERP for Stocks "C++", ERP and POS For clothing Store "C++"`,
  },
  {
    year: "2014 - 2015",
    position: "Mobile Application Development",
    details: `E-Commerce Application , Chat Application`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
