# Full Stack App

Aplicacion educativa CRUD con API Node.js/Express, MySQL 8.4 y frontend servido por Nginx.

## Requisitos

Docker Engine o Docker Desktop con Docker Compose v2. No se necesita instalar Node.js ni MySQL en el host.

## Ejecutar

Desde la raiz del repositorio:

```bash
docker compose up -d --build --wait --wait-timeout 240
docker compose ps
```

Abrir http://localhost:8088. En una EC2, usar su IP publica y permitir TCP 8088 solo desde la IP o rango autorizado. MySQL y la API no publican puertos al host: Nginx reenvia `/api/` al backend.

Compose construye las imagenes, descarga MySQL y crea automaticamente la red y el volumen. Las contrasenas incluidas son ficticias, exclusivas de un laboratorio aislado; no utilizar esta configuracion en produccion ni guardar secretos reales en Git.

## Probar la API

```bash
curl http://localhost:8088/api/tutorials
curl -X POST http://localhost:8088/api/tutorials \
  -H 'Content-Type: application/json' \
  -d '{"title":"Prueba","description":"Desde Compose","published":false}'
```

El frontend permite crear, listar, consultar, actualizar y eliminar registros por ID.

## Logs y limpieza

```bash
docker compose logs --tail 50
docker compose down
```

`down` conserva los datos. Para borrar definitivamente el volumen de esta practica:

```bash
docker compose down -v
```

`init.sql` se ejecuta solo cuando MySQL inicializa un volumen vacio. Editarlo no modifica una base existente.

## Origen

La API se basa en [bezkoder/nodejs-express-mysql](https://github.com/bezkoder/nodejs-express-mysql), cuyo manifiesto declara licencia ISC. Se conserva la autoria en su manifiesto y el README original en `api/README.md`. Se adapto la conexion por variables de entorno y se utiliza `mysql2` con su API de callbacks para admitir MySQL 8.4.