# frontend-clinicas (Clinipriv UI)

## Proyecto
Este frontend es la interfaz de usuario del sistema Clinipriv. La aplicacion permite a pacientes, medicos, staff y administradores operar sobre turnos, laboratorio e historia clinica, reemplazando el flujo del sistema antiguo.

## Objetivo
Brindar una UI clara y segura para:
- Gestionar turnos (solicitud, reprogramacion y atencion).
- Administrar profesionales, licencias y horarios.
- Crear y consultar pruebas de laboratorio.
- Registrar y revisar historia clinica.

## Funcionalidades (UI)
- Modulo Administrativo: alta y gestion de profesionales, licencias y configuraciones internas.
- Modulo Turnos: carga, modificacion y reasignacion de turnos.
- Modulo Laboratorio: creacion y consulta de pruebas y muestras.
- Modulo Historia Clinica: registro y seguimiento de antecedentes y tratamientos.
- Usuarios y Roles: vistas y permisos segun tipo de usuario.

## Usuarios y Roles
- Administrador: acceso total al sistema y a logs.
- Staff: gestion de turnos, horarios y licencias.
- Medico: atencion de turnos, consulta de pacientes y laboratorio.
- Paciente: solicitud y gestion de turnos, consulta de resultados.

## Stack
- Next.js + React
- TypeScript
- CSS (globals y estilos por feature)

## Scripts
- `npm install`
- `npm run dev`
- `npm run build`
- `npm run start`

## Estructura de carpetas (features)
Esta estructura sirve para separar por dominio funcional y mantener el codigo escalable.

```
frontend-clinicas/
  app/
  features/
    administrativo/
      components/
      pages/
      services/
      hooks/
      types/
    turnos/
      components/
      pages/
      services/
      hooks/
      types/
    laboratorio/
      components/
      pages/
      services/
      hooks/
      types/
    historia-clinica/
      components/
      pages/
      services/
      hooks/
      types/
    usuarios/
      components/
      pages/
      services/
      hooks/
      types/
  shared/
    components/
    hooks/
    services/
    types/
    utils/
  public/
```

## Convenciones de git

### Convenciones de Commits
Los commits siguen la misma convencion del backend:

- ⭐ RELEASE(commit_msg): Version final con integracion de varias funcionalidades
- 🔒 STABLE(commit_msg): Version estable o probada de una funcionalidad o integracion
- ➕ ADD(commit_msg): Anade nuevo desarrollo a una funcionalidad existente
- 🔧 MOD(commit_msg): Modifica codigo de una funcionalidad existente
- ✨ REF(commit_msg): Refactorizaciones para mejorar estructura o rendimiento
- 🐛 FIX(commit_msg): Corrige un error especifico

Ejemplos:
```
    git commit -m "➕ UI de turnos en /turnos"
```
```
    git commit -m "🐛 Fix de validacion en formulario de paciente"
```

### Convenciones de ramas
- `master`: rama principal estable y producible.
- `NOMBRE/Feature`: rama principal de cada desarrollador, por ejemplo `nico/turnos`.

## Boilerplate utilizado

[https://github.com/Damianpiazz/bulletproof-react/tree/master/apps/nextjs-app/src](https://github.com/Damianpiazz/bulletproof-react/tree/master/apps/nextjs-app/src)

## Autenticación con Auth.js (Google SSO)

### Referencias

* Documentación oficial de Auth.js:
  https://authjs.dev/

* Guía de instalación:
  https://authjs.dev/getting-started/installation

* Configuración de Google OAuth:
  https://authjs.dev/getting-started/providers/google