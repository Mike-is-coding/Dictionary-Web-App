import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import Dropdown from "./DropdownMenu";

interface Props {
  font: string;
  setFont: Function;
  userWord: string;
  setUserWord: Function;
  dictData: any;
  setDictData: Function;
  word: string;
  setWord: Function;
}

const QuerySection: React.FC<Props> = ({
  font,
  setFont,
  userWord,
  setUserWord,
  dictData,
  setDictData,
  word,
  setWord,
}) => {
  //Handle the dictionary api call
  function handleApiCall() {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userWord}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data = data[0];
        console.log(data);
        if (!data) {
          console.log("Whoops, can't be empty");
        } else {
          setDictData(data);
          setWord(dictData.word);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //Test input box
  useEffect(() => {
    console.log(userWord);
  }, [userWord]);

  return (
    <>
      <section className="bg-zinc-100">
        <div
          className="flex flex-row justify-between items-center my-5 dark:bg-gray-400"
          id="Page-Options"
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="30.000000pt"
            height="30.000000pt"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path
                d="M1357 5100 l-27 -21 0 -185 c0 -101 -4 -184 -8 -184 -4 0 -59 17
-122 39 -63 21 -159 49 -212 62 l-98 23 -27 -21 -28 -20 -3 -534 -2 -535 -129
-36 c-71 -20 -176 -55 -235 -78 -104 -41 -136 -65 -136 -102 0 -16 -10 -18
-77 -18 -133 0 -200 -30 -234 -104 -18 -39 -19 -92 -19 -1217 0 -1106 1 -1178
18 -1197 27 -32 81 -33 112 -2 20 20 20 33 20 1184 0 988 2 1165 14 1175 9 7
42 11 88 9 l73 -3 3 -1492 2 -1492 26 -20 27 -21 2177 0 2177 0 27 21 26 20 2
1492 3 1492 76 3 c56 2 79 -1 87 -11 9 -11 11 -408 10 -1593 l-3 -1579 -1089
-3 c-1061 -2 -1090 -2 -1110 17 -48 44 -109 66 -193 69 -72 4 -89 1 -140 -23
-32 -14 -67 -35 -79 -46 -20 -19 -42 -19 -1110 -17 l-1089 3 -5 223 c-5 207
-6 225 -24 238 -29 21 -82 18 -106 -6 -19 -19 -20 -33 -20 -245 0 -202 2 -230
19 -263 23 -46 46 -67 94 -87 32 -13 171 -15 1156 -15 l1120 0 33 28 c63 54
81 62 138 62 57 0 75 -8 138 -62 l33 -28 1120 0 c985 0 1124 2 1156 15 48 20
71 41 94 87 18 36 19 87 19 1640 0 1542 -1 1605 -19 1644 -33 74 -101 104
-232 104 l-76 0 -6 30 c-8 38 -36 56 -176 106 l-116 42 -3 261 -2 260 -27 20
c-20 17 -40 21 -92 21 -87 0 -281 -17 -404 -35 -447 -66 -921 -260 -1259 -516
-86 -65 -82 -67 -93 36 -9 88 -51 270 -87 377 -164 497 -480 827 -937 978
-158 52 -199 58 -234 30z m313 -219 c160 -69 324 -190 434 -321 189 -224 300
-486 362 -855 16 -89 18 -229 21 -1310 2 -665 2 -1207 -1 -1204 -3 2 -31 57
-64 120 -79 156 -157 265 -277 385 -156 158 -347 273 -569 345 l-96 31 0 1439
0 1438 52 -16 c29 -8 91 -32 138 -52z m-548 -265 c73 -24 150 -51 171 -60 l37
-16 0 -1278 c0 -1123 2 -1280 15 -1299 10 -14 34 -26 71 -33 30 -6 94 -25 142
-41 389 -131 667 -419 817 -849 36 -104 80 -269 73 -276 -2 -2 -33 36 -70 84
-326 433 -782 753 -1278 897 l-115 33 -3 1441 c-1 793 0 1441 3 1441 3 0 65
-20 137 -44z m3220 -935 c3 -376 4 -400 22 -420 25 -27 79 -28 106 -1 18 18
20 33 20 136 0 107 1 116 18 109 9 -4 43 -16 75 -27 l57 -20 0 -1365 0 -1365
-22 5 c-13 2 -66 16 -118 31 -133 37 -332 73 -484 87 -156 14 -462 7 -591 -15
-49 -8 -91 -14 -93 -12 -6 6 146 62 269 100 228 69 438 104 691 115 133 5 159
9 177 25 21 19 21 20 21 916 0 842 -1 899 -18 919 -24 30 -76 31 -105 2 l-22
-22 -3 -843 -2 -843 -115 -7 c-538 -30 -1086 -224 -1495 -526 -44 -33 -82 -60
-85 -60 -3 0 -5 636 -5 1414 l0 1414 53 47 c124 109 332 243 522 335 320 155
727 255 1087 269 l37 1 3 -399z m-3512 -1059 c0 -882 1 -940 18 -955 9 -8 62
-27 118 -41 406 -103 765 -309 1072 -616 91 -91 239 -267 284 -338 l19 -30
-106 44 c-182 75 -325 115 -540 151 -87 14 -163 18 -360 17 -285 0 -424 -17
-670 -80 -77 -19 -150 -38 -162 -41 l-23 -5 0 1365 0 1365 68 23 c131 45 237
77 260 78 l22 1 0 -938z m741 -1922 c238 -24 487 -93 677 -186 l107 -52 -937
-1 -938 -1 0 54 0 53 108 32 c173 50 321 79 547 105 71 8 341 5 436 -4z m2573
-15 c137 -22 262 -49 389 -86 l107 -32 0 -53 0 -54 -937 1 -938 1 107 52 c182
89 433 160 658 185 122 14 495 5 614 -14z"
              />
            </g>
          </svg>
          <div className="flex divide-x-2">
            {/* Font select dropdown */}
            <Dropdown font={font} setFont={setFont} />
            {/* Toggle Switch */}
            <div className="flex items-center">
              <label
                htmlFor="Theme-toggle-switch"
                className="flex items-center cursor-pointer relative ml-4"
              >
                <input
                  type="checkbox"
                  id="Theme-toggle-switch"
                  className="sr-only"
                />
                <div className="toggle-bg bg-zinc-500 border-none h-6 w-11 rounded-full"></div>
                <span className="ml-3 text-gray-900 text-sm font-medium"></span>
              </label>
            </div>
          </div>
        </div>
        {/* Query Box */}
        <div className="flex my-10 rounded-2xl bg-gray-200 p-3" id="Searchbox">
          <input
            className="w-full focus:ring-transparent text-2xl bg-gray-200 mr-2 border-none"
            type="text"
            name="Word Textbox"
            id="word-entry"
            onChange={(e) => {
              setUserWord(e.target.value);
            }}
          />
          <button
            className="flex justify-center items-center w-10"
            onClick={handleApiCall}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                fill="none"
                stroke="#A445ED"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
              />
            </svg>
          </button>
        </div>
        <h1>{word}</h1>
      </section>
    </>
  );
};

export default QuerySection;
