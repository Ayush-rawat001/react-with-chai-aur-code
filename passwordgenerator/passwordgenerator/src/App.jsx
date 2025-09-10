import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [length, setlength] = useState(8);
  const [numberallowed, setnumberallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [password, setpassword] = useState("");

  const passwordref = useRef(null)

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberallowed) {
      str += "0123456789";
    }
    if (charallowed) {
      str += "!()?|:;~";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }

    setpassword(pass);
  }, [length, charallowed, numberallowed, setpassword]);

  const copyPasswordtoclipboard = useCallback(() => {
    passwordref.current?.select();

    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordgenerator();
  }, [length, charallowed, numberallowed, passwordgenerator]);

  const inputRef = useRef();


  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-lg p-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-center text-white text-lg p-2">
          Passwordgenerator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white  ">
          <input
            type="text"
            value={password}
            placeholder="password"
            readOnly
            className="outline-none w-full py-1 px-3"
            ref={passwordref}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer"
            onClick={copyPasswordtoclipboard}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberallowed}
              id="numberInput"
              onChange={() => {
                setnumberallowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charallowed}
              id="characterInput"
              onChange={() => {
                setcharallowed((prev) => !prev);
              }}
            />
            <label>characters</label>
          </div>
          <input ref={inputRef} type="text" placeholder="Type here" />

<button onClick={() => inputRef.current.select()}>Focus</button>
        </div>
      </div>
    </>
  );
}

export default App;
