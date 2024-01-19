import React from 'react';
import UserItem from '../components/UserItem';

const Users: React.FC = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', isActive: true, role: 'user' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', isActive: false, role: 'admin' },
    { id: 3, name: 'Bob Smith', email: 'bob@example.com', isActive: true, role: 'editor' },
  ];

  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
