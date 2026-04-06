# Informe Técnico y de Investigación

**Materia:** Ingeniería en Software II  
**Alumno:** Julian Karatanasopuloz  

---

## Parte 1: Informe Técnico

### 1. Selección del Lenguaje y Justificación

Para el desarrollo de este proyecto se ha seleccionado **TypeScript** como lenguaje de programación moderno. La decisión técnica radica en su capacidad para combinar la universalidad de JavaScript con la rigidez y las herramientas del tipado estático avanzado. A nivel arquitectónico, TypeScript es ideal porque integra de forma nativa el paradigma de la Programación Orientada a Objetos (POO) mediante el soporte de interfaces, clases abstractas y modificadores de acceso.

Estos elementos permitieron modelar el dominio financiero de este trabajo (clases `Banco`, `Cliente` y `Cuentas`) con un encapsulamiento seguro, detectando anomalías lógicas en tiempo de compilación antes de la ejecución.

### 2. Conocimientos Adquiridos y Desafíos del Desarrollo

A lo largo de este proyecto, se han integrado de forma práctica tres ejes fundamentales de la ingeniería de software, superando retos específicos en el camino:

*   **Implementación de Arquitectura POO:** Se logró traducir un sistema bancario a componentes de software cohesionados. Se utilizó la **abstracción** mediante la clase `CuentaBase`, que define la estructura común pero prohíbe instancias superficiales. El **encapsulamiento** se aplicó para proteger el saldo y el historial de transacciones, permitiendo su mutación solo a través de flujos validados. Finalmente, se implementó **herencia** y **polimorfismo** para especializar el método de extracción según se tratara de una `CuentaAhorro` o una `CuentaCorriente`, reutilizando la lógica base de depósitos.
*   **Curva de Aprendizaje y Configuración Técnica:** Uno de los mayores desafíos durante el desarrollo fue la configuración inicial del entorno. El proceso de instalaciones de Node.js, dependencias y las aplicaciones necesarias para ejecutar TypeScript correctamente representó la mayor dificultad técnica del proyecto. Al ser un lenguaje nuevo para mí, el inicio del aprendizaje fue exigente y requirió un esfuerzo considerable para asimilar su sintaxis y reglas.
*   **Apoyo de IA y Aprendizaje Continuo:** En este proceso de aprendizaje diario, conté con una ayuda constante de la Inteligencia Artificial. Su uso fue fundamental para resolver dudas sobre la lógica de los tests y la sintaxis de TypeScript, permitiéndome avanzar mientras aprendo cada día las particularidades de este ecosistema.
*   **Validación y Automatización (CI/CD):** Se adoptó la biblioteca **Vitest** para diseñar pruebas unitarias que verifican desde el cálculo de intereses hasta el manejo de excepciones por fondos insuficientes o límites de descubierto excedidos. El proyecto se vinculó a un repositorio en GitHub configurando un esquema de **GitHub Actions**, lo que permite certificar automáticamente la salud del sistema mediante la ejecución desatendida de los tests en la nube.

---

## Parte 2: Investigación - Pruebas de Integración

Este módulo documenta el modelo de **Pruebas de Integración**, pilar fundamental de los pipelines de *Continuous Integration (CI)*:

### Nombre del test
**Pruebas de Integración** (en inglés: *Integration Testing*).  
Nombres alternativos: Pruebas de Ensamblado, Pruebas Arquitectónicas o Pruebas de Interfaces de componentes.

### Objetivo
El objetivo principal es verificar que los diferentes módulos o componentes individuales de una aplicación (que ya pasaron sus pruebas unitarias de forma aislada) **funcionen de forma correcta cuando se combinan e interactúan entre sí**. Se busca validar el flujo de datos exacto y dependencias entre las diferentes piezas del sistema.

### Quién lo realiza
Suelen ser ejecutadas principalmente por **Desarrolladores/as** (Backend/Frontend), **SDET** (Software Development Engineers in Test), **Arquitectos de Software** y **Testers de QA Técnicos**.

### Cuándo se realiza
Se encuentra en el medio de la pirámide de pruebas. Se lleva a cabo **después de las Pruebas Unitarias** y rigurosamente **antes de las Pruebas de Sistema (System Testing)** o Pruebas End-to-End (E2E). En esquemas ágiles, se automatizan para que se corran constantemente en un flujo de **Integración Continua (CI)** (como GitHub Actions).

### Qué se prueba
Se evalúan las **interfaces de comunicación y conectores** de tu código. Por ejemplo:
* Comunicación entre nuestro programa y una Base de Datos.
* Las respuestas, formatos e interacciones entre Microservicios (APIs REST, GraphQL).
* El flujo de ida y vuelta entre el Frontend y el Backend.

### Qué no se prueba
* **No se prueba la lógica matemática interna aislada** de una sola función (eso corresponde a pruebas unitarias).
* **No se prueba la experiencia visual total del usuario**, haciendo clic en la interfaz paso a paso (eso corresponde a pruebas End-to-End).
* **No se analizan los tiempos de saturación del sistema** bajo millones de usuarios concurrentes (eso es Testing de Carga).

### Entradas necesarias
* Módulos de software y componentes que ya fueron validados individualmente (unitarios).
* Entorno virtual de pruebas levantado (ej. una base de datos local conectada).
* Diagramas de Secuencia y documentación de las APIs involucradas.
* Variables de entorno dedicadas exclusivamente a integración (claves para bases/servicios falsos).

### Entregables o artefactos de entrada
* Documentos de arquitectura técnica y/o contratos de API (Swagger / OpenAPI).
* Código fuente integrado.
* Casos de uso de integración pactados entre el equipo (Integration Test Plan).

### Salidas o entregables resultantes
* Reportes de ejecución automatizados (ej. archivos XML, JSON o Reportes HTML en GitHub Actions).
* Logs de errores de red o incompatibilidad entre módulos detectados.
* Métricas de tiempos de conexión (latencia) entre los componentes.

### Criterios de éxito o finalización
La prueba se da por finalizada y exitosa cuando el 100% de los escenarios críticos de la suite de integración se ejecutan sin caer en errores de estructura, respuesta HTTP, ni conflictos de tipo de datos entre piezas conectadas; y la información viaja y se guarda exitosamente (“Handshake” correcto).

### Buenas prácticas
* En lugar de depender de una base de datos grande o ajena, **levantar contenedores efímeros** (Docker / Testcontainers) para la base de datos y destruirla al terminar.
* A diferencia de las unitarias, usar “Mocks” o “Stubs” de manera reducida, únicamente para proveedores externos críticos (como consultar un proveedor de pago real tipo MercadoPago/Stripe).
* Incorporarlas al *Pipeline* (CI/CD) para que se lancen automáticamente frente a cada *Pull Request*.

### Herramientas frecuentes
* **Node.js/TypeScript**: Vitest, Jest, Supertest.
* **Java**: JUnit, TestNG, RestAssured, Testcontainers.
* **Pruebas de APIs Genéricas**: Postman, Newman.
* **Herramientas de Ejecución (CI)**: GitHub Actions, Jenkins, GitLab CI.

### Ejemplo práctico
Un cliente compra algo en tu tienda web.  
Una prueba unitaria validará si matemáticamente el producto bajó $100 en su modelo interno, pero la **prueba de integración** levantará la conexión y validará:
1. Que el Módulo “Carrito” realmente llame a la API de Inventario para descontar el producto.
2. Que la API de Inventario envíe y almacene exitosamente un SQL UPDATE en la Base de Datos.
3. Y que a su vez se llame al Servicio de Email confirmando el pedido. Todo ello agrupado interactuando a la vez.

### Ventajas y limitaciones
* **Ventajas:** Las pruebas de integración encuentran esos duros “bugs” arquitectónicos que sobreviven a los tests unitarios. Aunque 2 piezas individuales funcionan perfecto por su cuenta, podrían romperse al unirse en un solo programa (incompatibilidad y fallos en transferencias de datos); estas pruebas lo previenen por completo en entornos reales.
* **Limitaciones:** Al tener que levantar redes, bases de datos o contenedores para juntar piezas, son más lentas de ejecutar y tardan bastante más tiempo. Además, cuando fallan, demandan más tiempo rastrear de qué línea exacta o componente provino el problema, debiendo leer más logs que un test unitario simple.
