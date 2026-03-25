# Practice QA

Proyecto de pruebas automatizadas para la API de Veterinaria usando Jest + TypeScript.

## Requisitos

- Node.js 18+
- API corriendo en `http://localhost:3000` o si esta en un entorno en la nube mucho mejor

## Instalación

```bash
npm install
```

## Ejecutar pruebas

```bash
npm test
```

Pruebas por módulo:

```bash
npm test -- owner.test.ts
npm test -- pet.test.ts
npm test -- veterinarian.test.ts
```

## Estructura rápida

- `tests/owner/` pruebas de owners
- `tests/pet/` pruebas de pets
- `tests/veterinarian/` pruebas de veterinarians
- `tests/fixtures/` datos de prueba
- `tests/utils/` utilidades compartidas
