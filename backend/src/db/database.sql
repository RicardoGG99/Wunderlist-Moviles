  CREATE DATABASE IF NOT EXISTS d1vbj3tecjalio;

  CREATE TABLE IF NOT EXISTS Users(
      user_id INT NOT NULL AUTO_INCREMENT,
      username VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL,
      pass VARCHAR(100) NOT NULL,
      PRIMARY KEY(user_id)
  );

  CREATE TABLE IF NOT EXISTS Tasks(
      id INT NOT NULL AUTO_INCREMENT,
      username VARCHAR(100) NOT NULL,
      title VARCHAR(100) NOT NULL,
      descrip VARCHAR(100) NOT NULL,
      tag VARCHAR(100) NOT NULL,
      task_date VARCHAR(100) NOT NULL,
      PRIMARY KEY(id    ) 
  );