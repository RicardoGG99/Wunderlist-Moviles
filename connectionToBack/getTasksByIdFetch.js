import { setRes } from './setGetRes';

const data = {
  method: 'GET',
  mode: 'cors',
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const getTasksByIdFetch = async (item) => {
  const res = await fetch(`http://192.168.0.101:3000/tasks/${item}`, data);
  return await res.json();
};

export default getTasksByIdFetch;
