import React from "react";
import ContentTitle from "../ContentTitle/ContentTitle";
import Language from "./Language/Language";

const Languages = ({ languages }) => (
  <section>
    <ContentTitle headingData="LANGUAGES" />
    {languages.map((item, index) => (
      <Language key={index} title={item.language} level={item.level} />
    ))}
  </section>
);

export default Languages;
