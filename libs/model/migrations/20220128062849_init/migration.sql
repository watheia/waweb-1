-- CreateTable
CREATE TABLE "AuthUser" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "user_name" TEXT,
    "created_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Post" (
    "authorId" INTEGER,
    "content" TEXT,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "title" TEXT NOT NULL,
    "authUserId" INTEGER,
    CONSTRAINT "Post_authUserId_fkey" FOREIGN KEY ("authUserId") REFERENCES "AuthUser" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uri" TEXT NOT NULL,
    "blur_data_url" TEXT
);

-- CreateTable
CREATE TABLE "Link" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uri" TEXT NOT NULL,
    "blur_data_url" TEXT
);

-- CreateTable
CREATE TABLE "Stage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "stream" TEXT,
    "discord" TEXT
);

-- CreateTable
CREATE TABLE "Talk" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "start" TEXT NOT NULL,
    "end" TEXT NOT NULL,
    "stage_id" INTEGER,
    CONSTRAINT "Talk_stage_id_fkey" FOREIGN KEY ("stage_id") REFERENCES "Stage" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Speaker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "bio" TEXT,
    "title" TEXT,
    "slug" TEXT NOT NULL,
    "twitter" TEXT,
    "github" TEXT,
    "company" TEXT,
    "talk_id" INTEGER,
    "image_id" INTEGER NOT NULL,
    CONSTRAINT "Speaker_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "Image" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Speaker_talk_id_fkey" FOREIGN KEY ("talk_id") REFERENCES "Talk" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "AuthUser_email_key" ON "AuthUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Image_uri_key" ON "Image"("uri");

-- CreateIndex
CREATE UNIQUE INDEX "Link_uri_key" ON "Link"("uri");
