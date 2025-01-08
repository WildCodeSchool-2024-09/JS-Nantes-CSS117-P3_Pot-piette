-- create table user (
--   id int unsigned primary key auto_increment not null,
--   email varchar(255) not null unique,
--   password varchar(255) not null
-- );

-- create table item (
--   id int unsigned primary key auto_increment not null,
--   title varchar(255) not null,
--   user_id int unsigned not null,
--   foreign key(user_id) references user(id)
-- );

-- insert into user(id, email, password)
-- values
--   (1, "jdoe@mail.com", "123456");

-- insert into item(id, title, user_id)
-- values
--   (1, "Stuff", 1),
--   (2, "Doodads", 1);

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema potpiette
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema potpiette
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `potpiette` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `potpiette` ;

-- -----------------------------------------------------
-- Table `potpiette`.`recipe`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `potpiette`.`recipe` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `picture` VARCHAR(150) NOT NULL,
  `nb_parts` INT NOT NULL,
  `is_published` TINYINT NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `potpiette`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `potpiette`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `age` INT NULL DEFAULT NULL,
  `genre` VARCHAR(20) NULL DEFAULT NULL,
  `picture` VARCHAR(100) NULL DEFAULT NULL,
  `inscription_date` DATE NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `is_admin` TINYINT NOT NULL,
  `is_modo` TINYINT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `potpiette`.`comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `potpiette`.`comment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `content` TINYTEXT NOT NULL,
  `status` TINYINT NOT NULL DEFAULT '0',
  `user_id` INT NOT NULL,
  `recipe_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `recipe_id_idx` (`recipe_id` ASC) VISIBLE,
  CONSTRAINT `fk_com_recipe_id`
    FOREIGN KEY (`recipe_id`)
    REFERENCES `potpiette`.`recipe` (`id`),
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `potpiette`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `potpiette`.`ingredient`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `potpiette`.`ingredient` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name_ingredient` VARCHAR(50) NOT NULL,
  `picture_ingredient` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `potpiette`.`ingredient_recipe`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `potpiette`.`ingredient_recipe` (
  `recipe_id` INT NOT NULL,
  `ingredient_id` INT NOT NULL,
  `quantity` INT NOT NULL,
  `measure` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`recipe_id`, `ingredient_id`),
  INDEX `ingredient_id_idx` (`ingredient_id` ASC) VISIBLE,
  CONSTRAINT `fk_ingredient_id`
    FOREIGN KEY (`ingredient_id`)
    REFERENCES `potpiette`.`ingredient` (`id`),
  CONSTRAINT `fk_recipe_id`
    FOREIGN KEY (`recipe_id`)
    REFERENCES `potpiette`.`recipe` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `potpiette`.`tag`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `potpiette`.`tag` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tag_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `potpiette`.`recipe_tag`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `potpiette`.`recipe_tag` (
  `recipe_id` INT NOT NULL,
  `tag_id` INT NOT NULL,
  PRIMARY KEY (`recipe_id`, `tag_id`),
  INDEX `fk_tag_tag_id_idx` (`tag_id` ASC) VISIBLE,
  CONSTRAINT `fk_tag_recipe_id`
    FOREIGN KEY (`recipe_id`)
    REFERENCES `potpiette`.`recipe` (`id`),
  CONSTRAINT `fk_tag_tag_id`
    FOREIGN KEY (`tag_id`)
    REFERENCES `potpiette`.`tag` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `potpiette`.`step`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `potpiette`.`step` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nb_step` INT NOT NULL,
  `content` TINYTEXT NOT NULL,
  `recipe_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_step_recipe_id_idx` (`recipe_id` ASC) VISIBLE,
  CONSTRAINT `fk_step_recipe_id`
    FOREIGN KEY (`recipe_id`)
    REFERENCES `potpiette`.`recipe` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
