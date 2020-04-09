-- -----------------------------------------------------
-- Table "exercice"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "exercice" ;

CREATE TABLE IF NOT EXISTS "exercice" (
  "id" SERIAL NOT NULL,
  "name" VARCHAR(255) NOT NULL,
  "description" TEXT NOT NULL,
  "correction" TEXT NOT NULL,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL,
  PRIMARY KEY ("id"));

  -- -----------------------------------------------------
-- Table "app_user"
-- -----------------------------------------------------
DROP TABLE IF EXISTS "app_user" ;

CREATE TABLE IF NOT EXISTS "app_user" (
  "id" SERIAL NOT NULL,
  "email" VARCHAR(255) NOT NULL,
  "password" VARCHAR(60) NOT NULL,
  "firstname" VARCHAR(64) NULL,
  "lastname" VARCHAR(64) NULL,
  "status" INT NOT NULL DEFAULT 0,
  "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP NULL,
  PRIMARY KEY ("id"));
