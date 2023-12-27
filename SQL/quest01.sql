-- crée la base de données wild_db_quest et place toi dessus
CREATE DATABASES wild_db_quest;

USE wild_db_quest;

-- importe le fichier SQL
CREATE TABLE
  `wild_db_quest`.`wizard` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(100) NOT NULL,
    `lastname` VARCHAR(100) NOT NULL,
    `birthday` DATE NOT NULL,
    `birth_place` VARCHAR(255) NULL,
    `biography` TEXT NULL,
    PRIMARY KEY (`id`)
  );

-- Modifie la table wizard en ajoutant un champ is_muggle de type booléen, obligatoire
ALTER TABLE `wizard` ADD `is_muggle` TINYINT (1) NOT NULL;

-- Crée ensuite la table school, contenant les champs demandés
CREATE TABLE
  `school` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL,
    `capacity` INT NULL,
    `country` VARCHAR(255) NOT NULL
  );

-- Exécute les commandes SHOW TABLES et fais un DESCRIBE sur les tables wizard et school
SHOW TABLES;

DESCRIBE wizard;

DESCRIBE school;