FROM mysql:8.0
ADD my.cnf /etc/mysql/conf.d/my.cnf
# mysql 비밀번호 만료 기능 비활성화
ADD init.sql /docker-entrypoint-initdb.d

ENV MYSQL_ROOT_PASSWORD=cleanbrain
ENV MYSQL_DATABASE=mydb
ENV MYSQL_USER=cleanbrain
ENV MYSQL_PASSWORD=cleanbrain