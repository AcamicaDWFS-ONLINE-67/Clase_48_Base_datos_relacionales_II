# Nation DB
unzip el archivo en un directorio por ejemplo: c:\mariadb\nation.sql

Después, conectarse al servidor MariaDB con una cuenta de root.

```shell
mysql -u root -p
Enter password: ********
```

A continuación cargar la base de datons con el comando:

```shell
mysql>source c:\mariadb\nation.sql
```

Finalmente, seleccionar la base de datos Nation y mostrar las tablas:

```shell
use nation;
show tables;
+-------------------+
| Tables_in_nation  |
+-------------------+
| continents        |
| countries         |
| country_languages |
| country_stats     |
| guests            |
| languages         |
| region_areas      |
| regions           |
| vips              |
+-------------------+
9 rows in set (0.01 sec)
```


# Employees DB
unzip el archivo en un directorio por ejemplo: c:\mariadb\employees.sql

Después, conectarse al servidor MariaDB con una cuenta de root.

```shell
mysql -u root -p
Enter password: ********
```

A continuación cargar la base de datons con el comando:

```shell
mysql>source c:\mariadb\employees.sql
```

Finalmente, seleccionar la base de datos Nation y mostrar las tablas:

```shell
use nation;
show tables;
# Nation DB
unzip el archivo en un directorio por ejemplo: c:\mariadb\nation.sql

Después, conectarse al servidor MariaDB con una cuenta de root.

```shell
mysql -u root -p
Enter password: ********
```

A continuación cargar la base de datons con el comando:

```shell
mysql>source c:\mariadb\nation.sql
```

Finalmente, seleccionar la base de datos Nation y mostrar las tablas:

```shell
use employees;
show tables;
+-------------------+
| Tables_in_nation  |
+-------------------+
| continents        |
| countries         |
| country_languages |
| country_stats     |
| guests            |
| languages         |
| region_areas      |
| regions           |
| vips              |
+-------------------+
9 rows in set (0.01 sec)
```

```

