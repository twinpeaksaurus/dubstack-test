import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './template/Home';
import SignUp from './template/SignUp';
import SignIn from './template/SignIn';
import Terms from './template/Terms';
import Privacy from './template/Privacy';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />

    </Routes>
  );
}

export default App;
