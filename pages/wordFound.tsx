import { useEffect, useState } from "react";
import KeyGen from "./KeyGenerator";

interface Props {
  dictData: any;
  phonetics: any;
}

const WordFound: React.FC<Props> = ({ dictData, phonetics }) => {
  // console.log(dictData.phonetics)
  const [audio, setAudio] = useState<any>();

  {
    /* Get and render meanings */
  }
  const iterMeanings = () => {
    let arr: JSX.Element[] = [];
    // console.log(dictData);
    dictData.meanings.forEach((obj: any) => {
      arr = arr.concat([
        <h2 className="my-8 font-bold italic flex items-center" key={KeyGen(5)}>
          {obj.partOfSpeech}
          <div className="w-full h-px bg-gray-200 ml-6"></div>
        </h2>,
        <h4 className="my-4 text-gray-500" key={KeyGen(5)}>
          {"Meaning"}
        </h4>,
      ]);
      if (obj.definitions) {
        {
          /* append all definitions to arr */
        }
        for (let j = 0; j < obj.definitions.length; j++) {
          // console.log(obj.definitions[j].definition);
          arr = arr.concat([
            <li className="ml-5 my-2 text-gray-800" key={KeyGen(5)}>
              {obj.definitions[j].definition}
            </li>,
          ]);
        }
      }
      if (obj.synonyms && obj.synonyms.length > 0) {
        arr = arr.concat([
          <h4 className="my-8 text-gray-500" key={KeyGen(5)}>
            {"Synonyms"}
            <span className="ml-4 font-bold text-purple-600">
              {obj.synonyms}
            </span>
          </h4>,
        ]);
      }
    });
    // console.log(arr);
    return dictData.word ? arr : "";
  };

  const getPhonetics = () => {
    if (dictData.phonetics[1]) {
      return <h2>{dictData.phonetics[1].text}</h2>;
    } else {
      return <h2>{dictData.phonetic}</h2>;
    }
  };

  const getAudio = () => {
    let arr: any = [];
    for (let i = 0; i < dictData.phonetics.length; i++) {
      arr = arr.concat(dictData.phonetics[i].audio);
    }
    let longest = arr.reduce(
      (a: string, b: string) => (a.length > b.length ? a : b),
      ""
    );
    let newAudio = new Audio(longest);
    setAudio(newAudio);
  };

  return (
    <section className="absolute w-full">
      <h1 className="font-bold text-5xl my-4 lg:text-6xl">{dictData.word}</h1>
      <div className="absolute right-0 top-8">
        <button
          onClick={() => {
            getAudio();
            // console.log(audio);
            if (audio) audio.play();
          }}
        >
          <svg
            id="play-audio"
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 75 75"
          >
            <g className="hover:fill-white" fill="#A445ED" fillRule="evenodd">
              <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
              <path d="M29 27v21l21-10.5z" />
            </g>
          </svg>
        </button>
      </div>
      <div style={{ color: "#A445ED" }}>{getPhonetics()}</div>
      <div className="">{iterMeanings()}</div>
      <div className="w-full h-px bg-gray-200 my-8"></div>
      <div className="mb-20">
        <h4 className="text-gray-500 underline block">{"Source"}</h4>
        <h4 className="flex items-center underline">
          <a href={dictData.sourceUrls[0]}>{dictData.sourceUrls[0]}</a>
          <svg
            className="ml-2"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            <path
              fill="none"
              stroke="#838383"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
            />
          </svg>
        </h4>
      </div>
    </section>
  );
};

export default WordFound;
