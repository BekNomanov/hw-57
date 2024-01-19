import React from 'react';
import UserForm from './components/UserForm';
import Users from './Users/Users';

const App: React.FC = () => {

  return (
    <div className="container">
      <UserForm />
      <Users/>
    </div>
  );
};

export default App;