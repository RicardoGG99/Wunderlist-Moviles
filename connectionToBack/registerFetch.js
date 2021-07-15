import axios from 'axios';

const registerFetch = (username, email, password) => {
  try {
    const body = {
      username: username,
      email: email,
      password: password,
    };

    const data = {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };

    return fetch('http://localhost:4000/create', data)
      .then(console.log(body))
      .catch((error) => {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        throw error;
      })
      .then((response) => {
        console.log('Success: ', response);
      });
  } catch (error) {
    console.log(error);
  }
};
export default registerFetch;
