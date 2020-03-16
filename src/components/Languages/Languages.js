import React from "react";
import ContentTitle from "../ContentTitle/ContentTitle";
import Language from "./Language/Language";

const Languages = ({ languages }) => (
  <section>
    <ContentTitle headingData="LANGUAGES" />
    <div className="languages-wrapper">
      {languages.map((item, index) => (
        <div>
          <Language key={index} title={item.language} level={item.level} />
        </div>
      ))}
    </div>
  </section>
);

export default Languages;
