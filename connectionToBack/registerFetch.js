const registerFetch = (username, email, password) => {
  try {
    const body = {
      username: username,
      email: email,
      password: password,
    };

    const datos = {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };

    return fetch('http://192.168.43.138:3000/create', datos)
      .then((response) => response.json())
      .then((json) => {
        return json.status;
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
