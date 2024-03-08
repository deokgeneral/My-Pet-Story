import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './MainPage';
import Header from './components/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
