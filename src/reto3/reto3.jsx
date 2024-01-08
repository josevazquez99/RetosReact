import { useState } from "react";
import "./reto3.css";

export function Reto3() {
  let [wordChange, setWordChange] = useState("");
  let [words, setWords] = useState([]);
  let [liWords, setLiWords] = useState([]);

  const removeWord = (wordToRemove) => {
    const filteredWords = words.filter((word) => word !== wordToRemove);
    setWords(filteredWords);

    const filteredLiWords = liWords.filter(
      (li) => li.key !== wordToRemove.toString()
    );
    setLiWords(filteredLiWords);
  };

  const changeWord = (e) => {
    setWordChange(e.target.value);
  };

  const addWord = () => {
    if (wordChange.trim() !== "") {
      setWords([...words, wordChange]);
      setLiWords([
        ...liWords,
        <li key={wordChange}>
          {wordChange}
          <strong className="x" onClick={() => removeWord(wordChange)}>
            X
          </strong>
        </li>,
      ]);
      setWordChange("");
    }
  };

  return (
    <>
      <input type="text" id="word" value={wordChange} onChange={changeWord} />
      <button id="add" onClick={addWord}>
        Add
      </button>
      <ul>{liWords}</ul>
    </>
  );
}
