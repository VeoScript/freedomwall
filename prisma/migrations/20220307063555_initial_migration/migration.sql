-- CreateTable
CREATE TABLE "Posts" (
    "id" TEXT NOT NULL,
    "counter" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Posts_counter_key" ON "Posts"("counter");
