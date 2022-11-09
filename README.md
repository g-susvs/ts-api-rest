# TS-API-REST



Intalar dependencia de desarrollo
```sh
npm i tslint --save-dev
```
instalar ts para utilizar tslint
```sh
npm i typescript --save-dev
```
Crar archivo de configuración tslint
```sh
./node_modules/.bin/tslint --init
```

## Scripts mysql

```sql
-- crear tabla usuarios
create table NOMBRE_TABLA(
	id serial,
    nombre varchar(255) not null,
    email varchar(255) not null,
    estado tinyint not null default(1)
);

alter table NOMBRE_TABLA add column createdAt timestamp;
alter table NOMBRE_TABLA add column updatedAt timestamp;

-- crear indice unico
alter table NOMBRE_TABLA add unique email_unique (email);
```