import './App.css';
import React, { Suspense, lazy } from 'react';
// import StudentForm from './components/StudentForm';

const Home = lazy(() => import('./components/StudentForm.js'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div><h1>Loading...</h1></div>}>
        <Home />
      </Suspense>
    </div>
  );
}

export default App;
