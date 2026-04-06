# FinanzaTech - Proyecto Typescript Orientado a Objetos y CI/CD

**Estudiante:** Julian Karata  

Este repositorio contiene la arquitectura y el informe técnico del desarrollo de **FinanzaTech**, una aplicación financiera en TypeScript que aplica principios de Programación Orientada a Objetos (POO), con pruebas unitarias e integración continua a través de GitHub Actions.

---

## Parte 1: Informe Técnico

### 1. Selección del Lenguaje y Justificación

Para el desarrollo de este proyecto se ha seleccionado **TypeScript** como lenguaje de programación moderno. 

**Justificación de la elección:**
La decisión técnica de utilizar TypeScript radica en su capacidad para combinar la inmensa universalidad y adopción comercial de JavaScript, aportando la rigidez y las herramientas del tipado estático avanzado. A nivel académico y arquitectónico, TypeScript es ideal porque integra de forma nativa e impecable el paradigma de la Programación Orientada a Objetos (POO). 

A diferencia de JavaScript tradicional, TypeScript expone herramientas indispensables para la correcta aplicación del diseño de software, tales como el soporte real de **Interfaces**, **Clases Abstractas** y **Modificadores de Acceso** (`private`, `protected`, `public`). Estos elementos nos permitieron modelar el dominio financiero (Cuentas, Transacciones) con un encapsulamiento seguro y una robusta previsión frente a errores. Adicionalmente, TypeScript detecta anomalías lógicas en tiempo de compilación (antes de que el código se ejecute), lo que moderniza y acelera drásticamente el proceso de "Developer Experience" (DX) frente a lenguajes únicamente interpretados.

### 2. Conocimientos Adquiridos durante el Desarrollo

A lo largo de este proyecto, se han integrado y asimilado de forma práctica tres grandes ejes competenciales de la ingeniería de software moderna:

**A. Diseño e Implementación de Arquitectura Orientada a Objetos (POO):**
Se logró traducir un problema del mundo real (un sistema bancario simple) hacia componentes de software fuertemente cohesionados. 
* Se dominó el uso de la **Abstracción** mediando entidades como `CuentaBase`, que define estructuras pero prohíbe instancias superficiales. 
* El **Encapsulamiento** demostró su inmenso valor protegiendo componentes vitales (estado del *saldo* y el *historial*), obligando al sistema a mutar dicho estado única y exclusivamente a través de flujos controlados y validados.
* Finalmente, se implementó impecablemente la **Herencia** en conjunto con el **Polimorfismo**, especializando el comportamiento de métodos compartidos (como la "extracción") bajo reglas completamente dispares según correspondiese a una cuenta corriente o de ahorro, reutilizando paralelamente toda la base común de depósito y registro.

**B. Validación mediante Pruebas Unitarias Consistentes:**
Se rompió la barrera del "testeo manual" adoptando bibliotecas modernas de validación (Vitest). Se adquirió la competencia de diseñar escenarios de prueba atómicos, forzando los límites lógicos de las clases (manejo de excepciones por fondos insuficientes, límites descubiertos excedidos). Esto solidificó el entendimiento de que el código no solo debe "funcionar en el caso feliz", sino someterse a contratos medibles y escalables.

**C. Automatización, Control de Versiones e Integración Continua (CI/CD):**
El proyecto permitió superar la etapa del código local estático. Se aprendió a vincular un repositorio en GitHub configurando un esquema *Pipeline* de GitHub Actions. Se asimiló poderosamente la necesidad de la **Integración Continua**: entender que la nube ahora se encarga de interceptar nuestro código frente a cada actualización o colaboración, preparando un entorno efímero y certificando automáticamente la salud del sistema entero mediante la ejecución desatendida de la suite de pruebas.

---

## Parte 2: Investigación - Pruebas de Integración

Este módulo documenta el modelo de **Pruebas de Integración**, pilar fundamental de los pipelines de *Continuous Integration (CI)*:

### 1. Nombre del test
**Pruebas de Integración** (en inglés: *Integration Testing*). 
Nombres alternativos: Pruebas de Ensamblado, Pruebas Arquitectónicas o Pruebas de Interfaces de componentes.

### 2. Objetivo
El objetivo principal es verificar que los diferentes módulos o componentes individuales de una aplicación (que ya pasaron sus pruebas unitarias de forma aislada) **funcionen de forma correcta cuando se combinan e interactúan entre sí**. Se busca validar el flujo de datos exacto y dependencias entre las diferentes piezas del sistema.

### 3. Quién lo realiza
Suelen ser ejecutadas principalmente por **Desarrolladores/as** (Backend/Frontend), **SDET** (Software Development Engineers in Test), **Arquitectos de Software** y **Testers de QA Técnicos**.

### 4. Cuándo se realiza
Se encuentra en el medio de la pirámide de pruebas. Se lleva a cabo **después de las Pruebas Unitarias** y rigurosamente **antes de las Pruebas de Sistema (System Testing)** o Pruebas End-to-End (E2E). En esquemas ágiles, se automatizan para que se corran constantemente en un flujo de **Integración Continua (CI)** (como GitHub Actions).

### 5. Qué se prueba
Se evalúan las **interfaces de comunicación y conectores** de tu código. Por ejemplo:
* Comunicación entre nuestro programa y una Base de Datos.
* Las respuestas, formatos e interacciones entre Microservicios (APIs REST, GraphQL).
* El flujo de ida y vuelta entre el Frontend y el Backend.

### 6. Qué no se prueba
* **No se prueba la lógica matemática interna aislada** de una sola función (eso corresponde a pruebas unitarias).
* **No se prueba la experiencia visual total del usuario**, haciendo clic en la interfaz paso a paso (eso corresponde a pruebas End-to-End).
* **No se analizan los tiempos de saturación del sistema** bajo millones de usuarios concurrentes (eso es Testing de Carga).

### 7. Entradas necesarias
* Módulos de software y componentes que ya fueron validados individualmente (unitarios).
* Entorno virtual de pruebas levantado (ej. una base de datos local conectada).
* Diagramas de Secuencia y documentación de las APIs involucradas.
* Variables de entorno dedicadas exclusivamente a integración (claves para bases/servicios falsos).

### 8. Entregables o artefactos de entrada
* Documentos de arquitectura técnica y/o contratos de API (Swagger / OpenAPI).
* Código fuente integrado.
* Casos de uso de integración pactados entre el equipo (Integration Test Plan).

### 9. Salidas o entregables resultantes
* Reportes de ejecución automatizados (ej. archivos XML, JSON o Reportes HTML en GitHub Actions).
* Logs de errores de red o incompatibilidad entre módulos detectados.
* Métricas de tiempos de conexión (latencia) entre los componentes.

### 10. Criterios de éxito o finalización
La prueba se da por finalizada y exitosa cuando el 100% de los escenarios críticos de la suite de integración se ejecutan sin caer en errores de estructura, respuesta HTTP, ni conflictos de tipo de datos entre piezas conectadas; y la información viaja y se guarda exitosamente ("*Handshake*" correcto).

### 11. Buenas prácticas
* En lugar de depender de una base de datos grande o ajena, **levantar contenedores efímeros** (Docker / Testcontainers) para la base de datos y destruirla al terminar.
* A diferencia de las unitarias, usar "Mocks" o "Stubs" de manera reducida, únicamente para proveedores externos críticos (como consultar un proveedor de pago real tipo MercadoPago/Stripe).
* Incorporarlas al *Pipeline* (CI/CD) para que se lancen automáticamente frente a cada *Pull Request*.

### 12. Herramientas frecuentes
* **Node.js/TypeScript**: Vitest, Jest, Supertest.
* **Java**: JUnit, TestNG, RestAssured, Testcontainers.
* **Pruebas de APIs Genéricas**: Postman, Newman.
* **Herramientas de Ejecución (CI)**: GitHub Actions, Jenkins, GitLab CI.

### 13. Ejemplo práctico
Un cliente compra algo en tu tienda web. 
Una prueba unitaria validaría si matemáticamente el producto bajó $100 en su modelo interno, pero la **prueba de integración** levantará la conexión y validará: 
1. Que el *Módulo "Carrito"* realmente llame a la *API de Inventario* para descontar el producto.
2. Que la *API de Inventario* envíe y almacene exitosamente un *SQL UPDATE* en la Base de Datos.
3. Y que a su vez se llame al *Servicio de Email* confirmando el pedido. Todo ello agrupado interactuando a la vez.

### 14. Ventajas y limitaciones
* **Ventajas**: Las pruebas de integración encuentran esos duros "bugs" arquitectónicos que sobreviven a los tests unitarios. Aunque 2 piezas individuales funcionen perfecto por su cuenta, podrían romperse al unirse en un solo programa (incompatibilidad y fallos en transferencias de datos); estas pruebas lo previenen por completo en entornos reales.
* **Limitaciones**: Al tener que levantar redes, bases de datos o contenedores para juntar piezas, son **más lentas** de ejecutar y tardan bastante más tiempo. Además, cuando fallan, demandan más tiempo rastrear de qué línea exacta o componente provino el problema, debiendo leer más *logs* que un test unitario simple.
