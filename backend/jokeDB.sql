-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for jokeapp
DROP DATABASE IF EXISTS `jokeapp`;
CREATE DATABASE IF NOT EXISTS `jokeapp` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `jokeapp`;

-- Dumping structure for table jokeapp.joke
DROP TABLE IF EXISTS `joke`;
CREATE TABLE IF NOT EXISTS `joke` (
  `idJoke` int unsigned NOT NULL AUTO_INCREMENT,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `like` int NOT NULL,
  `dislike` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idJoke`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table jokeapp.joke: ~4 rows (approximately)
INSERT INTO `joke` (`idJoke`, `content`, `like`, `dislike`, `created_at`, `updated_at`) VALUES
	(1, 'A child asked his father, "How were people born?"\n                So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on."\n                The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."\n                The child ran back to his father and said, "You lied to me!"\n                His father replied, "No, your mom was talking about her side of the family."', 0, 0, NULL, '2022-12-10 10:00:42'),
	(2, 'Teacher: "Kids,what does the chicken give you?"\n                Student: "Meat!"\n                Teacher: "Very good! Now what does the pig give you?"\n                Student: "Bacon!"\n                Teacher: "Great! And what does the fat cow give you?"\n                Student: "Homework!"', 0, 0, NULL, '2022-12-10 09:50:56'),
	(3, 'The teacher asked Jimmy, "Why is your cat at school today Jimmy?"\n                                Jimmy replied crying, "Because I heard my daddy tell my mommy,\n                                "I am going to eat that pussy once Jimmy leaves for school today!""', 0, 0, NULL, '2022-12-09 23:29:17'),
	(4, 'A housewife, an accountant and a lawyer were asked "How much is 2+2?"\n                The housewife replies: "Four!".\n                The accountant says: "I think it"s either 3 or 4.  Let me run those figures through my spreadsheet one more time."\n                The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"', 0, 0, NULL, '2022-12-09 23:29:18');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
