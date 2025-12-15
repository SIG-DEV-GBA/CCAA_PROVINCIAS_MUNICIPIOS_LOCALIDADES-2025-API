# 🇪🇸 API de Ubicaciones de España

API pública con datos de comunidades autónomas, provincias, municipios y localidades de España.

## 📊 Datos incluidos

- **19** Comunidades Autónomas
- **52** Provincias
- **8,660** Municipios
- **48,361** Localidades

## 🚀 Deploy en Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/TU_USUARIO/api-ubicaciones-espana)

O manualmente:

```bash
npm install -g vercel
cd api-ubicaciones-espana
vercel
```

## 🔗 Endpoints

| Endpoint | Descripción |
|----------|-------------|
| `GET /api` | Documentación de la API |
| `GET /api/comunidades` | Lista de comunidades autónomas |
| `GET /api/comunidades/{id}` | Detalle de comunidad con provincias |
| `GET /api/provincias` | Lista de provincias |
| `GET /api/provincias?comunidad_id={id}` | Provincias por comunidad |
| `GET /api/provincias/{id}` | Detalle de provincia con municipios |
| `GET /api/municipios` | Lista de municipios (paginado) |
| `GET /api/municipios?provincia_id={id}` | Municipios por provincia |
| `GET /api/municipios/{id}` | Detalle de municipio con localidades |
| `GET /api/localidades` | Lista de localidades (paginado) |
| `GET /api/localidades?municipio_id={id}` | Localidades por municipio |
| `GET /api/buscar?q={texto}` | Búsqueda en todas las entidades |

## 📖 Ejemplos

```bash
# Todas las comunidades
curl https://tu-api.vercel.app/api/comunidades

# País Vasco con sus provincias
curl https://tu-api.vercel.app/api/comunidades/1

# Provincias de Andalucía
curl https://tu-api.vercel.app/api/provincias?comunidad_id=4

# Municipios de Madrid
curl https://tu-api.vercel.app/api/municipios?provincia_id=28

# Buscar "bilbao"
curl https://tu-api.vercel.app/api/buscar?q=bilbao
```

## 📜 Fuente de datos

INE - Relación de municipios a 1 de enero de 2025

## 📄 Licencia

MIT
