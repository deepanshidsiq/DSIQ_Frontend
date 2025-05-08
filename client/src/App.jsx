import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ModifyWorkspace from './components/ModifyWorkspace';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './contexts/ThemeContext';
import HomePage from './pages/Home';
import Workspaces from './components/Workspaces';
import WorkspaceForm from './components/WorkspaceForm';


const App = () => {
  const[isLoggedIn,setIsLoggedIn]=useState(false)
  return (
    <ThemeProvider>
    <Router>
       <Toaster position="top-right" reverseOrder={false} />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? <HomePage /> : <WelcomePage />
            }
          />
          <Route path="/login" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
          <Route path="/signup" element={<SignupPage onSignUp={() => setIsLoggedIn(true)} />} />
          <Route path="/workspaces" element={<Workspaces />} />
          <Route path="/workspaces/create" element={<WorkspaceForm />} />
          <Route
            path="/ModifyWorkspace"
            element={
              isLoggedIn ? (
                <ModifyWorkspace
                  workspace={{
                    id: 1,
                    name: "Demo Workspace",
                    category: "Clothing",
                    brand: "Zara"
                  }}
                />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
        </div>
      </div>
    </Router>
    </ThemeProvider>
  );
};

export default App;
