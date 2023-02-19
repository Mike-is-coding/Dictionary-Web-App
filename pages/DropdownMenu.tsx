import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  font: string;
  setFont: Function;
}

const DropdownMenu: React.FC<Props> = ({ font, setFont }) => {
  const getFontName = () => {
    switch (font) {
      case "font-sans":
        return "Sans-Serif";
      case "font-serif":
        return "Serif";
      case "font-mono":
        return "Mono";
    }
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className={`inline-flex ${font} dark:bg-gray-900 dark:text-white font-bold w-full justify-center items-center rounded-lg border-none bg-white px-4 py-2 text-lg font-medium focus:ring-transparent`}>
          {getFontName()}
          <ChevronDownIcon
            className="-mr-1 ml-2 h-5 w-5 text-purple-600"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-5 z-10 mt-2 w-40 origin-top-right rounded-lg bg-white dark:bg-gray-900 shadow-none ring-1 ring-transparent ring-opacity-5 focus:outline-none" id="Menu-items">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? "text-purple-600" : "text-black dark:text-white",
                    "block font-sans font-bold text-lg w-full px-4 py-2 text-left text-sm"
                  )}
                  onClick={() => {
                    setFont("font-sans")
                    console.log(font);
                  }}
                >
                  Sans-Serif
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? "text-purple-600" : "text-black dark:text-white",
                    "block font-sans font-bold text-lg w-full px-4 py-2 text-left text-sm"
                  )}
                  onClick={() => {
                    setFont("font-serif")
                    console.log(font);
                  }}
                >
                  Serif
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? "text-purple-600" : "text-black dark:text-white",
                    "block font-sans font-bold text-lg w-full px-4 py-2 text-left text-sm"
                  )}
                  onClick={() => {
                    setFont("font-mono")
                    console.log(font);
                  }}
                >
                  Mono
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownMenu;
