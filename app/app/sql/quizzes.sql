/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : PostgreSQL
 Source Server Version : 110003
 Source Host           : 127.0.0.1:5432
 Source Catalog        : project4
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 110003
 File Encoding         : 65001

 Date: 03/05/2020 21:37:14
*/


-- ----------------------------
-- Table structure for quizzes
-- ----------------------------
DROP TABLE IF EXISTS "public"."quizzes";
CREATE TABLE "public"."quizzes" (
  "id" int2 NOT NULL,
  "question" varchar(1024) COLLATE "pg_catalog"."default" NOT NULL,
  "answer" varchar(1024) COLLATE "pg_catalog"."default" NOT NULL,
  "current" varchar(1024) COLLATE "pg_catalog"."default" NOT NULL,
  "desc" varchar(1024) COLLATE "pg_catalog"."default" NOT NULL,
  "animals_id" int2 NOT NULL,
  "img" varchar(1024) COLLATE "pg_catalog"."default"
)
;
ALTER TABLE "public"."quizzes" OWNER TO "wen";

-- ----------------------------
-- Records of quizzes
-- ----------------------------
BEGIN;
INSERT INTO "public"."quizzes" VALUES (1, 'Which word matches the image?', 'hippopotamus,kitten,whale', 'hippopotamus', 'rusm/iStock/Getty Images Plus/GettyImages', 1, 'https://dictionary.cambridge.org/images/thumb/hippop_noun_002_17824.jpg?version=5.0.81');
INSERT INTO "public"."quizzes" VALUES (4, 'Which word matches the image?', 'rabbit,rat,cat', 'rabbit', 'rusm/iStock/Getty Images Plus/GettyImages', 1, 'https://dictionary.cambridge.org/images/thumb/rabbit_noun_001_13276.jpg?version=5.0.81');
INSERT INTO "public"."quizzes" VALUES (2, 'Which word matches the image?', 'cat,rabbit,horse', 'cat', 'rusm/iStock/Getty Images Plus/GettyImages', 1, 'https://dictionary.cambridge.org/images/thumb/cat_noun_001_02368.jpg?version=5.0.81');
INSERT INTO "public"."quizzes" VALUES (6, 'Which word matches the image?', 'elephant,lion,mouse', 'lion', 'rusm/iStock/Getty Images Plus/GettyImages', 1, 'https://dictionary.cambridge.org/images/thumb/lion_noun_002_21358.jpg?version=5.0.81');
INSERT INTO "public"."quizzes" VALUES (5, 'Which word matches the image?', 'sheep,cat,horse', 'sheep', 'rusm/iStock/Getty Images Plus/GettyImages', 1, 'https://dictionary.cambridge.org/images/thumb/sheep_noun_002_33294.jpg?version=5.0.81');
INSERT INTO "public"."quizzes" VALUES (3, 'Which word matches the image?', 'mouse,horse,elephant', 'horse', 'rusm/iStock/Getty Images Plus/GettyImages', 1, 'https://dictionary.cambridge.org/images/thumb/horse_noun_002_18169.jpg?version=5.0.81');
COMMIT;

-- ----------------------------
-- Primary Key structure for table quizzes
-- ----------------------------
ALTER TABLE "public"."quizzes" ADD CONSTRAINT "quizzes_pkey" PRIMARY KEY ("id");
