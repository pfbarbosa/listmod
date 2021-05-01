# listmod - Lista de Módulos

SEGUEM PASSOS PARA O DESAFIO 1

1 - Entrar no diretório listmod do repositório disponibilizado;

2 - Criar a rede:
    docker network create --driver bridge my_network

3 - Criar o BD Mysql:
    docker run -d -p 3306:3306 --network my_network --name my-mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=listmod mysql:5.7
	
4 - Criar a aplicação back-end (Projeto construído com Spring Boot/Tomcat e Flyway). Entrar na pasta '/listmod/back-end' para executar os comandos abaixo:
    docker build -t pfbarbosa/back-end .
	docker run -d --network my_network -p 8081:8080 --name my-back-end pfbarbosa/back-end

5 - Criar a aplicação front-end (Nginx, Angular e Primeng). Entrar na pasta '/listmod/back-end' para executar os comandos abaixo:
	docker build -t pfbarbosa/front-end .
	docker run -dit -p 8080:80 --network my_network --name my-front-end pfbarbosa/front-end

6 - Acesar a aplicação (Clicar no botão para listar os módulos)
    localhost:8080

7 - Exibir os dados do back-end 	
	localhost:8081/modulos

Observação: O código fonte do back-end e front-end estão nas pastas '/listmod/back-end/listmod' e '/listmod/front-end/listmod' respectivamente.
