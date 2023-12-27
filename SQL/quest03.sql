-- Effectue les requêtes suivantes et fais une capture d'écran :
-- Insère dans la table `school` les données suivantes :
-- | name | country | capacity |
-- | --- | --- | --- |
-- | Beauxbatons Academy of Magic | France | 550 |
-- | Castelobruxo | Brazil | 380 |
-- | Durmstrang Institute | Norway | 570 |
-- | Hogwarts School of Witchcraft and Wizardry | United Kingdom | 450 |
-- | Ilvermorny School of Witchcraft and Wizardry | USA | 300 |
-- | Koldovstoretz | Russia | 125 |
-- | Mahoutokoro School of Magic | Japan | 800 |
-- | Uagadou School of Magic | Uganda | 350 |
--! your code here:
INSERT INTO
    `school` (`name`, `country`, `capacity`)
VALUES
    ('Beauxbatons Academy of Magic', 'France', 550),
    ('Castelobruxo', 'Brazil', 380),
    ('Durmstrang Institute', 'Norway', 570),
    (
        'Hogwarts School of Witchcraft and Wizardry',
        'United Kingdom',
        450
    ),
    (
        'Ilvermorny School of Witchcraft and Wizardry',
        'USA',
        300
    ),
    ('Koldovstoretz', 'Russia', 125),
    ('Mahoutokoro School of Magic', 'Japan', 800),
    ('Uagadou School of Magic', 'Uganda', 350);

-- - “Durmstrang Institute” est en réalité en Suède (*Sweden*), modifie son pays.
--! your code here:
UPDATE `school`
SET
    `country` = 'Sweden'
WHERE
    `id` = 3;

-- - “Mahoutokoro School of Magic” passe à une capacité de 700
--! your code here:
UPDATE `school`
SET
    `capacity` = 700
WHERE
    `name` = 'Mahoutokoro School of Magic';

-- You can also choose 'ID' = 7;
-- - Supprime en une seule requête toutes les écoles comportant “Magic” dans leur nom (il y en a 3). Tu peux t’aider du mot clé `LIKE`.
--! your code here:
DELETE FROM `school`
WHERE
    `name` LIKE '%Magic%';

-- - Ensuite, affiche via une requête `SELECT` toutes les données de la table `school` et colle également le résultat dans le Gist.
--! your code here:
SELECT
    *
FROM
    `school`
ORDER BY
    `name` ASC;