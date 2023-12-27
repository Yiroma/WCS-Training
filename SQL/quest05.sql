-- Crée les tables player et team comme indiquées sur la modélisation ci-dessous (noms et types des champs), en prenant soin de déclarer correctement les clés étrangères.
CREATE TABLE
    `team` (
        `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `name` VARCHAR(80) NOT NULL
    );

CREATE TABLE
    `player` (
        `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `wizard_id` INT NOT NULL,
        `team_id` INT NOT NULL,
        `role` VARCHAR(50),
        `enrollement_date` DATE NOT NULL,
        CONSTRAINT fk_player_wizard FOREIGN KEY (`wizard_id`) REFERENCES `wizard` (`id`),
        CONSTRAINT fk_player_team FOREIGN KEY (`team_id`) REFERENCES `team` (`id`)
    );

-- Charge ensuite dans ta BDD ce fichier SQL ./data/dataQuest05.sql et vérifie que tout s’est bien passé. Nous n'avons pas forcément respecté les vrais rôles des joueurs dans les livres, vérifie juste que tes requêtes renvoient bien les informations stockées en base de données.
SELECT
    *
FROM
    `wizard`;

SELECT
    *
FROM
    `player`;

SELECT
    *
FROM
    `team`;

-- Retourne les noms, prénoms, rôle et équipe de tous les joueurs, classés dans l’ordre alphabétique par équipe, puis par rôle dans l’équipe, puis par nom de famille, puis par prénom.
SELECT
    w.firstname,
    w.lastname,
    p.role,
    t.name
FROM
    `wizard` AS w
    JOIN `player` AS p ON p.wizard_id = w.id
    JOIN `team` AS t ON p.team_id = t.id
ORDER BY
    t.name ASC,
    p.role ASC,
    w.lastname ASC,
    w.firstname ASC;

-- Retourne uniquement les prénoms et noms des joueurs ayant le rôle de seeker (attrapeur), classés par ordre alphabétique de nom puis prénom
SELECT
    w.firstname,
    w.lastname,
    p.role
FROM
    `wizard` AS w
    JOIN `player` AS p ON w.id = p.wizard_id
WHERE
    p.role = 'seeker'
ORDER BY
    w.lastname ASC,
    w.firstname ASC;

-- Retourne la liste de tous les sorciers qui ne pratiquent pas le quidditch.
SELECT
    w.firstname,
    w.lastname,
    p.role AS play_of_quiddich
FROM
    `wizard` AS w
    LEFT JOIN `player` AS p ON w.id = p.wizard_id
WHERE
    p.role IS NULL
ORDER BY
    w.lastname ASC,
    w.firstname ASC;