import React, { useState, ChangeEvent, FormEvent } from 'react';

interface UserFormProps {
  onSubmit: (user: User) => void;
}

interface User {
  name: string;
  email: string;
  isActive: boolean;
  role: string;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    isActive: false,
    role: 'user',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: name === 'isActive' ? (e.currentTarget as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit(user);

    setUser({
      name: '',
      email: '',
      isActive: false,
      role: 'user',
    });
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="isActive"
              name="isActive"
              checked={user.isActive}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="isActive">
              Active
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">
            Role
          </label>
          <select
            className="form-select"
            id="role"
            name="role"
            value={user.role}
            onChange={handleChange}
          >
            <option value="user">User</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrator</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
};

export default UserForm;