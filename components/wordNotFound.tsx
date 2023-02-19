/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import FrowningFace from "../public/slightly-frowning.webp";

interface Props {
  dictData: any;

}

const WordNotFound: React.FC<Props> = ({ dictData }) => {
  return (
    <>
      <div className="flex justify-center flex-col items-center mt-10">
        <img src={FrowningFace.src} alt="Frowning Face" />
        <h3 className="font-bold my-6 dark:text-white">{dictData.title}</h3>
        <h3 className="text-gray-500 text-center mb-20">{dictData.message + " " + dictData.resolution}</h3>
      </div>
    </>
  );
};

export default WordNotFound;
