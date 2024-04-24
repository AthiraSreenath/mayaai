import React from 'react';

import ThemeSetter from './ThemeSetter';
import { ContextHandler } from './AppContext';

function App() {
  return (
    <ContextHandler>
        <ThemeSetter>
            <div className="App">
                <header className="App-header">
                    MayaAI
                </header>
            </div>
        </ThemeSetter>
    </ContextHandler>
  );
}

export default App;
