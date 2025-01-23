import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Navigation/Header';
import Sidebar from './components/Navigation/Sidebar';
import AppLauncher from './components/Navigation/AppLauncher';
import ContentView from './components/Content/ContentView';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAppLauncherOpen, setIsAppLauncherOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header
          onMenuClick={() => setIsSidebarOpen(true)}
          onAppLauncherClick={() => setIsAppLauncherOpen(true)}
        />
        
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        
        <AppLauncher
          isOpen={isAppLauncherOpen}
          onClose={() => setIsAppLauncherOpen(false)}
        />

        <main className="pt-16 px-4">
          <div className="max-w-[1920px] mx-auto">
            <ContentView />
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;