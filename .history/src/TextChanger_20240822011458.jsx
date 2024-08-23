import { useState, useEffect } from "react";

const TextChanger = () => {
  const texts = ["Hi I am Suryansh", "Hi I am Suryansh", "Hi I am Suryansh"];
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(true);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(text[index].substring(0, endValue));
      if (isForward) {
        setEndValue((prev) => prev + 1);
      } else {
        setEndValue((prev) => prev - 1);
      }
    }, interval);
  }, []);
  return <div>Text Changer</div>;
};

export default TextChanger;
