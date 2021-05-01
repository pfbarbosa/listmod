# listmod - Lista de Módulos

SEGUEM PASSOS PARA O DESAFIO 1

1 - Entrar no diretório listmod do repositório disponibilizado;

2 - Criar a rede:

    docker network create --driver bridge my_network

3 - Criar o BD (Mysql):

    docker run -d -p 3306:3306 --network my_network --name my-mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=listmod mysql:5.7
	
4 - Criar a aplicação back-end (Spring Boot/Tomcat e Flyway):

    EXECUTAR o comando abaixo somente após verificado que o Mysql está Ok.
    
    docker run -d --network my_network -p 8081:8080 --name my-back-end pfbarbosa/back-end

5 - Criar a aplicação front-end (Nginx, Angular e Primeng):
    
    docker run -dit -p 8080:80 --network my_network --name my-front-end pfbarbosa/front-end

6 - Acesar a aplicação (Clicar no botão para listar os módulos):

    localhost:8080

7 - Exibir os dados do back-end:

    localhost:8081/modulos

Observações: 

1 - O código fonte do back-end e front-end estão nas pastas '/listmod/back-end/listmod' e '/listmod/front-end/listmod' respectivamente.

2 - Links para as imagens do Docker Hub:

	https://hub.docker.com/repository/docker/pfbarbosa/back-end
	
	https://hub.docker.com/repository/docker/pfbarbosa/front-end

3 - Comandos para gerar as imagems:

	3.1 - Entrar na pasta '/listmod/back-end' e executar o comando: docker build -t pfbarbosa/back-end .
	
	3.2 - Entrar na pasta '/listmod/front-end' e executar o comando: docker build -t pfbarbosa/front-end .
