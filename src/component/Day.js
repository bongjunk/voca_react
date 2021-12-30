import React, { useEffect, useState } from 'react';
import { usePrams } from 'react-router-dom';
import Word from './Word';

export default function Day() {
  // const day = usePrams().day;
  const { day } = usePrams();
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/words?day=${day}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setDays(data);
      })
  }, [day]);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => {
            <Word word={word} key={word.id} />
          })}
        </tbody>
      </table>
    </>
  );
}
