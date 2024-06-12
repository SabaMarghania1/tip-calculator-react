import Logo from './Components/Logo';
import TipSettings from './Components/TipSettings';
import Display from './Components/Display';
function App() {
  return (
    <>
      <header>
        <Logo />
      </header>
      <main className="container">
        <TipSettings />
        <Display />
      </main>
    </>
  );
}

export default App;
