
--
-- Base de données :  "devawan"
--

BEGIN;

--
-- Déchargement des données de la table "app_user"
--

INSERT INTO "app_user" ("id", "firstname", "lastname", "email", "password", "status", "created_at", "updated_at") VALUES
(1, 'Chuck', 'Norris', 'chuck@oclock.io', '$2y$10$7vwYGrz2TGeyG4X8YnD9BOag9I.YKGUTJELs64qGmcK/syHu2BzTG', 1, '2018-09-26 14:29:59', NULL);
-- quizoclock

COMMIT;

/* PostGres DOES NOT INCREMENT when inserting with explicit id values ! */
/* So we have to correctly set the value used for autoincrement */
SELECT setval('app_user_id_seq', (SELECT MAX(id) from "app_user"));