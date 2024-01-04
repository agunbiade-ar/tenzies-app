function Dice({ id, held, number, handleToggle }) {
  return (
    <div
      className={`dice-container shadow-lg rounded-lg ${
        held ? 'bg-green-300' : 'bg-orange-50'
      }`}
      onClick={() => handleToggle(id)}
    >
      <h1 className='dice font-bold text-2xl'>{number}</h1>
    </div>
  );
}

export default Dice;
