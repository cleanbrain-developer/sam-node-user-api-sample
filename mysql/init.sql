create table user(
    name varchar(64) primary key,
    age varchar(64)
);

insert into user(name, age) values('cleanbrain', '32');

alter user 'cleanbrain' identified by with mysql_native_password BY 'cleanbrain'