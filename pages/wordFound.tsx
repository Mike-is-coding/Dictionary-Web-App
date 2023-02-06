import KeyGen from "./KeyGenerator";

interface Props {
  dictData: any;
}

const WordFound: React.FC<Props> = ({ dictData }) => {
  const iterMeanings = () => {
    let arr: JSX.Element[] = [];
    const meanings = dictData.meanings.forEach((obj: any) => {
      arr = arr.concat([
        <h3 className="my-4" key={KeyGen(5)}>
          {obj.partOfSpeech}
        </h3>,
        <h4 className="my-4" key={KeyGen(5)}>
          {"Meaning"}
        </h4>,
      ]);
      if (obj.definitions) {
        for (let j = 0; j < obj.definitions.length; j++) {
          //append all definitions to arr
          console.log(obj.definitions[j].definition);
          arr = arr.concat([
            <li className="ml-5 my-4" key={KeyGen(5)}>
              {obj.definitions[j].definition}
            </li>,
          ]);
        }
      }
    });
    // console.log(arr);
    return arr;
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
      <h1>{dictData.word}</h1>
      <div>{getPhonetics()}</div>
      <div className="">{iterMeanings()}</div>
      <div></div>
    </section>
  );
};

export default WordFound;
