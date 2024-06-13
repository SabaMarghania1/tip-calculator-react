import Logo from './Components/Logo';
import TipSettings from './Components/TipSettings';
import Display from './Components/Display';

import {useState} from 'react';

function App() {
  const [values, setValues] = useState({
    bill: '',
    tip: 0,
    people: '',
    customTip: '',
  });

  function handleReset() {
    setValues({
      bill: '',
      tip: 0,
      people: '',
      customTip: '',
    });
  }

  return (
    <>
      <header>
        <Logo />
      </header>
      <main className="container">
        <TipSettings values={values} setValues={setValues} />
        <Display values={values} handleReset={handleReset} />
      </main>
    </>
  );
}

export default App;
