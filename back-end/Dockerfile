FROM openjdk:8

COPY listmod /usr/src/myapp

WORKDIR /usr/src/myapp/

RUN apt-get update && \
    apt-get -y install maven

RUN mvn -f pom.xml clean package

RUN mkdir /opt/deploy 

RUN cp /usr/src/myapp/target/listmod-1.0.0.jar /opt/deploy/listmod.jar

RUN cd /opt/deploy

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/opt/deploy/listmod.jar"]

