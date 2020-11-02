  -- *Create the `burgers_db`;
  -- * Switch to or use the `burgers_db`.
  -- * Create a `burgers` table with these fields:
  --   * **id**: an auto incrementing int that serves as the primary key.
  --   * **burger_name**: a string.
  --   * **devoured**: a boolean.
  --   CREATE burgers
  
  DROP DATABASE IF EXISTS burger_db;
  CREATE DATABASE IF NOT EXISTS burger_db;
  
  USE burger_db;
  
  CREATE TABLE burgers (
  id INT AUTO_INCREMENT
  , burger_name VARCHAR(40) NOT NULL
  , devoured BOOLEAN DEFAULT false
  , PRIMARY KEY (id)
  );