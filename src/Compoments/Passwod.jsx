import React, { useState, useRef, useCallback } from "react";
import copy from "clipboard-copy";

function Passwod() {
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [length, setLength] = useState(8);
  let [password, setPassword] = useState("");
  const range = useRef(8);
  const passwordRef = useRef(null);
  const passworGenerator = () => {
    let pass = "";
    let str = "";
    if (lower) {
      str += "abcdefghijklmnopqrstuvwxyz";
    }
    if (upper) {
      str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (number) {
      str += "0123456789";
    }
    if (symbols) {
      str += "~!@#$%^&*()_+=*/{}][|:';?.>,<";
    }
    for (let i = 0; i < range.current; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    console.log(str);
    if (pass === "") {
      alert("--All checks are empty--");
    } else {
      if (range.current < 8 || range.current > 51) {
        alert("Length out of mentioned range");
      } else {
        setPassword(pass);
      }
    }
  };

  const copyPasswordToClipboard = useCallback(() => {
    if (password == "") {
      alert("Empty");
    } else {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0 , 100);
      window.navigator.clipboard.writeText(password);
    }
  }, [password]);

  return (
    <div className="w-11/12 mx-auto pb-36">
      <div className="p-16">
        <h1 className="text-center text-[30px] font-semibold mb-8">
          Password Generator
        </h1>
        <div className="flex justify-between w-full mb-10">
          <input
            type="text"
            
            value={password}
            id="EncryptedPassword"
            className=" border w-[80%] py-1 px-2 rounded-l-md outline-none "
            ref={passwordRef}
          />
          <button
            className="w-[20%] hover:bg-red-300 hover:text-white bg-red-700 font-medium rounded-r-md  "
            onClick={copyPasswordToClipboard}
          >
            copy
          </button>
        </div>
        <div className="flex justify-between mb-5 ">
          <h3>
            Select Password length <b>(**8-50 characters**)</b>
          </h3>
          <input
            type="number"
            name=""
            id=""
            defaultValue={range.current}
            onChange={(e) => {
              range.current = e.target.value;
            }}
            className="border-2 px-4 w-24"
          />
        </div>
        <div>
          <input
            type="checkbox"
            name=""
            id="upper"
            checked={upper}
            onChange={() => (setUpper(() => !upper), setPassword(" "))}
          />
          <label htmlFor="upper">Include upper case</label>
          <br />
          <input
            type="checkbox"
            name=""
            id="lower"
            checked={lower}
            onChange={() => (setLower((prev) => !prev), setPassword(" "))}
          />
          <label htmlFor="lower">Include lower case</label>
          <br />
          <input
            type="checkbox"
            name=""
            id="num"
            checked={number}
            onChange={() => (setNumber((prev) => !prev), setPassword(" "))}
          />
          <label htmlFor="num">Include numbers</label>
          <br />
          <input
            type="checkbox"
            name=""
            id="sym"
            checked={symbols}
            onChange={(e) => (setSymbols((prev) => !prev), setPassword(" "))}
          />
          <label htmlFor="sym">Include symbols</label>
        </div>
        <div>
          <button
            className="text-center w-full hover:bg-red-300 bg-red-700 hover:text-white mt-5 py-1 text-xl font-semibold rounded-md"
            onClick={passworGenerator}
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default Passwod;
