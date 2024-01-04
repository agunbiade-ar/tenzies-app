import HeaderFooterComponent from './Components/HeaderFootercComponent';
import MainComponent from './Components/MainComponent';
import { generateRandomArray, randomNumberGenerator } from './utils/utils';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [diceRolls, setDiceRolls] = useState(generateRandomArray);
  const [wonGame, setWonGame] = useState(false);

  useEffect(() => {
    setWonGame((prevWonGame) => {
      return diceRolls.every((diceRoll) => diceRoll.held == true)
        ? true
        : false;
    });
  }, [diceRolls]);

  console.log(wonGame);

  function handleToggle(id) {
    setDiceRolls((prevDiceRolls) => {
      return prevDiceRolls.map((diceRoll) => {
        return diceRoll.id === id
          ? { ...diceRoll, held: !diceRoll.held }
          : diceRoll;
      });
    });
  }

  function rollDice() {
    if (wonGame) {
      setDiceRolls(generateRandomArray());
    } else {
      setDiceRolls((prevDiceRolls) => {
        return prevDiceRolls.map((diceRoll) => {
          return diceRoll.held
            ? diceRoll
            : { ...diceRoll, number: randomNumberGenerator() };
        });
      });
    }
  }
  return (
    <>
      <HeaderFooterComponent
        headerText='TENZIES'
        otherText="let's flex our fingers by playing a fun game!"
      />
      <MainComponent
        diceRolls={diceRolls}
        handleToggle={handleToggle}
        rollDice={rollDice}
        wonGame={wonGame}
      />
      <HeaderFooterComponent
        headerText='In respect to Bob Ziroll (and FreeCodeCamp)'
        otherText='My very first React Teacher'
      />
    </>
  );
}

export default App;
