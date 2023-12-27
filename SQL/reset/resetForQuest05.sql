-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: wild_db_quest
-- ------------------------------------------------------
-- Server version	8.0.27
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;

/*!50503 SET NAMES utf8mb4 */;

/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;

/*!40103 SET TIME_ZONE='+00:00' */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

DROP DATABASE IF EXISTS `wild_db_quest`;

CREATE DATABASE `wild_db_quest`;

USE `wild_db_quest`;

--
-- Table structure for table `school`
--
DROP TABLE IF EXISTS `school`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
    `school` (
        `id` int NOT NULL AUTO_INCREMENT,
        `name` varchar(100) NOT NULL,
        `capacity` int DEFAULT NULL,
        `country` varchar(255) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 9 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `school`
--
LOCK TABLES `school` WRITE;

/*!40000 ALTER TABLE `school` DISABLE KEYS */;

INSERT INTO
    `school`
VALUES
    (2, 'Castelobruxo', 380, 'Brazil'),
    (3, 'Durmstrang Institute', 570, 'Sweden'),
    (
        4,
        'Hogwarts School of Witchcraft and Wizardry',
        450,
        'United Kingdom'
    ),
    (
        5,
        'Ilvermorny School of Witchcraft and Wizardry',
        300,
        'USA'
    ),
    (6, 'Koldovstoretz', 125, 'Russia');

/*!40000 ALTER TABLE `school` ENABLE KEYS */;

UNLOCK TABLES;

DROP TABLE IF EXISTS `player`;

DROP TABLE IF EXISTS `team`;

DROP TABLE IF EXISTS `wizard`;

CREATE TABLE
    `wizard` (
        `id` int NOT NULL AUTO_INCREMENT,
        `firstname` varchar(100) NOT NULL,
        `lastname` varchar(100) NOT NULL,
        PRIMARY KEY (`id`)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

LOCK TABLES `wizard` WRITE;

UNLOCK TABLES;