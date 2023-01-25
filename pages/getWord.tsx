import { useEffect, useState } from "react";

interface Props {
  userWord: string;
}

const GetWordInfo: React.FC<Props> = () => {
  const [dictData, setDictData] = useState<any>("");
  const [word, setWord] = useState<string>("")

  const handleApiCall = () => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
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
    setWord(dictData['word']) 
  }, [dictData]);

  return (
    <>
      <button onClick={handleApiCall}>Click for test</button>
      <h1>{word}</h1>
    </>
  );
};

export default GetWordInfo;
