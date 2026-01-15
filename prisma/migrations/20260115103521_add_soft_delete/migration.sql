-- AlterTable
ALTER TABLE `sharedresource` ADD COLUMN `deletedAt` DATETIME(3) NULL,
    ADD COLUMN `deletionReason` VARCHAR(191) NULL;
