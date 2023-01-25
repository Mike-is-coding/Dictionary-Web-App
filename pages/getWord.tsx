import { useEffect, useState } from "react";

interface Props {
  userWord: string;
}

const GetWordInfo: React.FC<Props> = () => {
  const [dictData, setDictData] = useState<any>("");

  const handleApiCall = () => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hllo")
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

    if (dictData) {
        setDictData(dictData["word"]);
    } else {
        setDictData("Word doesn't exist");
    }
  };

//   useEffect(() => {
//     if (typeof dictData === undefined) {
//       setDictData("Word doesn't exist");
//     } 
//   }, [dictData]);

  return (
    <>
      <button onClick={handleApiCall}>Click for test</button>
      <h1>{dictData}</h1>
    </>
  );
};

export default GetWordInfo;
