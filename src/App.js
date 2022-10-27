import './App.css';
import NavComponent from './pages/NavComponent/NavComponent';
import HomePage from './pages/HomePage/HomePage';
import Nav from './pages/Nav/Nav';

function App() {
  return (
    <>
    <NavComponent>
      <Nav></Nav>
      <HomePage></HomePage>
    </NavComponent>
    </>
  );
}

export default App;
