-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 10 Mar 2023, 16:02
-- Wersja serwera: 10.4.27-MariaDB
-- Wersja PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `votes`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `glosujacy`
--

CREATE TABLE `glosujacy` (
  `ID` int(11) NOT NULL,
  `pesel` varchar(11) NOT NULL,
  `kandydat` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `glosujacy`
--

INSERT INTO `glosujacy` (`ID`, `pesel`, `kandydat`) VALUES
(2, '9342342', 'Kajetan Komputejras'),
(3, '9342342', 'Ciepły Kublik'),
(4, 'test', 'Kajetan Komputejras'),
(5, '231232131', 'Kajetan Komputejras'),
(6, '432432', 'Ciepły Kublik'),
(7, '432423', 'Ciepły Kublik'),
(8, '5234234', 'Ciepły Kublik'),
(9, '5487', 'Ciepły Kublik');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `kandydaci`
--

CREATE TABLE `kandydaci` (
  `ID` int(11) NOT NULL,
  `imie` text NOT NULL,
  `nazwisko` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

--
-- Zrzut danych tabeli `kandydaci`
--

INSERT INTO `kandydaci` (`ID`, `imie`, `nazwisko`) VALUES
(1, 'Kajetan', 'Komputejras'),
(2, 'Ciepły', 'Kublik'),
(3, 'Zupkowy', 'Potwór');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `glosujacy`
--
ALTER TABLE `glosujacy`
  ADD PRIMARY KEY (`ID`);

--
-- Indeksy dla tabeli `kandydaci`
--
ALTER TABLE `kandydaci`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `glosujacy`
--
ALTER TABLE `glosujacy`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT dla tabeli `kandydaci`
--
ALTER TABLE `kandydaci`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
