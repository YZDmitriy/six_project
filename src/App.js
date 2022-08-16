import { Clicer } from './components/Clicker/Clicer';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/layout/Home';

function App() {
  return (
    <>
     
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/clicker' element={<Clicer />} />
      </Routes>
    </>
  );
}

export default App;
