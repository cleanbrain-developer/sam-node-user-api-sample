create table user(
    name varchar(64) primary key,
    age varchar(64)
);

insert into user(name, age) values('cleanbrain', '32');

--mysql8부터 기본 비밀번호 방식이 해싱값으로 변경되어 보정 설정 적용
alter user 'cleanbrain' identified by with mysql_native_password BY 'cleanbrain'