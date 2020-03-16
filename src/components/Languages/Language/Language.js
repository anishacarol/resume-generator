import React from "react";

const Language = ({ title, level }) => (
  <section>
    <div className="language-wrapper">
      <div className="language-title">{title}</div>
      <div className="language-level">
        {[1, 2, 3, 4, 5].map(item => {
          if (item <= level) {
            return (
              <div className="language" style={{ backgroundColor: "black" }}>
                {level}
              </div>
            );
          }
          return (
            <div
              className="language"
              style={{ backgroundColor: "white", border: "1px solid black" }}
            ></div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Language;
