-- Apagar banco de dados
DROP SCHEMA IF EXISTS ortoclinica;

-- Criar banco de dados
CREATE SCHEMA IF NOT EXISTS ortoclinica DEFAULT CHARACTER SET utf8;
USE ortoclinica;

-- Deletar tabela de usuários
DROP TABLE IF EXISTS ortoclinica.usuarios;

-- Criar tabela de usuários
CREATE TABLE IF NOT EXISTS ortoclinica.usuarios (
  id_usuario INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL,
  senha VARCHAR(200) NOT NULL,
  dt_nascimento DATE NULL,
  dt_criacao DATETIME NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (id_usuario))
ENGINE = InnoDB;

-- Deletar tabela de médicos
DROP TABLE IF EXISTS ortoclinica.medicos;

-- Criar tabela de médicos
CREATE TABLE IF NOT EXISTS ortoclinica.medicos (
  id_medico INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nome MEDIUMTEXT NOT NULL,
  estrelas FLOAT NOT NULL,
  img_url VARCHAR(200) NOT NULL,
  preco FLOAT NOT NULL
)      
ENGINE = InnoDB;
