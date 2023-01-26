import { ReactPropTypes, useEffect, useState } from "react";

interface Props {
  userWord: string;
  dictData: any;
  setDictData: Function;
  word: string;
  setWord: Function;
}

const GetWordInfo: React.FC<Props> = ({
  userWord,
  dictData,
  setDictData,
  word,
  setWord,
}) => {
  const handleApiCall = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userWord}`)
      .then((response) => {
        return response.json();
      })
      .then((data: object[]) => {
        console.log(data[0]);
        setDictData(data[0]);
      })
      .catch((reject) => {
        console.log(reject);
      });
  };

  useEffect(() => {
    if (dictData) {
      setWord(dictData["word"]);
    }
  }, [dictData, setWord]);

  return (
    <>
      <button className="" onClick={handleApiCall}>Click for test</button>
      <h1>{word}</h1>
    </>
  );
};

export default GetWordInfo;
