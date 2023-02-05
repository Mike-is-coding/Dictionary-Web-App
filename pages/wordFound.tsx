interface Props {
  dictData: any;
}

const WordFound: React.FC<Props> = ({ dictData }) => {
  const iterMeanings = () => {
    let arr:JSX.Element[] = [];
    let i = 0;
    const meanings = dictData.meanings.forEach((obj:any) => {
      arr = arr.concat(
        [<h3 key={i}>{obj.partOfSpeech}</h3>,
        <h4 key={i + 1}>Meaning</h4>,
        <li key={i + 2}>{obj.definitions[0].definition}</li>]
      )
      i+=3;
    })
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
      <div>{iterMeanings()}</div>
      <div></div>
    </section>
  );
};

export default WordFound;
