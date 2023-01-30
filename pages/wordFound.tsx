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

  return (
    <>
      <h1>{dictData.word}</h1>
      <h2>{dictData.phonetic}</h2>
      <div>{iterMeanings()}</div>
    </>
  );
};

export default WordFound;
