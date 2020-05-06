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

 Date: 03/05/2020 20:56:22
*/


-- ----------------------------
-- Table structure for animals
-- ----------------------------
DROP TABLE IF EXISTS "public"."animals";
CREATE TABLE "public"."animals" (
  "id" int2 NOT NULL,
  "name" varchar(1024) COLLATE "pg_catalog"."default" NOT NULL,
  "img" varchar(1024) COLLATE "pg_catalog"."default" NOT NULL,
  "img_name" varchar(1024) COLLATE "pg_catalog"."default" NOT NULL
)
;
ALTER TABLE "public"."animals" OWNER TO "wen";

-- ----------------------------
-- Records of animals
-- ----------------------------
BEGIN;
INSERT INTO "public"."animals" VALUES (1, 'Animals', 'https://dictionary.cambridge.org/external/images/quiz/single/elepha_noun_002_12270_600x600a.jpg?version=5.0.81', 'Image credits');
INSERT INTO "public"."animals" VALUES (1, 'Animals', 'https://dictionary.cambridge.org/external/images/quiz/single/hippop_noun_002_17824_600x600a.jpg?version=5.0.81', 'Image credits');
INSERT INTO "public"."animals" VALUES (1, 'Animals', 'https://dictionary.cambridge.org/external/images/quiz/single/beaver_noun_002_02946_600x600a.jpg?version=5.0.81', 'Image credits');
INSERT INTO "public"."animals" VALUES (1, 'Animals', 'https://dictionary.cambridge.org/external/images/quiz/single/echidn_noun_002_12021_600x600.jpg?version=5.0.81', 'Image credits');
INSERT INTO "public"."animals" VALUES (2, 'Arts and crafts', 'https://dictionary.cambridge.org/external/images/quiz/single/elepha_noun_002_12270_600x600a.jpg?version=5.0.81', 'Image credits');
INSERT INTO "public"."animals" VALUES (2, 'Arts and crafts', 'https://dictionary.cambridge.org/external/images/quiz/single/hippop_noun_002_17824_600x600a.jpg?version=5.0.81', 'Image credits');
INSERT INTO "public"."animals" VALUES (2, 'Arts and crafts', 'https://dictionary.cambridge.org/external/images/quiz/single/beaver_noun_002_02946_600x600a.jpg?version=5.0.81', 'Image credits');
INSERT INTO "public"."animals" VALUES (2, 'Arts and crafts', 'https://dictionary.cambridge.org/external/images/quiz/single/echidn_noun_002_12021_600x600.jpg?version=5.0.81', 'Image credits');
COMMIT;
