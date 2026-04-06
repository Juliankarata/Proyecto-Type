# FinanzaTech - Proyecto Typescript Orientado a Objetos y CI/CD

**Estudiante:** Julian Karata  

Este repositorio contiene la arquitectura inicial del desarrollo de **FinanzaTech**, una aplicación financiera en TypeScript que aplica fuertemente principios de Programación Orientada a Objetos (POO), encapsulamiento y polimorfismo, con pruebas unitarias configuradas bajo Vitest e integración continua activada a través de GitHub Actions (usando pnpm).

> **Nota:** El informe técnico teórico y la investigación de pruebas de integración se han separado en su propio archivo. Puedes consultarlo aquí: [**Ver INFORME.md**](./INFORME.md)

---

## Tecnologías Principales

- **Runtime:** Node.js v20+
- **Lenguaje:** TypeScript
- **Package Manager:** `pnpm`
- **Testing:** Vitest (con reportes de coverage >90%)
- **CI/CD:** GitHub Actions

## Instalación y Uso

1. Clonar el repositorio.
2. Posicionarse en el directorio e instalar dependencias usando pnpm:
   ```bash
   pnpm install
   ```

### Scripts Disponibles

Podrás operar con el proyecto a través de los siguientes comandos:

- **Modo Desarrollo (watch):**
  ```bash
  pnpm run dev
  ```
- **Compilar el proyecto a JavaScript (dist):**
  ```bash
  pnpm run build
  ```
- **Ejecutar Pruebas Unitarias:**
  ```bash
  pnpm run test
  ```
- **Analizar Cobertura de Código (Coverage):**
  Verificará que las métricas lógicas no bajen del 90%.
  ```bash
  pnpm run test:coverage
  ```
