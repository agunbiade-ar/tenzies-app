// eslint-disable-next-line react/prop-types
import Dice from './Dice';

function MainComponent({ diceRolls, handleToggle, rollDice, wonGame }) {
  console.log(wonGame);
  return (
    <main>
      {wonGame && <h3>Good job, click on Restart to go again!</h3>}
      <div>
        {diceRolls.map((dice) => (
          <Dice
            key={dice.id}
            held={dice.held}
            number={dice.number}
            id={dice.id}
            handleToggle={handleToggle}
          />
        ))}
      </div>
      <button
        className='bg-slate-800 text-white hover:bg-orange-100 hover:text-gray-700 font-bold py-2 px-4 border rounded'
        onClick={rollDice}
      >
        {wonGame ? 'Restart' : 'Roll Dice'}
      </button>
    </main>
  );
}

export default MainComponent;
