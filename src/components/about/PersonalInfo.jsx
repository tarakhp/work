import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Tarek" },
  { meta: "last name", metaInfo: "Ghorbel" },
  { meta: "Nationality", metaInfo: "Tunisian" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Tunis" },
  { meta: "phone", metaInfo: "+216 27 98 95 82" },
  { meta: "Email", metaInfo: "GorbaTarek@gmail.com" },
  { meta: "langages", metaInfo: "French, English, Arabic" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
