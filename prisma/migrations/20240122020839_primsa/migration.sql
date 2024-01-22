/*
  Warnings:

  - You are about to drop the column `parent_category_id` on the `ProductCategory` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductCategory" DROP CONSTRAINT "ProductCategory_parent_category_id_fkey";

-- AlterTable
ALTER TABLE "ProductCategory" DROP COLUMN "parent_category_id";
