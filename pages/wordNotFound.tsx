import Image from "next/image";
import FrowningFace from "../public/slightly-frowning.webp";

interface Props {
  dictData: any;
}

const WordNotFound: React.FC<Props> = ({ dictData }) => {
  return (
    <>
      <div className="flex justify-center flex-col items-center mt-3">
        <Image src={FrowningFace} alt="Frowning Face" width={80} height={80} />
        <h3 className="font-bold my-6">{dictData.title}</h3>
        <h3 className="text-gray-500 text-center mb-20">{dictData.message + dictData.resolution}</h3>
      </div>
    </>
  );
};

export default WordNotFound;
