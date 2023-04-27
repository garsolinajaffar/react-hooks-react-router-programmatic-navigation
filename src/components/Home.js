import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const history = useHistory();

  function handleFormSubmit(event) {
    event.preventDefault();
    // Send login request to server and get user data
    const user = { id: 1, name: 'John Doe' };
    // Update global user state or context
    // ...
    // Redirect to home page
    history.push('/');
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
