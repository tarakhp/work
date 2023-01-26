import React from "react";

const skillsContent = [
  { skillClass: "p66", skillPercent: "66", skillName: "DOCKER" },
  { skillClass: "p97", skillPercent: "97", skillName: "PYTHON" },
  { skillClass: "p70", skillPercent: "70", skillName: "PHP" },
  { skillClass: "p85", skillPercent: "85", skillName: "C++" },
  { skillClass: "p45", skillPercent: "45", skillName: "C#" },
  { skillClass: "p77", skillPercent: "77", skillName: "SQL" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
