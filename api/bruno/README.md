# Bruno Collection - Fullstack API

Coleccion para probar la API de tutorials del proyecto.

## Incluye

- Health root (`GET /`)
- CRUD completo de tutorials
- Filtro por titulo (`GET /api/tutorials?title=...`)
- Listado de publicados (`GET /api/tutorials/published`)

## Ambientes

- `environments/local.bru`
- `environments/alb.bru`
- `environments/apigw.bru`

Editar `baseUrl` en el ambiente que vayas a usar.

## Orden sugerido de pruebas

1. `01-Health-Root`
2. `02-Create-Tutorial`
3. `03-List-Tutorials`
4. `05-Get-By-Id`
5. `06-Update-By-Id`
6. `04-List-Published`
7. `09-Search-By-Title`
8. `07-Delete-By-Id`
9. `08-Delete-All` (opcional)

## Nota

`tutorialId` y `searchTitle` se parametrizan desde el archivo de ambiente.
