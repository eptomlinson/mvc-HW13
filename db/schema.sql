CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
    id INT NOT NULL,
    burger_name VARCHAR(40) NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);