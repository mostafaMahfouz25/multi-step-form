import React from 'react';
import './App.css';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">

          <div className="container">
            <div className="row">
                <div className="col-6 mx-auto border p-3">
                    <UserForm />
                </div>
            </div>
          </div>
          

    </div>
  );
}

export default App;
