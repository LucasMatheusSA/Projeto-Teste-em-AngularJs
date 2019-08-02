-- phpMyAdmin SQL Dump
-- version 4.2.7
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- 29-04-2015 - 01:27:35
-- Verção do servidor: 5.6.20
-- Verção do PHP: 5.5.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `Pessoas_db`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela 'pessoa'
--

CREATE TABLE IF NOT EXISTS `pessoa` (
`codigo` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `fone` varchar(10) NOT NULL,
  `desc` varchar(100) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=armscii8 AUTO_INCREMENT=7 ;

--
-- Conjunto de dados para a tabela pessoa
--

INSERT INTO `pessoa` (`codigo`, `nome`, `fone`, `desc`) VALUES
(1, 'FERNANDO HERRERA SORIANO', '99498877', 'Estuda na UFPE'),
(2, 'MELISSA HERRERA', '98883322', 'Trabalho no porto digital'),
(3, 'FRANKLIN CAVALCANTI', '33223323', 'Estuda no colegio santo inacio'),
(4, 'MARIA PEREZ SOLANO', '33229988', 'Trabalho na petrobras'),
(5, 'TIAGO DANTAS PEREIRA', '33221243', 'Desempregado'),
(6, 'JUAN CARLOS PINEDA', '77435434', 'Sem descricao');

--
--

--
-- Indices da tabela pessoa
--
ALTER TABLE `pessoa`
 ADD PRIMARY KEY (`codigo`);

--
--

--
-- AUTO_INCREMENT da tabela `pessoa`
--
ALTER TABLE `pessoa`
MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
