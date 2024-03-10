FROM mysql:8.0
ADD my.cnf /etc/mysql/conf.d/my.cnf

# MySQL 설정
ENV MYSQL_ROOT_PASSWORD=cleanbrain
ENV MYSQL_DATABASE=mydb
ENV MYSQL_USER=cleanbrain
ENV MYSQL_PASSWORD=cleanbrain
# EXPOSE 3306

# RUN apt-get -y update
# RUN apt-get -y install nano && apt-get -y install vim