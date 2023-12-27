-- Récupère tous les champs pour les sorciers nés entre 1975 et 1985
SELECT
    *
FROM
    wizard
WHERE
    birthday BETWEEN '1975-01-01' AND '1985-12-31';

-- Le prénom uniquement des sorciers dont le prénom commence par la lettre ‘H’
SELECT
    firstname
FROM
    wizard
WHERE
    firstname LIKE 'H%';

-- Les prénom et nom de tous les membres de la famille ‘Potter’, classés par ordre de prénom
SELECT
    firstname,
    lastname
FROM
    wizard
WHERE
    lastname LIKE 'potter'
ORDER BY
    firstname ASC;

-- Le prénom, nom et date de naissance du plus vieux sorcier (doit fonctionner quelque soit le contenu de la table)
SELECT
    firstname,
    lastname,
    birthday
FROM
    wizard
ORDER BY
    birthday ASC
LIMIT
    1;