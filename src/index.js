import { Redirect } from "react-router-dom";

function MyComponent({ isAuthenticated }) {
  if (!isAuthenticated) {
    // If the user is not authenticated, redirect to the login page
    return <Redirect to="/login" />;
  }

  // If the user is authenticated, render the component as normal
  return (
    <div>
      <h1>Welcome!</h1>
      <p>You are logged in.</p>
    </div>
  );
}


