import React from 'react';
import './App.css';
import SignUpForm from './components/Form';
// import TeamList from './components/TeamList';

// const Team = (props) =>
//   [{
//      name:" ",
//     email:" ",
//      role:" " 
//   }]

  function App (props) {
    return (
      <div className="main-container">
        <table className="form-tbl">
            <thead className="tbl-header">
                <tbody clasName="tbl-body">
                  <SignUpForm />
                </tbody>
            </thead>
        </table>
      </div>
    )
  }


export default App;
