# TODO

## Autenticación

* Definir estrategia de autenticación:

  * Opción 1: solo autenticación con botón de Google (SSO)
  * Opción 2: autenticación tradicional con inputs (correo / username / DNI / contraseña)
  * Opción 3: soportar ambas opciones en paralelo

* Definir comportamiento del login:

  * Qué datos mínimos necesita el sistema para autenticar
  * Cómo se valida el acceso (Auth.js vs backend propio)

## Registro de usuario (dominio propio)

* Definir estructura del formulario de registro:

  * Datos del dominio (ej: DNI, datos personales, etc.)
  * Qué campos son obligatorios vs opcionales

* Definir flujo de registro:

  * Registro previo al login
  * Registro posterior al login (completar perfil)

## Integración Google SSO + dominio propio

* Definir relación entre cuenta de Google y usuario del sistema:

  * Cómo se identifica al usuario (email como clave única)
  * Qué pasa si el usuario ya existe en el sistema

* Definir estrategia:

  * Auto-registro al loguearse con Google
  * O exigir completar datos adicionales luego del login

* Definir flujo:

  * Usuario hace login con Google
  * El sistema:

    * busca usuario por email
    * si existe → login normal
    * si no existe → redirige a completar registro

## Decisiones pendientes

* ¿Google será obligatorio o opcional?
* ¿Se permite login sin registro previo?
* ¿Qué datos son obligatorios para operar en el sistema?
* ¿Se necesita verificación adicional (email, identidad, etc.)?
