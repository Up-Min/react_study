import { Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Routes>
      {/* declare Route */}
      <Route path="/" element={<Home />} /> {/* to home */}
      <Route path="/about" element={<About />} /> {/* to about */}
      <Route path="/proflies/:username" element={<Profile />} />
    </Routes>
  );
};

export default App;
