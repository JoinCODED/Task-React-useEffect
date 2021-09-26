const { useState, useEffect } = require("react");
const { isConstructorDeclaration } = require("typescript");

const FuncCompoent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [counter, setCounter] = useState(0);

  const count = () => {
    setCounter((prev) => prev + 1);
  };

  const incrementAge = () => {
    setAge((_previousValue) => _previousValue + 1);
  };

  // runs on mount
  // runs on update
  // runs on unmounting

  useEffect(() => {
    // console.log("Hello World!");
    return () => {
      // clean up
    };
  }, [counter]);
};

export default FuncCompoent;
