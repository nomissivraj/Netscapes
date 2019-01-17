-- phpMyAdmin SQL Dump
-- version 4.7.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 17, 2019 at 02:39 PM
-- Server version: 5.6.42-84.2
-- PHP Version: 5.6.39

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `netscapes`
--

-- --------------------------------------------------------

--
-- Table structure for table `Questions`
--

CREATE TABLE `Questions` (
  `id` int(11) NOT NULL,
  `Question` varchar(1000) NOT NULL,
  `Type` varchar(50) NOT NULL,
  `Min` int(11) NOT NULL,
  `Max` int(11) NOT NULL,
  `Units` varchar(25) NOT NULL,
  `Option1` varchar(1000) NOT NULL,
  `Option2` varchar(1000) NOT NULL,
  `Option3` varchar(1000) NOT NULL,
  `Option4` varchar(1000) NOT NULL,
  `Category` varchar(1000) NOT NULL,
  `Answer` varchar(1000) NOT NULL,
  `Source` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Questions`
--

INSERT INTO `Questions` (`id`, `Question`, `Type`, `Min`, `Max`, `Units`, `Option1`, `Option2`, `Option3`, `Option4`, `Category`, `Answer`, `Source`) VALUES
(1, 'Roughly what percentage of all US Carbon emissions are caused by trucks and cars?', 'Multiple_Choice', 0, 0, '', 'One third', 'One half', 'One fifth', 'One tenth', 'ground', 'One fifth', 'https://www.ucsusa.org/clean-vehicles/car-emissions-and-global-warming#.W-24uJP7SUk'),
(2, 'What percentage of waste in the UK was recycled in 2016?', 'Range', 0, 100, '%', '', '', '', '', 'ground', '45.20', 'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/746642/UK_Statistics_on_Waste_statistical_notice_October_2018_FINAL.pdf'),
(3, 'What percentage of plastics were recycled in the UK in 2016?', 'Range', 0, 100, '%', '', '', '', '', 'ground', '44.90', 'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/746642/UK_Statistics_on_Waste_statistical_notice_October_2018_FINAL.pdf'),
(4, 'According to the United Nations how many people have been displaced since 2008 by climate change related weather hazards?', 'Range', 10, 100, ' million', '', '', '', '', 'ground', '21.5', 'https://www.standard.co.uk/news/world/climate-change-facts-truth-about-global-warming-a3956546.html'),
(5, 'According to the fracking industry, approximately how many fracking sites will be operational in the UK by 2020', 'Range', 10, 10000, 'sites', '', '', '', '', 'subSurface', '1000', 'https://www.theguardian.com/environment/2013/aug/19/fracks-figures-big-questions-hydraulic-fracturing'),
(6, 'The UK government has voted to ban fracking in which of the following areas', 'Multiple_Choice', 0, 0, '', 'National Parks/Areas of Outstanding Natural Beauty', 'World Heritage sites', 'Norfolk and Suffolk Broads', 'None of the above', 'subSurface', 'None of the above', 'https://www.bbc.co.uk/news/uk-14432401'),
(7, 'Which of these countries produced the highest level of CO2 per Capita in 2015', 'Multiple_Choice', 0, 0, '', 'Australia', 'United Kingdom', 'United States', 'Germany', 'ground', 'Australia', 'http://edgar.jrc.ec.europa.eu/overview.php?v=CO2ts_pc1990-2015'),
(8, 'How much plastic enters the ocean every year? ', 'Range', 1, 100, 'million tonnes', '', '', '', '', 'sea', '9', 'unknown'),
(9, 'How long does a plastic bottle take to degrade in the ocean', 'Range', 1, 500, ' Years', '', '', '', '', 'sea', '450', 'unknown'),
(10, 'What country contributes the most ocean pollution each year', 'Multiple_Choice', 0, 0, '', 'United Kingdom', 'United States', 'China', 'India', 'sea', 'China', 'unknown'),
(11, 'What is the quantity of petroleum spilt into the ocean each year', 'Range', 2, 10, ' million litres', '', '', '', '', 'sea', '4.9', 'unknown'),
(12, 'How many piece of micro plastics is it believed there are in out ocean', 'Range', 10, 100, ' trillion pieces', '', '', '', '', 'sea', '51', 'unknown'),
(13, 'How much carbon dioxide was produced worldwide in 2018 in metric tons', 'Range', 10, 50, ' billion', '', '', '', '', 'highAir', '37.1', 'unknown'),
(14, 'How high was carbon dioxide concentrations in the atmosphere n 2018', 'Range', 50, 1000, ' parts per million', '', '', '', '', 'highAir', '407', 'unknown'),
(15, 'How many deaths per year are linked to air pollution in the UK', 'Range', 0, 50000, ' ', '', '', '', '', 'highAir', '36000', 'unknown'),
(16, 'How much does air pollution cost health services in the UK per year', 'Range', 50, 500, ' million pounds', '', '', '', '', 'highAir', '157', 'https://www.imperial.ac.uk/news/186406/air-pollution-england-could-cost-much/'),
(17, 'What percentage of the global population live in places with unhealthy air quality', 'Range', 0, 100, '%', '', '', '', '', 'highAir', '92', 'unknown'),
(18, 'What air pollutant causes acid rain', 'Multiple_Choice', 0, 0, '', 'Carbon Dioxide', 'Sulphur Dioxide', 'Carbon Monoxide', 'Nitrogen Oxide', 'highAir', 'Sulphur Dioxide', 'unknown'),
(19, 'How many deaths worldwide every year are estimated to be linked to exposure to particulate matter in the air', 'Range', 0, 10, ' million', '', '', '', '', 'highAir', '7', 'unknown'),
(20, 'According to the UK Government in a 2018 survey of public opinion, what percentage of people support fracking', 'Multiple_Choice', 0, 0, '', '15', '30', '45', '60', 'subSurface', '15', 'unknown'),
(21, 'What percentage of the UK land area is open to licensing by fracking companies?', 'Range', 0, 100, '%', '', '', '', '', 'subSurface', '64', 'https://www.theguardian.com/environment/2013/dec/17/fracking-huge-impact-uk-shale-gas-industry-revealed');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `Question` varchar(255) DEFAULT NULL,
  `Type` varchar(255) DEFAULT NULL,
  `Min` int(11) DEFAULT NULL,
  `Max` int(11) DEFAULT NULL,
  `Units` varchar(255) DEFAULT NULL,
  `Option1` varchar(255) DEFAULT NULL,
  `Option2` varchar(255) DEFAULT NULL,
  `Option3` varchar(255) DEFAULT NULL,
  `Option4` varchar(255) DEFAULT NULL,
  `Category` varchar(255) DEFAULT NULL,
  `Answer` varchar(255) DEFAULT NULL,
  `Source` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `responses`
--

CREATE TABLE `responses` (
  `ID` varchar(255) NOT NULL,
  `UserID` int(11) NOT NULL,
  `QuestionID` int(11) NOT NULL,
  `Question` longtext NOT NULL,
  `Response` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `responses`
--

INSERT INTO `responses` (`ID`, `UserID`, `QuestionID`, `Question`, `Response`) VALUES
('14:1', 14, 1, 'Roughly what percentage of all US Carbon emissions are caused by trucks and cars?', 'One tenth'),
('14:2', 14, 2, 'What percentage of waste in the UK was recycled in 2016?', '72'),
('14:3', 14, 3, 'What percentage of plastics were recycled in the UK in 2016?', '71'),
('14:4', 14, 4, 'According to the United Nations how many people have been displaced since 2008 by climate change related weather hazards?', '39'),
('15:1', 15, 1, 'Roughly what percentage of all US Carbon emissions are caused by trucks and cars?', 'One half'),
('15:10', 15, 10, 'What country contributes the most ocean pollution each year', 'China'),
('15:11', 15, 11, 'What is the quantity of petroleum spilt into the ocean each year', '7'),
('15:2', 15, 2, 'What percentage of waste in the UK was recycled in 2016?', '74'),
('15:3', 15, 3, 'What percentage of plastics were recycled in the UK in 2016?', '64'),
('15:4', 15, 4, 'According to the United Nations how many people have been displaced since 2008 by climate change related weather hazards?', '87'),
('15:5', 15, 5, 'According to the fracking industry, approximately how many fracking sites will be operational in the UK by 2020', '2885'),
('15:6', 15, 6, 'The UK government has voted to ban fracking in which of the following areas', 'Norfolk and Suffolk Broads'),
('15:7', 15, 7, 'Which of these countries produced the highest level of CO2 per Capita in 2015', 'United Kingdom'),
('15:8', 15, 8, 'How much plastic enters the ocean every year? ', '11'),
('15:9', 15, 9, 'How long does a plastic bottle take to degrade in the ocean', '337'),
('16:1', 16, 1, 'Roughly what percentage of all US Carbon emissions are caused by trucks and cars?', 'One tenth'),
('16:10', 16, 10, 'What country contributes the most ocean pollution each year', 'United States'),
('16:11', 16, 11, 'What is the quantity of petroleum spilt into the ocean each year', '4'),
('16:12', 16, 12, 'How many piece of micro plastics is it believed there are in out ocean', '89'),
('16:13', 16, 13, 'How much carbon dioxide was produced worldwide in 2018 in metric tons', '40'),
('16:14', 16, 14, 'How high was carbon dioxide concentrations in the atmosphere n 2018', '176'),
('16:15', 16, 15, 'How many deaths per year are linked to air pollution in the UK', '5012'),
('16:16', 16, 16, 'How much does air pollution cost health services in the UK per year', '374'),
('16:17', 16, 17, 'What percentage of the global population live in places with unhealthy air quality', '78'),
('16:18', 16, 18, 'What air pollutant causes acid rain', 'Carbon Dioxide'),
('16:19', 16, 19, 'How many deaths worldwide every year are estimated to be linked to exposure to particulate matter in the air', '0'),
('16:2', 16, 2, 'What percentage of waste in the UK was recycled in 2016?', '25'),
('16:3', 16, 3, 'What percentage of plastics were recycled in the UK in 2016?', '41'),
('16:4', 16, 4, 'According to the United Nations how many people have been displaced since 2008 by climate change related weather hazards?', '10'),
('16:5', 16, 5, 'According to the fracking industry, approximately how many fracking sites will be operational in the UK by 2020', '6203'),
('16:6', 16, 6, 'The UK government has voted to ban fracking in which of the following areas', 'World Heritage sites'),
('16:7', 16, 7, 'Which of these countries produced the highest level of CO2 per Capita in 2015', 'Germany'),
('16:8', 16, 8, 'How much plastic enters the ocean every year? ', '60'),
('16:9', 16, 9, 'How long does a plastic bottle take to degrade in the ocean', '500'),
('17:1', 17, 1, 'Roughly what percentage of all US Carbon emissions are caused by trucks and cars?', 'One fifth'),
('17:10', 17, 10, 'What country contributes the most ocean pollution each year', 'India'),
('17:11', 17, 11, 'What is the quantity of petroleum spilt into the ocean each year', '3'),
('17:12', 17, 12, 'How many piece of micro plastics is it believed there are in out ocean', '70'),
('17:13', 17, 13, 'How much carbon dioxide was produced worldwide in 2018 in metric tons', '49'),
('17:14', 17, 14, 'How high was carbon dioxide concentrations in the atmosphere n 2018', '693'),
('17:15', 17, 15, 'How many deaths per year are linked to air pollution in the UK', '9950'),
('17:16', 17, 16, 'How much does air pollution cost health services in the UK per year', '75'),
('17:17', 17, 17, 'What percentage of the global population live in places with unhealthy air quality', '50'),
('17:18', 17, 18, 'What air pollutant causes acid rain', 'Carbon Monoxide'),
('17:19', 17, 19, 'How many deaths worldwide every year are estimated to be linked to exposure to particulate matter in the air', '2'),
('17:2', 17, 2, 'What percentage of waste in the UK was recycled in 2016?', '57'),
('17:3', 17, 3, 'What percentage of plastics were recycled in the UK in 2016?', '57'),
('17:4', 17, 4, 'According to the United Nations how many people have been displaced since 2008 by climate change related weather hazards?', '32'),
('17:5', 17, 5, 'According to the fracking industry, approximately how many fracking sites will be operational in the UK by 2020', '6720'),
('17:6', 17, 6, 'The UK government has voted to ban fracking in which of the following areas', 'None of the above'),
('17:7', 17, 7, 'Which of these countries produced the highest level of CO2 per Capita in 2015', 'Australia'),
('17:8', 17, 8, 'How much plastic enters the ocean every year? ', '80'),
('17:9', 17, 9, 'How long does a plastic bottle take to degrade in the ocean', '328'),
('18:1', 18, 1, 'Roughly what percentage of all US Carbon emissions are caused by trucks and cars?', 'One tenth'),
('18:10', 18, 10, 'What country contributes the most ocean pollution each year', 'China'),
('18:11', 18, 11, 'What is the quantity of petroleum spilt into the ocean each year', '3'),
('18:12', 18, 12, 'How many piece of micro plastics is it believed there are in out ocean', '85'),
('18:13', 18, 13, 'How much carbon dioxide was produced worldwide in 2018 in metric tons', '44'),
('18:14', 18, 14, 'How high was carbon dioxide concentrations in the atmosphere n 2018', '500'),
('18:15', 18, 15, 'How many deaths per year are linked to air pollution in the UK', '9127'),
('18:16', 18, 16, 'How much does air pollution cost health services in the UK per year', '407'),
('18:17', 18, 17, 'What percentage of the global population live in places with unhealthy air quality', '78'),
('18:18', 18, 18, 'What air pollutant causes acid rain', 'Nitrogen Oxide'),
('18:19', 18, 19, 'How many deaths worldwide every year are estimated to be linked to exposure to particulate matter in the air', '7'),
('18:2', 18, 2, 'What percentage of waste in the UK was recycled in 2016?', '20'),
('18:3', 18, 3, 'What percentage of plastics were recycled in the UK in 2016?', '21'),
('18:4', 18, 4, 'According to the United Nations how many people have been displaced since 2008 by climate change related weather hazards?', '84'),
('18:5', 18, 5, 'According to the fracking industry, approximately how many fracking sites will be operational in the UK by 2020', '3211'),
('18:6', 18, 6, 'The UK government has voted to ban fracking in which of the following areas', 'Norfolk and Suffolk Broads'),
('18:7', 18, 7, 'Which of these countries produced the highest level of CO2 per Capita in 2015', 'United States'),
('18:8', 18, 8, 'How much plastic enters the ocean every year? ', '98'),
('18:9', 18, 9, 'How long does a plastic bottle take to degrade in the ocean', '370'),
('19:1', 19, 1, 'Roughly what percentage of all US Carbon emissions are caused by trucks and cars?', 'One third'),
('19:10', 19, 10, 'What country contributes the most ocean pollution each year', 'China'),
('19:11', 19, 11, 'What is the quantity of petroleum spilt into the ocean each year', '2'),
('19:12', 19, 12, 'How many piece of micro plastics is it believed there are in out ocean', '100'),
('19:13', 19, 13, 'How much carbon dioxide was produced worldwide in 2018 in metric tons', '50'),
('19:14', 19, 14, 'How high was carbon dioxide concentrations in the atmosphere n 2018', '226'),
('19:15', 19, 15, 'How many deaths per year are linked to air pollution in the UK', '9715'),
('19:16', 19, 16, 'How much does air pollution cost health services in the UK per year', '55'),
('19:17', 19, 17, 'What percentage of the global population live in places with unhealthy air quality', '87'),
('19:18', 19, 18, 'What air pollutant causes acid rain', 'Carbon Monoxide'),
('19:19', 19, 19, 'How many deaths worldwide every year are estimated to be linked to exposure to particulate matter in the air', '0'),
('19:2', 19, 2, 'What percentage of waste in the UK was recycled in 2016?', '9'),
('19:3', 19, 3, 'What percentage of plastics were recycled in the UK in 2016?', '74'),
('19:4', 19, 4, 'According to the United Nations how many people have been displaced since 2008 by climate change related weather hazards?', '16'),
('19:5', 19, 5, 'According to the fracking industry, approximately how many fracking sites will be operational in the UK by 2020', '1317'),
('19:6', 19, 6, 'The UK government has voted to ban fracking in which of the following areas', 'None of the above'),
('19:7', 19, 7, 'Which of these countries produced the highest level of CO2 per Capita in 2015', 'Germany'),
('19:8', 19, 8, 'How much plastic enters the ocean every year? ', '6'),
('19:9', 19, 9, 'How long does a plastic bottle take to degrade in the ocean', '370'),
('20:1', 20, 1, 'Roughly what percentage of all US Carbon emissions are caused by trucks and cars?', 'One third'),
('20:10', 20, 10, 'What country contributes the most ocean pollution each year', 'India'),
('20:11', 20, 11, 'What is the quantity of petroleum spilt into the ocean each year', '3'),
('20:12', 20, 12, 'How many piece of micro plastics is it believed there are in out ocean', '85'),
('20:13', 20, 13, 'How much carbon dioxide was produced worldwide in 2018 in metric tons', '16'),
('20:14', 20, 14, 'How high was carbon dioxide concentrations in the atmosphere n 2018', '217'),
('20:15', 20, 15, 'How many deaths per year are linked to air pollution in the UK', '1600'),
('20:16', 20, 16, 'How much does air pollution cost health services in the UK per year', '114'),
('20:17', 20, 17, 'What percentage of the global population live in places with unhealthy air quality', '78'),
('20:18', 20, 18, 'What air pollutant causes acid rain', 'Carbon Monoxide'),
('20:19', 20, 19, 'How many deaths worldwide every year are estimated to be linked to exposure to particulate matter in the air', '8'),
('20:2', 20, 2, 'What percentage of waste in the UK was recycled in 2016?', '7'),
('20:3', 20, 3, 'What percentage of plastics were recycled in the UK in 2016?', '98'),
('20:4', 20, 4, 'According to the United Nations how many people have been displaced since 2008 by climate change related weather hazards?', '10'),
('20:5', 20, 5, 'According to the fracking industry, approximately how many fracking sites will be operational in the UK by 2020', '1575'),
('20:6', 20, 6, 'The UK government has voted to ban fracking in which of the following areas', 'None of the above'),
('20:7', 20, 7, 'Which of these countries produced the highest level of CO2 per Capita in 2015', 'United States'),
('20:8', 20, 8, 'How much plastic enters the ocean every year? ', '1'),
('20:9', 20, 9, 'How long does a plastic bottle take to degrade in the ocean', '348'),
('21:1', 21, 1, 'Roughly what percentage of all US Carbon emissions are caused by trucks and cars?', 'One third'),
('21:10', 21, 10, 'What country contributes the most ocean pollution each year', 'United States'),
('21:11', 21, 11, 'What is the quantity of petroleum spilt into the ocean each year', '7'),
('21:12', 21, 12, 'How many piece of micro plastics is it believed there are in out ocean', '67'),
('21:13', 21, 13, 'How much carbon dioxide was produced worldwide in 2018 in metric tons', '10'),
('21:14', 21, 14, 'How high was carbon dioxide concentrations in the atmosphere n 2018', '735'),
('21:15', 21, 15, 'How many deaths per year are linked to air pollution in the UK', '37934'),
('21:16', 21, 16, 'How much does air pollution cost health services in the UK per year', '389'),
('21:17', 21, 17, 'What percentage of the global population live in places with unhealthy air quality', '74'),
('21:18', 21, 18, 'What air pollutant causes acid rain', 'Sulphur Dioxide'),
('21:19', 21, 19, 'How many deaths worldwide every year are estimated to be linked to exposure to particulate matter in the air', '7'),
('21:2', 21, 2, 'What percentage of waste in the UK was recycled in 2016?', '82'),
('21:3', 21, 3, 'What percentage of plastics were recycled in the UK in 2016?', '20'),
('21:4', 21, 4, 'According to the United Nations how many people have been displaced since 2008 by climate change related weather hazards?', '85'),
('21:5', 21, 5, 'According to the fracking industry, approximately how many fracking sites will be operational in the UK by 2020', '6767'),
('21:6', 21, 6, 'The UK government has voted to ban fracking in which of the following areas', 'Norfolk and Suffolk Broads'),
('21:7', 21, 7, 'Which of these countries produced the highest level of CO2 per Capita in 2015', 'Germany'),
('21:8', 21, 8, 'How much plastic enters the ocean every year? ', '70'),
('21:9', 21, 9, 'How long does a plastic bottle take to degrade in the ocean', '394'),
('22:1', 22, 1, 'Roughly what percentage of all US Carbon emissions are caused by trucks and cars?', 'One third'),
('22:10', 22, 10, 'What country contributes the most ocean pollution each year', 'China'),
('22:11', 22, 11, 'What is the quantity of petroleum spilt into the ocean each year', '2'),
('22:12', 22, 12, 'How many piece of micro plastics is it believed there are in out ocean', '76'),
('22:13', 22, 13, 'How much carbon dioxide was produced worldwide in 2018 in metric tons', '40'),
('22:14', 22, 14, 'How high was carbon dioxide concentrations in the atmosphere n 2018', '722'),
('22:15', 22, 15, 'How many deaths per year are linked to air pollution in the UK', '40285'),
('22:16', 22, 16, 'How much does air pollution cost health services in the UK per year', '250'),
('22:17', 22, 17, 'What percentage of the global population live in places with unhealthy air quality', '67'),
('22:18', 22, 18, 'What air pollutant causes acid rain', 'Carbon Monoxide'),
('22:19', 22, 19, 'How many deaths worldwide every year are estimated to be linked to exposure to particulate matter in the air', '2'),
('22:2', 22, 2, 'What percentage of waste in the UK was recycled in 2016?', '31'),
('22:3', 22, 3, 'What percentage of plastics were recycled in the UK in 2016?', '3'),
('22:4', 22, 4, 'According to the United Nations how many people have been displaced since 2008 by climate change related weather hazards?', '40'),
('22:5', 22, 5, 'According to the fracking industry, approximately how many fracking sites will be operational in the UK by 2020', '2280'),
('22:6', 22, 6, 'The UK government has voted to ban fracking in which of the following areas', 'World Heritage sites'),
('22:7', 22, 7, 'Which of these countries produced the highest level of CO2 per Capita in 2015', 'Germany'),
('22:8', 22, 8, 'How much plastic enters the ocean every year? ', '74'),
('22:9', 22, 9, 'How long does a plastic bottle take to degrade in the ocean', '357'),
('23:1', 23, 1, 'Roughly what percentage of all US Carbon emissions are caused by trucks and cars?', 'One third'),
('23:10', 23, 10, 'What country contributes the most ocean pollution each year', 'China'),
('23:11', 23, 11, 'What is the quantity of petroleum spilt into the ocean each year', '3'),
('23:12', 23, 12, 'How many piece of micro plastics is it believed there are in out ocean', '80'),
('23:13', 23, 13, 'How much carbon dioxide was produced worldwide in 2018 in metric tons', '45'),
('23:14', 23, 14, 'How high was carbon dioxide concentrations in the atmosphere n 2018', '874'),
('23:15', 23, 15, 'How many deaths per year are linked to air pollution in the UK', '8539'),
('23:16', 23, 16, 'How much does air pollution cost health services in the UK per year', '433'),
('23:17', 23, 17, 'What percentage of the global population live in places with unhealthy air quality', '19'),
('23:18', 23, 18, 'What air pollutant causes acid rain', 'Nitrogen Oxide'),
('23:19', 23, 19, 'How many deaths worldwide every year are estimated to be linked to exposure to particulate matter in the air', '7'),
('23:2', 23, 2, 'What percentage of waste in the UK was recycled in 2016?', '72'),
('23:3', 23, 3, 'What percentage of plastics were recycled in the UK in 2016?', '17'),
('23:4', 23, 4, 'According to the United Nations how many people have been displaced since 2008 by climate change related weather hazards?', '85'),
('23:5', 23, 5, 'According to the fracking industry, approximately how many fracking sites will be operational in the UK by 2020', '1411'),
('23:6', 23, 6, 'The UK government has voted to ban fracking in which of the following areas', 'None of the above'),
('23:7', 23, 7, 'Which of these countries produced the highest level of CO2 per Capita in 2015', 'Germany'),
('23:8', 23, 8, 'How much plastic enters the ocean every year? ', '70'),
('23:9', 23, 9, 'How long does a plastic bottle take to degrade in the ocean', '382'),
('24:1', 24, 1, 'Roughly what percentage of all US Carbon emissions are caused by trucks and cars?', 'One tenth'),
('24:10', 24, 10, 'What country contributes the most ocean pollution each year', 'China'),
('24:11', 24, 11, 'What is the quantity of petroleum spilt into the ocean each year', '3'),
('24:12', 24, 12, 'How many piece of micro plastics is it believed there are in out ocean', '98'),
('24:13', 24, 13, 'How much carbon dioxide was produced worldwide in 2018 in metric tons', '15'),
('24:14', 24, 14, 'How high was carbon dioxide concentrations in the atmosphere n 2018', '840'),
('24:15', 24, 15, 'How many deaths per year are linked to air pollution in the UK', '6658'),
('24:16', 24, 16, 'How much does air pollution cost health services in the UK per year', '373'),
('24:17', 24, 17, 'What percentage of the global population live in places with unhealthy air quality', '76'),
('24:18', 24, 18, 'What air pollutant causes acid rain', 'Nitrogen Oxide'),
('24:19', 24, 19, 'How many deaths worldwide every year are estimated to be linked to exposure to particulate matter in the air', '7'),
('24:2', 24, 2, 'What percentage of waste in the UK was recycled in 2016?', '72'),
('24:3', 24, 3, 'What percentage of plastics were recycled in the UK in 2016?', '82'),
('24:4', 24, 4, 'According to the United Nations how many people have been displaced since 2008 by climate change related weather hazards?', '22'),
('24:5', 24, 5, 'According to the fracking industry, approximately how many fracking sites will be operational in the UK by 2020', '8623'),
('24:6', 24, 6, 'The UK government has voted to ban fracking in which of the following areas', 'None of the above'),
('24:7', 24, 7, 'Which of these countries produced the highest level of CO2 per Capita in 2015', 'Germany'),
('24:8', 24, 8, 'How much plastic enters the ocean every year? ', '8'),
('24:9', 24, 9, 'How long does a plastic bottle take to degrade in the ocean', '438'),
('25:1', 25, 1, 'Roughly what percentage of all US Carbon emissions are caused by trucks and cars?', 'One fifth'),
('25:10', 25, 10, 'What country contributes the most ocean pollution each year', 'China'),
('25:11', 25, 11, 'What is the quantity of petroleum spilt into the ocean each year', '5'),
('25:12', 25, 12, 'How many piece of micro plastics is it believed there are in out ocean', '51'),
('25:13', 25, 13, 'How much carbon dioxide was produced worldwide in 2018 in metric tons', '37'),
('25:14', 25, 14, 'How high was carbon dioxide concentrations in the atmosphere n 2018', '407'),
('25:15', 25, 15, 'How many deaths per year are linked to air pollution in the UK', '36052'),
('25:16', 25, 16, 'How much does air pollution cost health services in the UK per year', '156'),
('25:17', 25, 17, 'What percentage of the global population live in places with unhealthy air quality', '92'),
('25:18', 25, 18, 'What air pollutant causes acid rain', 'Sulphur Dioxide'),
('25:19', 25, 19, 'How many deaths worldwide every year are estimated to be linked to exposure to particulate matter in the air', '7'),
('25:2', 25, 2, 'What percentage of waste in the UK was recycled in 2016?', '45'),
('25:3', 25, 3, 'What percentage of plastics were recycled in the UK in 2016?', '44'),
('25:4', 25, 4, 'According to the United Nations how many people have been displaced since 2008 by climate change related weather hazards?', '21'),
('25:5', 25, 5, 'According to the fracking industry, approximately how many fracking sites will be operational in the UK by 2020', '1011'),
('25:6', 25, 6, 'The UK government has voted to ban fracking in which of the following areas', 'None of the above'),
('25:7', 25, 7, 'Which of these countries produced the highest level of CO2 per Capita in 2015', 'Australia'),
('25:8', 25, 8, 'How much plastic enters the ocean every year? ', '9'),
('25:9', 25, 9, 'How long does a plastic bottle take to degrade in the ocean', '450'),
('26:1', 26, 1, 'Roughly what percentage of all US Carbon emissions are caused by trucks and cars?', 'One fifth'),
('26:10', 26, 10, 'What country contributes the most ocean pollution each year', 'China'),
('26:11', 26, 11, 'What is the quantity of petroleum spilt into the ocean each year', '7'),
('26:12', 26, 12, 'How many piece of micro plastics is it believed there are in out ocean', '49'),
('26:13', 26, 13, 'How much carbon dioxide was produced worldwide in 2018 in metric tons', '42'),
('26:14', 26, 14, 'How high was carbon dioxide concentrations in the atmosphere n 2018', '720'),
('26:15', 26, 15, 'How many deaths per year are linked to air pollution in the UK', '20156'),
('26:16', 26, 16, 'How much does air pollution cost health services in the UK per year', '176'),
('26:17', 26, 17, 'What percentage of the global population live in places with unhealthy air quality', '70'),
('26:18', 26, 18, 'What air pollutant causes acid rain', 'Sulphur Dioxide'),
('26:19', 26, 19, 'How many deaths worldwide every year are estimated to be linked to exposure to particulate matter in the air', '7'),
('26:2', 26, 2, 'What percentage of waste in the UK was recycled in 2016?', '16'),
('26:3', 26, 3, 'What percentage of plastics were recycled in the UK in 2016?', '36'),
('26:4', 26, 4, 'According to the United Nations how many people have been displaced since 2008 by climate change related weather hazards?', '46'),
('26:5', 26, 5, 'According to the fracking industry, approximately how many fracking sites will be operational in the UK by 2020', '6006'),
('26:6', 26, 6, 'The UK government has voted to ban fracking in which of the following areas', 'None of the above'),
('26:7', 26, 7, 'Which of these countries produced the highest level of CO2 per Capita in 2015', 'Australia'),
('26:8', 26, 8, 'How much plastic enters the ocean every year? ', '87'),
('26:9', 26, 9, 'How long does a plastic bottle take to degrade in the ocean', '124'),
('27:1', 27, 1, 'Roughly what percentage of all US Carbon emissions are caused by trucks and cars?', 'One fifth'),
('27:10', 27, 10, 'What country contributes the most ocean pollution each year', 'China'),
('27:11', 27, 11, 'What is the quantity of petroleum spilt into the ocean each year', '5'),
('27:12', 27, 12, 'How many piece of micro plastics is it believed there are in out ocean', '51'),
('27:13', 27, 13, 'How much carbon dioxide was produced worldwide in 2018 in metric tons', '37'),
('27:14', 27, 14, 'How high was carbon dioxide concentrations in the atmosphere n 2018', '407'),
('27:15', 27, 15, 'How many deaths per year are linked to air pollution in the UK', '36339'),
('27:16', 27, 16, 'How much does air pollution cost health services in the UK per year', '157'),
('27:17', 27, 17, 'What percentage of the global population live in places with unhealthy air quality', '92'),
('27:18', 27, 18, 'What air pollutant causes acid rain', 'Sulphur Dioxide'),
('27:19', 27, 19, 'How many deaths worldwide every year are estimated to be linked to exposure to particulate matter in the air', '7'),
('27:2', 27, 2, 'What percentage of waste in the UK was recycled in 2016?', '45'),
('27:3', 27, 3, 'What percentage of plastics were recycled in the UK in 2016?', '45'),
('27:4', 27, 4, 'According to the United Nations how many people have been displaced since 2008 by climate change related weather hazards?', '22'),
('27:5', 27, 5, 'According to the fracking industry, approximately how many fracking sites will be operational in the UK by 2020', '1007'),
('27:6', 27, 6, 'The UK government has voted to ban fracking in which of the following areas', 'None of the above'),
('27:7', 27, 7, 'Which of these countries produced the highest level of CO2 per Capita in 2015', 'Australia'),
('27:8', 27, 8, 'How much plastic enters the ocean every year? ', '9'),
('27:9', 27, 9, 'How long does a plastic bottle take to degrade in the ocean', '450'),
('28:10', 28, 10, 'What country contributes the most ocean pollution each year', '250'),
('28:11', 28, 11, 'What is the quantity of petroleum spilt into the ocean each year', '5'),
('28:12', 28, 12, 'How many piece of micro plastics is it believed there are in out ocean', '32'),
('28:13', 28, 13, 'How much carbon dioxide was produced worldwide in 2018 in metric tons', '25'),
('28:14', 28, 14, 'How high was carbon dioxide concentrations in the atmosphere n 2018', '500'),
('28:15', 28, 15, 'How many deaths per year are linked to air pollution in the UK', '25000'),
('28:16', 28, 16, 'How much does air pollution cost health services in the UK per year', '250'),
('28:17', 28, 17, 'What percentage of the global population live in places with unhealthy air quality', '50'),
('28:18', 28, 18, 'What air pollutant causes acid rain', '50'),
('28:19', 28, 19, 'How many deaths worldwide every year are estimated to be linked to exposure to particulate matter in the air', '5'),
('28:20', 28, 20, 'According to the UK Government in a 2018 survey of public opinion, what percentage of people support fracking', '15'),
('28:21', 28, 21, 'What percentage of the UK land area is open to licensing by fracking companies?', '73'),
('28:5', 28, 5, 'According to the fracking industry, approximately how many fracking sites will be operational in the UK by 2020', '1007'),
('28:6', 28, 6, 'The UK government has voted to ban fracking in which of the following areas', 'None of the above'),
('28:8', 28, 8, 'How much plastic enters the ocean every year? ', '50'),
('28:9', 28, 9, 'How long does a plastic bottle take to degrade in the ocean', '250'),
('29:20', 29, 20, 'What is my name', '15'),
('29:21', 29, 21, 'What percentage of the UK land area is open to licensing by fracking companies?', '8'),
('29:5', 29, 5, 'According to the fracking industry, approximately how many fracking sites will be operational in the UK by 2020', '6923'),
('29:6', 29, 6, 'The UK government has voted to ban fracking in which of the following areas', 'None of the above'),
('30:20', 30, 20, 'According to the UK Government in a 2018 survey of public opinion, what percentage of people support fracking', '15'),
('30:21', 30, 21, 'What percentage of the UK land area is open to licensing by fracking companies?', '36'),
('30:5', 30, 5, 'According to the fracking industry, approximately how many fracking sites will be operational in the UK by 2020', '6816'),
('30:6', 30, 6, 'The UK government has voted to ban fracking in which of the following areas', 'None of the above'),
('3:1', 3, 1, 'Roughly what percentage of all US Carbon emissions are caused by trucks and cars?', 'One third'),
('3:10', 3, 10, 'What country contributes the most ocean pollution each year', 'China'),
('3:11', 3, 11, 'What is the quantity of petroleum spilt into the ocean each year', '9'),
('3:12', 3, 12, 'How many piece of micro plastics is it believed there are in out ocean', '84'),
('3:13', 3, 13, 'How much carbon dioxide was produced worldwide in 2018 in metric tons', '19'),
('3:14', 3, 14, 'How high was carbon dioxide concentrations in the atmosphere n 2018', '500'),
('3:15', 3, 15, 'How many deaths per year are linked to air pollution in the UK', '29978'),
('3:16', 3, 16, 'How much does air pollution cost health services in the UK per year', '402'),
('3:17', 3, 17, 'What percentage of the global population live in places with unhealthy air quality', '35'),
('3:18', 3, 18, 'What air pollutant causes acid rain', 'Sulphur Dioxide'),
('3:19', 3, 19, 'How many deaths worldwide every year are estimated to be linked to exposure to particulate matter in the air', '2'),
('3:2', 3, 2, 'What percentage of waste in the UK was recycled in 2016?', '65'),
('3:20', 3, 20, 'What is my name', '15'),
('3:21', 3, 21, 'What percentage of the UK land area is open to licensing by fracking companies?', '23'),
('3:3', 3, 3, 'What percentage of plastics were recycled in the UK in 2016?', '20'),
('3:4', 3, 4, 'According to the United Nations how many people have been displaced since 2008 by climate change related weather hazards?', '35'),
('3:5', 3, 5, 'According to the fracking industry, approximately how many fracking sites will be operational in the UK by 2020', '2556'),
('3:6', 3, 6, 'The UK government has voted to ban fracking in which of the following areas', 'None of the above'),
('3:7', 3, 7, 'Which of these countries produced the highest level of CO2 per Capita in 2015', 'Australia'),
('3:8', 3, 8, 'How much plastic enters the ocean every year? ', '3'),
('3:9', 3, 9, 'How long does a plastic bottle take to degrade in the ocean', '366');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(3, 'chris@testemail.com', '$2a$08$uGuvbEv9zyM0SL/Wbfqob.t1J34AcR0d.G12UYhr4PuMNnf/TLiuy', '2019-01-02 20:29:04', '2019-01-02 20:29:04'),
(4, 'chris@testagain1.com', '$2a$08$RGJkoGsysAUmYILkBAfo8.ENNT5GBLwk15MJB7SC48GRb6cwzHBQC', '2019-01-03 12:44:21', '2019-01-03 12:44:21'),
(5, 'chris@testaga3in1.com', '$2a$08$BrBTq4MbmTsMVX9PZFNLBuW9Prg7ihorb0IU.Q8GaCMcH6iznBwVu', '2019-01-03 12:48:42', '2019-01-03 12:48:42'),
(6, 'chris@anothertestemail.com', '$2a$08$aK5LZRmRgE0FMPLsQyIUjeVKYyHOvp4EpX2NdIxob6EzamIL0dftS', '2019-01-03 21:56:53', '2019-01-03 21:56:53'),
(7, 'chris@testytestyemail.com', '$2a$08$YaJAGkshr/Z2MRLU2h4Nmu.34Hs7g5qd6TXp2w0vO3Shs6BLRg2Z2', '2019-01-03 21:57:38', '2019-01-03 21:57:38'),
(8, 'chris@testytestyemail2.com', '$2a$08$JDdBv/6faGxz.V4XaP23J./lwSZa0Ensh5z46WRG2TKBc6SpBj8Ca', '2019-01-03 22:11:45', '2019-01-03 22:11:45'),
(9, 'chris@testytestyemail23.com', '$2a$08$rNOhhsvgFKcsHLRFg3on0.dpW/LhfHXhQRY15XN819YaEk00NKh5G', '2019-01-03 22:13:11', '2019-01-03 22:13:11'),
(10, 'chris@anothertestyemail.com', '$2a$08$2Fp.xlIAbqaA15ggj2IPAOO6u5utamSCi9.7UCUgAd.cbVImNLvVa', '2019-01-03 22:14:38', '2019-01-03 22:14:38'),
(11, 'chris@anothertesdetyemail.com', '$2a$08$2k4VFPs2cup1O92KBEqetuPe0w5a2OxZz87rS6w8c4BJIt9euiTSW', '2019-01-03 22:16:43', '2019-01-03 22:16:43'),
(12, 'chris@anotheremail.com', '$2a$08$wqRxFUIe.dnyhDvv8CCRJe.Zt31mh6RXDEqm8mgXxR4H4TYpM9u/G', '2019-01-04 23:01:12', '2019-01-04 23:01:12'),
(13, 'chris@testemaile.com', '$2a$08$vXm7mJIHr4J2JeFsI6YxoO8s5er4nPuny8lAI2FQzzsdQNVz2HjQ.', '2019-01-04 23:05:17', '2019-01-04 23:05:17'),
(14, 'mfrench71@googlemail.com', '$2a$08$s7iYkk8FNg73X6Tqh3kU.uEbfudS/X8HXWvJNOfx9wlhGswrfkjzO', '2019-01-14 16:32:52', '2019-01-14 16:32:52'),
(15, 'Simonpeterjarvis@gmail.com', '$2a$08$5tPzfdKdjIMnN/sNE/LYYer2vwgq07l30n8RJ/DpmJITkhISzU3Iu', '2019-01-14 17:07:01', '2019-01-14 17:07:01'),
(16, 'Freddie@number1user.com', '$2a$08$y8PG/.wITn84ZblhZ53g..O/pYS7i5tksQqc/.h6u.Lzwi6ECwF8q', '2019-01-16 13:57:55', '2019-01-16 13:57:55'),
(17, 'Bobby@fakemail.com', '$2a$08$6igZXp/bFwfCWJgrUWybGuczTtGX3JpZa.FHC./Gs4/Gwvs2M8WaG', '2019-01-16 14:09:34', '2019-01-16 14:09:34'),
(18, 'Simon@INeedHelp.com', '$2a$08$1Phpwrc2ry/TWWTHX2SJm.UF4Fzr1DPmvAaWSUYtbc5dLyxmoOZ7a', '2019-01-16 14:11:07', '2019-01-16 14:11:07'),
(19, 'Montgomery@oldname.com', '$2a$08$VA7djs5qbFhjF6iuLogxa.V/QJnZ/D7R2S/SluKIyLR9NnKtdgaeC', '2019-01-16 14:12:39', '2019-01-16 14:12:39'),
(20, 'katie@whyamihere.com', '$2a$08$glbdbSQdhSTmf34pRxnuGup2DmbphCTOxivsGusGnIl9OmmsCJx1e', '2019-01-16 14:14:13', '2019-01-16 14:14:13'),
(21, 'snottyMcgrotty@gmail.com', '$2a$08$7e0f1O9OpemfNBguXmjZnuKiF4UQRNslCE4Cd/Rv34YL7KXQgjI56', '2019-01-16 14:17:01', '2019-01-16 14:17:01'),
(22, 'helen@massivemelon.com', '$2a$08$aFi8LZ75kUmIRzl.545z4O6ck3uKSPXApuygiZ1v5A.upJHGyJNau', '2019-01-16 14:19:18', '2019-01-16 14:19:18'),
(23, 'Nigelandnorman@gmail.com', '$2a$08$Ryadiat3nY.Wn5SE4L3cROeTe0b3.0Yll9H6RgfxkfkZFvQMKJbg2', '2019-01-16 14:27:14', '2019-01-16 14:27:14'),
(24, 'mark.zuckerberg@gmail.com', '$2a$08$Mp88lqid6glWIJl0i.WZyOS0kZ3LR/eAGFLzFoH9kYPZghB20oKt.', '2019-01-16 14:29:04', '2019-01-16 14:29:04'),
(25, 'mr.polar.bear@imdrowningbecausemyiceberghasmelted.com', '$2a$08$Vqs.44KYGofdgtnrWgF5aevx0k2THAsaSJuPQTYm.4Q5KVLQS/CmW', '2019-01-16 14:30:59', '2019-01-16 14:30:59'),
(26, 'dave@alittlestressedoutrightnow.com', '$2a$08$z/7pIJ9ZaNDnwXpJxponV.KPBpcCr8N9o/l4cFm3vooadn6KDiqNO', '2019-01-16 22:19:12', '2019-01-16 22:19:12'),
(27, 'Cookie@monster.com', '$2a$08$Es2cjWBxhDhx7FcLtv4nHOP/NXedu7e3THqQ1Hyn39.vk8OUXBzPe', '2019-01-17 09:30:17', '2019-01-17 09:30:17'),
(28, 'Dave@whynotwork.com', '$2a$08$BFAuy0YwN7VgyURbdZYRneOV5R5qot9af4Gwb5UkgtrThAqi22My6', '2019-01-17 13:47:29', '2019-01-17 13:47:29'),
(29, 'Imscared@30minutesleft.coom', '$2a$08$g/B/AQqpSAOoNe7g66u/juFWJpWHdh.sGVZWlImenvPW.nkz8d/LK', '2019-01-17 14:18:05', '2019-01-17 14:18:05'),
(30, 'Bob@omgThatwasclose.com', '$2a$08$MD4lijalpL/15C3fCqYZbeaDHzmAszg8I8anKRhNlFop7BZ6munR6', '2019-01-17 14:20:15', '2019-01-17 14:20:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Questions`
--
ALTER TABLE `Questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `responses`
--
ALTER TABLE `responses`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Questions`
--
ALTER TABLE `Questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
