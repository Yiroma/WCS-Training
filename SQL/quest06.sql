-- 1. Retourne le nom des équipes et le nombre de joueurs par équipe, le tout classé par nombre de joueurs par équipe, de la plus nombreuse à la moins nombreuse.
SELECT
    t.name,
    COUNT(*) as nb_player
FROM
    player p
    INNER JOIN team t ON t.id = p.team_id
GROUP BY
    t.name
ORDER BY
    nb_player DESC;

--
-- +------------+-----------+
-- | name       | nb_player |
-- +------------+-----------+
-- | Gryffindor |        36 |
-- | Slytherin  |        21 |
-- | Ravenclaw  |        15 |
-- | Hufflepuff |        12 |
-- +------------+-----------+
--
-- 2. Retourne uniquement les noms des équipes complètes (ayant 14 joueurs ou plus, c’est-à- dire 7 joueurs et 7 remplaçants minimum), classés par ordre alphabétique.
SELECT
    t.name,
    COUNT(*) as nb_player
FROM
    player p
    INNER JOIN team t ON t.id = p.team_id
GROUP BY
    t.name
HAVING
    COUNT(*) >= 14
ORDER BY
    nb_player DESC;

--
-- +------------+-----------+
-- | name       | nb_player |
-- +------------+-----------+
-- | Gryffindor |        36 |
-- | Slytherin  |        21 |
-- | Ravenclaw  |        15 |
-- +------------+-----------+
--
-- 3. L’entraîneur des Gryffindor est superstitieux, son jour préféré est le lundi. Retourne la liste des joueurs de son équipe qui ont été enrôlés un lundi (il souhaite les faire jouer en priorité), et classe les résultats par date d’enrôlement chronologique.
SELECT
    w.firstname,
    w.lastname,
    p.enrollement_date,
    t.name AS team_name
FROM
    player p
    INNER JOIN team t ON t.id = p.team_id
    INNER JOIN wizard w ON w.id = p.wizard_id
WHERE
    DATE_FORMAT (p.enrollement_date, "%W") = "Monday"
HAVING
    team_name = "Gryffindor"
ORDER BY
    p.enrollement_date ASC;

--
-- +-----------+------------+------------------+------------+
-- | firstname | lastname   | enrollement_date | team_name  |
-- +-----------+------------+------------------+------------+
-- | George    | Weasley    | 1991-08-26       | Gryffindor |
-- | Alice     | Longbottom | 1992-02-17       | Gryffindor |
-- | Cadogan   |            | 1993-01-04       | Gryffindor |
-- | Godric    | Gryffindor | 1993-08-30       | Gryffindor |
-- | Sirius    | Black      | 1994-01-10       | Gryffindor |
-- | Aberforth | Dumbledore | 1995-04-24       | Gryffindor |
-- | Augusta   | Longbottom | 1999-10-25       | Gryffindor |
-- +-----------+------------+------------------+------------+
--