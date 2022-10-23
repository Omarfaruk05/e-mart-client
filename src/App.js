import './App.css';
import Header from './pages/Header/Header';
import NavComponent from './pages/NavComponent/NavComponent';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <>
    <Header></Header>
    <NavComponent>
      <HomePage></HomePage>
    </NavComponent>
    </>
  );
}

export default App;
