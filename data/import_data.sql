
--
-- Base de données :  "devawan"
--

BEGIN;

--
-- Déchargement des données de la table "app_user"
--

INSERT INTO "app_user" ("id", "firstname", "lastname", "email", "password", "status", "role", "created_at", "updated_at") VALUES

COMMIT;

/* PostGres DOES NOT INCREMENT when inserting with explicit id values ! */
/* So we have to correctly set the value used for autoincrement */
SELECT setval('app_user_id_seq', (SELECT MAX(id) from "app_user"));