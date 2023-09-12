-- CreateTable
CREATE TABLE `Coffee` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `variety` VARCHAR(191) NOT NULL,
    `species` VARCHAR(191) NOT NULL,
    `producer` VARCHAR(191) NOT NULL,
    `region` VARCHAR(191) NOT NULL,
    `altitude` VARCHAR(191) NOT NULL,
    `grade` VARCHAR(191) NOT NULL,
    `roast` VARCHAR(191) NOT NULL,
    `tasteNotes` VARCHAR(191) NOT NULL,
    `acidity` VARCHAR(191) NOT NULL,
    `sweetness` VARCHAR(191) NOT NULL,
    `body` VARCHAR(191) NOT NULL,
    `aftertaste` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CoffeeMenu` (
    `id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
