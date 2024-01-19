import React from 'react';

interface UserItemProps {
  user: {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
    role: string;
  };
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="card-text">
          <strong>Active:</strong> {user.isActive ? 'Yes' : 'No'}
        </p>
        <p className="card-text">
          <strong>Role:</strong> {user.role}
        </p>
      </div>
    </div>
  );
};

export default UserItem;