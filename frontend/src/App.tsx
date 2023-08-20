import React from 'react';
import KitSearch from './components/KitSearch';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Search for Kits</h1>
      </header>
      <main>
        <KitSearch />
      </main>
    </div>
  );
};

export default App;
