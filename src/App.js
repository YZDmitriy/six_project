import { Clicer } from './components/Clicker/Clicer';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/layout/Home';
import { ModalWindow } from './components/ModalWindow/ModalWindow';
import { Quiz } from './components/Quiz/Quiz';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/clicker' element={<Clicer />} />
        <Route path='/modal_window' element={<ModalWindow />} />
        <Route path='/quiz_game' element={<Quiz/>} />
      </Routes>
    </>
  );
}

export default App;
