import React, { ReactComponentElement, useEffect, useState } from "react";
import WordNotFound from "./wordNotFound";
import WordFound from "./wordFound";

interface Props {
  dictData: object | any;
  userWord: string;
}

const Content: React.FC<Props> = ({ dictData, userWord }) => {
  const renderContent = () => {
    if (dictData.title) {
      return <WordNotFound dictData={dictData} />;
    } else if (dictData.word !== "") {
      return <WordFound dictData={dictData} />;
    } else if (!userWord) {
      return (
        <>
          <h1></h1>
        </>
      );
    }
  };

  return (
    <>
      <section className="relative">{renderContent()}</section>
    </>
  );
};

export default Content;
