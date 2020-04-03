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