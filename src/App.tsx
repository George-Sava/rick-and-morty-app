import React from 'react';
import MainLayoutComponent from './features/Layout/components/MainLayoutComponent';
import CharacterGridContainerComponent from './features/CharacterPage/components/CharacterGridContainerComponent';
import {
  BrowserRouter as Router,
  Routes, 
  Route
} from 'react-router-dom';

const App: React.FC = () =>
{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayoutComponent />} />
        <Route
          path="/character/:characterId"
          element={<CharacterGridContainerComponent />}
        />
      </Routes>
    </Router>
  );
}

export default App;
