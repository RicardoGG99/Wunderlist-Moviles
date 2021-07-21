import { setRes } from './setGetRes';

const registerFetch = async (username, email, password) => {
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

    await fetch('https://p2moviles.herokuapp.com/create', data)
      .then((cat) => {
        if (cat.status == 200) {
          setRes('Success');
        } else {
          setRes('Fail');
        }
      })
      .catch((error) => {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        throw error;
      });
  } catch (error) {
    console.log(error);
  }
};

export default registerFetch;
