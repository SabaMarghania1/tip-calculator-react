import Logo from './Components/Logo';
import TipSettings from './Components/TipSettings';
import Display from './Components/Display';

import {useState} from 'react';

function App() {
  // const [bill, setBill] = useState('');
  // const [tip, setTip] = useState(0);
  // const [people, setPeople] = useState('');

  const [values, setValues] = useState({
    bill: '',
    tip: 0,
    people: '',
  });

  function handleSelectTip(value) {
    setValues({
      ...values,
      tip: value,
    });
  }

  return (
    <>
      <header>
        <Logo />
      </header>
      <main className="container">
        <TipSettings onSelectTip={handleSelectTip} values={values} />
        <Display />
      </main>
    </>
  );
}

export default App;
