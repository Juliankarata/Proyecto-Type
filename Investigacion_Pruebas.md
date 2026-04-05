# PARTE 2: Investigación - Pruebas de Integración

Asumiendo que con "Iteración/Integración continua" te refieres al famoso modelo de **Pruebas de Integración** (que son el pilar fundamental de los pipelines de *Continuous Integration / CI*), aquí tienes la resolución completa y estructurada de los 14 módulos que pide tu consigna.

---

### 1. Nombre del test
**Pruebas de Integración** (en inglés: *Integration Testing*). 
Nombres alternativos: Pruebas de Ensamblado, Pruebas Arquitectónicas o Pruebas de Interfaces de componentes.

### 2. Objetivo
El objetivo principal es verificar que los diferentes módulos o componentes individuales de una aplicación (que ya pasaron sus pruebas unitarias de forma aislada) **funcionen de forma correcta cuando se combinan e interactúan entre sí**. Se busca validar el flujo de datos exacto y dependencias entre las diferentes piezas del sistema.

### 3. Quién lo realiza
Suele ser ejecutado principalmente por **Desarrolladores/as** (Backend/Frontend), **SDET** (Software Development Engineers in Test), **Arquitectos de Software** y **Testers de QA Técnicos**.

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
