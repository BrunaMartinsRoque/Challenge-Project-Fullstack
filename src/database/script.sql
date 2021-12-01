CREATE DATABASE challengeProject;

USE challengeProject;

CREATE TABLE users(
  id INTEGER PRIMARY KEY auto_increment,
  name VARCHAR(200),
  email VARCHAR(200),
  message VARCHAR(800)
);