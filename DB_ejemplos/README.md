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
+----------------------+
| Tables_in_employees  |
+----------------------+
| current_dept_emp     |
| departments          |
| dept_emp             |
| dept_emp_latest_date |
| dept_manager         |
| employees            |
| expected_values      |
| found_values         |
| salaries             |
| tchecksum            |
| tipo_contacto        |
| titles               |
+----------------------+
12 rows in set (0.01 sec)
```

En estos links pueden consultar como restaurar una DB:
- https://dev.mysql.com/doc/refman/8.0/en/mysql-batch-commands.html
- https://dev.mysql.com/doc/mysql-backup-excerpt/8.0/en/reloading-sql-format-dumps.html
