import Image from 'next/image'
import FrowningFace from '../public/slightly-frowning.png'

interface Props {
    dictData: any;
}

const WordNotFound: React.FC<Props> = ({dictData}) => {

    return (
      <>
        <Image src={FrowningFace} alt="Frowning Face" width={200} height={200} />
        <h3>{dictData.title}</h3>
        <p>{dictData.message + dictData.resolution}</p>
      </>
    );
  };

export default WordNotFound;