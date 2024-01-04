function HeaderFooterComponent({ headerText, otherText }) {
  return (
    <header className='header text-center bg-slate-800 text-white font-extrabold py-2'>
      <h4>{headerText}</h4>
      <p className='font-normal'>{otherText}</p>
    </header>
  );
}

export default HeaderFooterComponent;
