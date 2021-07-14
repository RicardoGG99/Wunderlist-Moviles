const loginFetch = async (id) => {
  try {
    const data = {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    await fetch(`http://192.168.0.100:3000/user/${id}`, data);
  } catch (error) {
    console.log(error);
  }
};

export default loginFetch;
