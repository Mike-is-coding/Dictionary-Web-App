import React, { ReactComponentElement, useEffect, useState } from "react";
import WordNotFound from "./wordNotFound";
import WordFound from "./wordFound";

interface Props {
  dictData: object | any;
  userWord: string;
  phonetics: Object[] | any;
  setPhonetics: Function;
}

const Content: React.FC<Props> = ({ dictData, userWord, phonetics }) => {
  const renderContent = () => {
    if (dictData.title) {
      return <WordNotFound dictData={dictData} />;
    } else if (dictData.word !== "") {
      return <WordFound dictData={dictData} phonetics={phonetics} />;
    } else if (!userWord) {
      return (
        <>
          <h1></h1>
        </>
      );
    }
  };
  // console.log(phonetics);

  return (
    <>
      <section className="relative">{renderContent()}</section>
    </>
  );
};

export default Content;
