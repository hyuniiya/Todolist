import { Route, Routes } from 'react-router-dom';
import './style/App.css';
import './style/reset.css';
import Main from './page/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
