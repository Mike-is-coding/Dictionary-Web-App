interface Props {
  dictData: any;
}

const WordFound: React.FC<Props> = ({ dictData }) => {
  const iterMeanings = () => {
    const meanings = <></>;
    for (let i = 0; i <= dictData.meanings.length; i++) {
      return <h3>{dictData.meanings[i].partOfSpeech}</h3>;
    }
  };
  const getPhonetics =
    dictData.phonetics.filter((obj: { text: string }) => {
      return obj.text !== "";
    })[0].text;
  

  return (
    <>
      <h1>{dictData.word}</h1>
      <h2>{dictData.phonetic}</h2>
      <div>{iterMeanings()}</div>
    </>
  );
};

export default WordFound;
