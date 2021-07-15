const querys = {
  //User Queries
  GET_USERS: `SELECT * FROM Users"`,
  GET_USERBYID: `SELECT * FROM Users WHERE id = $1`,
  CREATE_USER: `INSERT INTO Users (username, email, password) VALUES ($1, $2, $3) RETURNING *`,
  GET_USERBYID: `SELECT * FROM Users WHERE id = $1`,
  GET_USERBYUSERNAME: `SELECT * FROM Users WHERE username = $1`,
  UPDATE_USER: `UPDATE Users SET email = $1 WHERE id= $2 RETURNING *`,
  DELETE_USER: `DELETE FROM Users WHERE id = $1`,

  //LogIn
  LOGIN: `SELECT * FROM Users WHERE username = $1 AND password= $2`,

  //Validation Queries
  CHECKEMAIL: `SELECT * FROM Users WHERE email = $1`,
  CHECKUSER: `SELECT * FROM Users WHERE username = $1`,
  CHECKPASS: `SELECT * FROM Users WHERE password = $1`,
  CHECKID: `SELECT * FROM Users WHERE id = $1`,
  CHECKTASKID: `SELECT * FROM Tasks WHERE id=$1`,

  //Task Queries
  CREATE_TASK: `INSERT INTO Tasks (username, title, dsc, tag, dt) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
  GET_TASKS: `SELECT * FROM Tasks`,
  GET_TASKBYID: `SELECT * FROM Tasks WHERE id =$1`,
  GET_TASKSBYUSERNAME: `SELECT * FROM Tasks WHERE username = $1`,
  UPDATE_TASK: `UPDATE Tasks SET title = $1, dsc = $2, tag = $3, dt = $4 WHERE id = $5 RETURNING *`,
  DELETE_TASK: `DELETE FROM Tasks WHERE id = $1`,
  DELETE_USERTASKS: `DELETE FROM Tasks WHERE username = $1`,
};

module.exports = querys;
