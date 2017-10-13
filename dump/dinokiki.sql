-- phpMyAdmin SQL Dump
-- version 4.7.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 06-Out-2017 às 21:55
-- Versão do servidor: 5.7.18
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dinokiki`
--
USE `dinokiki`;
-- --------------------------------------------------------

--
-- Estrutura da tabela `dinofriends`
--

CREATE TABLE `dinofriends` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `twitter` varchar(150) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `checked` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `dinofriends`
--

INSERT INTO `dinofriends` (`id`, `name`, `twitter`, `email`, `checked`) VALUES
(1, 'Bruno Oliveira', NULL, NULL, 1),
(2, 'Caio Hideki', NULL, NULL, 1),
(3, 'Caio Mahin', 'caiomahin', NULL, 1),
(4, 'Carlos Braile', 'Braile_Carlos', NULL, 1),
(5, 'Elisa Castro', NULL, NULL, 1),
(6, 'Felipe Meneguetti de Carlos', NULL, NULL, 1),
(7, 'Giulia Cardieri', 'ggiulia', 'giulia.cardieri@gmail.com', 1),
(8, 'Giovana Almeida', NULL, NULL, 1),
(9, 'Giovani Moraes', NULL, NULL, 1),
(10, 'Guilherme Schmitt', 'guischmitt', 'guischmitt@gmail.com', 1),
(11, 'Jéssica Dias and her friends 1', NULL, NULL, 1),
(13, 'Jerome Jarre', 'jeromejarre', NULL, 1),
(14, 'Luiz Felix', 'luizxilef', NULL, 1),
(15, 'Michelangelo Gonzatti', 'mgonzatti', NULL, 1),
(16, 'Nicole Janer', NULL, NULL, 1),
(17, 'Raianne Rodrigues', 'raifaria', NULL, 1),
(18, 'Raquel Leite', 'rmoleite', NULL, 1),
(19, 'Sara Pelaez Moreno', NULL, NULL, 1),
(20, 'Tamires Trindade', NULL, NULL, 1),
(21, 'Vitória Teivelis', NULL, NULL, 1),
(22, 'Alessandra Sasaki (Yumi)', NULL, NULL, 1),
(23, 'Karoline Keiko', NULL, NULL, 1),
(27, 'Ana Carolina Melo', NULL, NULL, 1),
(31, 'Henrique Sumitomo', NULL, NULL, 1),
(33, 'Deivison Santana', NULL, NULL, 1),
(34, 'Karoline Kimiko', NULL, NULL, 1),
(35, 'Marcelo Cordeiro', 'marcscordeiro', NULL, 1),
(36, 'Vinicius Figueiredo', NULL, NULL, 1),
(37, 'Julia Santos', '', 'julia.scabo@outlook.com', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `friends_kiki`
--

CREATE TABLE `friends_kiki` (
  `kiki_id` int(11) NOT NULL,
  `friend_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `friends_kiki`
--

INSERT INTO `friends_kiki` (`kiki_id`, `friend_id`) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 5),
(5, 6),
(6, 7),
(23, 7),
(7, 8),
(8, 9),
(9, 10),
(24, 10),
(10, 11),
(11, 13),
(12, 15),
(13, 16),
(14, 17),
(15, 18),
(8, 18),
(16, 19),
(17, 20),
(18, 21),
(19, 22),
(20, 23),
(21, 23),
(22, 23),
(25, 23),
(21, 27),
(22, 27),
(31, 31),
(26, 23),
(26, 27),
(16, 18),
(32, 4),
(33, 14),
(34, 32),
(35, 33),
(36, 34),
(37, 35),
(38, 36),
(39, 37);

-- --------------------------------------------------------

--
-- Estrutura da tabela `kikis`
--

CREATE TABLE `kikis` (
  `name` varchar(100) NOT NULL,
  `img` varchar(50) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `file_name` varchar(50) DEFAULT NULL,
  `checked` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `kikis`
--

INSERT INTO `kikis` (`name`, `img`, `id`, `file_name`, `checked`) VALUES
('The Engineer Kiki', 'engineer', 1, 'audioKikiB', 1),
('The Classical Music Kiki', 'classical', 2, 'audioKikiCH', 1),
('The Bad B*tch Kiki', 'badbitch', 3, 'audioKikiC', 1),
('The Gaúcha Kiki', 'gaucha', 4, 'audioKikiE', 1),
('The Caveman Kiki', 'caveman', 5, 'audioKikiF', 1),
('The First Kiki', 'first', 6, 'audioKiki', 1),
('The Cute Kiki', 'cute', 7, 'audioKikiGA', 1),
('The Lion King Kiki', 'lionking', 8, 'audioKikiLK', 1),
('The Pebble Kiki', 'pebble', 9, 'audioKikiG', 1),
('The Kids Kiki', 'kids', 10, 'audioKikiJC', 1),
('The Kiki Kiki', 'kikikiki', 11, 'audioKikiJ', 1),
('The Multifaced Kiki', 'multifaced', 12, 'audioKikiM', 1),
('The Broadway Kiki', 'broadway', 13, 'audioKikiN', 1),
('The Fast Forward Kiki', 'fastforward', 14, 'audioKikiR', 1),
('The Singer Kiki', 'singer', 15, 'audioKikiI', 1),
('The Staying Alive Kiki', 'stayingalive', 16, 'audioKikiSA', 1),
('The Psycho Kiki', 'psycho', 17, 'audioKikiT', 1),
('The Warning Kiki', 'warning', 18, 'audioKikiV', 1),
('The Pixel Kiki', 'pixel', 19, 'audioKikiY', 1),
('The Clock Kiki', 'clock', 20, 'audioKikiK', 1),
('The Mission Impokikible', 'missionimpokikible', 21, 'audioKikiMI', 1),
('The Indikiki Jones', 'indikikijones', 22, 'audioKikiAC', 1),
('The British Kiki', 'british', 23, 'audioKiki2', 1),
('The Birthday Kiki', 'birthday', 24, 'audioKikiG2', 1),
('The Monster Kiki', 'monster', 25, 'audioKikiK2', 1),
('The Hakuna Makiki', 'hakunamakiki', 26, 'audioKikiHM', 1),
('The AntiPattern Kiki', 'antipattern', 31, 'audioKikiH', 1),
('The Classical Music Kiki', 'classical', 32, 'audioKikiCB', 1),
('The Classical Music Kiki', 'classical', 33, 'audioKikiL', 1),
('The Reporter Kiki', 'reporter', 35, 'audioKikiD', 1),
('The Game Of Thrones Kiki', 'got', 36, 'audioKikiGOT', 1),
('The Canadian Kiki', 'canadian', 37, 'audioKikiMC', 1),
('The Lost Kiki', 'lost', 38, 'audioKikiVR', 1),
('kiki century opening of olympics 1887', NULL, 39, 'b627e1b0e05ccab88221c19e3c688d1c.mp3', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dinofriends`
--
ALTER TABLE `dinofriends`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `friends_kiki`
--
ALTER TABLE `friends_kiki`
  ADD KEY `fk_friends_id` (`friend_id`),
  ADD KEY `fk_kiki_id` (`kiki_id`);

--
-- Indexes for table `kikis`
--
ALTER TABLE `kikis`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dinofriends`
--
ALTER TABLE `dinofriends`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT for table `kikis`
--
ALTER TABLE `kikis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
