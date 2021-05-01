CREATE TABLE modulo (
	id BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO modulo (nome) values ('Docker');
INSERT INTO modulo (nome) values ('Padrões e técnicas avançadas com Git e Github');
INSERT INTO modulo (nome) values ('Integração contínua');
INSERT INTO modulo (nome) values ('Kubernetes');
INSERT INTO modulo (nome) values ('Fundamentos de arquitetura de software');