import React from 'react';

const validateEmail = (email, validate) => {
  return email === '' ? (
    ''
  ) : validate(email) ? (
    <div className="ui pointing green basic label">Looks good!</div>
  ) : (
    <div className="ui pointing red basic label">
      You must enter a valid email
    </div>
  );
};

const validatePassword = password => {
  return password.length > 5 ? (
    ''
  ) : (
    <div className="ui pointing red basic label">
      Password must be at least 6 characters
    </div>
  );
};

const validateUsername = username => {
  return username ? (
    ''
  ) : (
    <div className="ui pointing red basic label">Please enter a username</div>
  );
};

export { validateEmail, validatePassword, validateUsername };
