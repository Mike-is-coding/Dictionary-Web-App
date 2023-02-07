import KeyGen from "./KeyGenerator";

interface Props {
  dictData: any;
}

const WordFound: React.FC<Props> = ({ dictData }) => {
  const getAudio = () => {
    let audio:any = ""
    for (let i = 0; i < dictData.phonetics; i++) {
      if (Object.hasOwn(dictData.phonetics[i], "audio")) {
        audio = new Audio(dictData.phonetics[i].audio)
        break
      }
    }
    console.log(audio);
    return audio;
  }

  let audio:HTMLAudioElement = getAudio();

  const iterMeanings = () => {
    let arr: JSX.Element[] = [];
    // console.log(dictData);
    dictData.meanings.forEach((obj: any) => {
      arr = arr.concat([
        <h2 className="my-8 font-bold italic" key={KeyGen(5)}>
          {obj.partOfSpeech}
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

  return (
    <section className="absolute w-full">
      <h1 className="font-bold">{dictData.word}</h1>
      <div className="absolute right-0 top-12">
        <button onClick={() => {audio.play()}}>
          <svg
            id="play-audio"
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 75 75"
          >
            <g className="hover:fill-white" fill="#A445ED" fill-rule="evenodd">
              <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
              <path d="M29 27v21l21-10.5z" />
            </g>
          </svg>
        </button>
      </div>
      <div style={{color: "#A445ED"}}>{getPhonetics()}</div>
      <div className="">{iterMeanings()}</div>
      <div></div>
    </section>
  );
};

export default WordFound;
