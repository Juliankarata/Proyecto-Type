# Informe Técnico: Desarrollo Orientado a Objetos y CI/CD (Parte 1)

**Materia / Proyecto:** [Completar con el nombre de tu materia]  
**Estudiante:** Julian Karata  

## 1. Selección del Lenguaje y Justificación

Para el desarrollo de este proyecto se ha seleccionado **TypeScript** como lenguaje de programación moderno. 

**Justificación de la elección:**
La decisión técnica de utilizar TypeScript radica en su capacidad para combinar la inmensa universalidad y adopción comercial de JavaScript, aportando la rigidez y las herramientas del tipado estático avanzado. A nivel académico y arquitectónico, TypeScript es ideal porque integra de forma nativa e impecable el paradigma de la Programación Orientada a Objetos (POO). 

A diferencia de JavaScript tradicional, TypeScript expone herramientas indispensables para la correcta aplicación del diseño de software, tales como el soporte real de **Interfaces**, **Clases Abstractas** y **Modificadores de Acceso** (`private`, `protected`, `public`). Estos elementos nos permitieron modelar el dominio financiero (Cuentas, Transacciones) con un encapsulamiento seguro y una robusta previsión frente a errores. Adicionalmente, TypeScript detecta anomalías lógicas en tiempo de compilación (antes de que el código se ejecute), lo que moderniza y acelera drásticamente el proceso de "Developer Experience" (DX) frente a lenguajes únicamente interpretados.

## 2. Conocimientos Adquiridos durante el Desarrollo

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
