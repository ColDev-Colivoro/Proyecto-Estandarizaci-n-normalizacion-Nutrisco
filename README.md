# Plataforma de Gestión de Diálogos de Desempeño (DdD) — Nutrisco

La Plataforma de Gestión de Diálogos de Desempeño (DdD) de Nutrisco es una solución digital diseñada para optimizar y agilizar la toma de decisiones en organizaciones mediante la gestión de indicadores clave de desempeño (KPIs) **agrupados por áreas específicas**. Facilita la generación sistemática de compromisos de acción dentro del contexto de **Diálogos de Desempeño (DdD) especializados (Estratégicos, Tácticos y Operativos)**.

## Objetivo

El objetivo principal de la plataforma es facilitar la gestión por excepción, priorizando aquellos KPIs **de un área específica** que se encuentran fuera de rango o requieren atención inmediata. Esto permite una reacción rápida a través de la asignación, seguimiento y cierre de acciones correctivas generadas en los **DdD correspondientes**. La herramienta centraliza la detección, notificación y monitoreo de compromisos, integrando funcionalidades de reporte y alertas automáticas.

## Arquitectura y Tecnologías

La plataforma está construida sobre una arquitectura modular y escalable, compuesta por capas especializadas:

| Capa            | Tecnologías Principales                     | Funcionalidad                                        |
|-----------------|---------------------------------------------|------------------------------------------------------|
| Frontend        | React 18, TypeScript, Vite, MUI             | Interfaz de usuario, visualización de KPIs y gestión de flujos |
| Backend         | Django 5, Python 3.11, Django REST Framework | Lógica de negocio, APIs RESTful, seguridad           |
| Base de Datos   | PostgreSQL 15                               | Persistencia de datos, histórico y auditoría          |
| Servicios       | JWT, Docker, Nginx, Celery                  | Autenticación, contenerización y tareas asíncronas    |

## Diagrama Conceptual

```mermaid
graph TB
    subgraph "📊 FLUJO GENERAL"
        Informe["📋 Informe por Área<br/>(WR, PHP, Fisherman, Conservas)"]
        Datos["📈 Datos del Informe<br/>(Producción, Calidad, etc.)"]
        KPIsArea["📊 KPIs por Área<br/>(Específicos de cada área)"]
    end
    
    subgraph "🤝 SISTEMA DE REUNIONES DdD"
        subgraph "🎯 DdD ESTRATÉGICO"
            DDDEstrategico["🏢 DdD Estratégico<br/>9:00-9:30 (30 min)"]
            Gerencia["👥 Gerencia General<br/>(Todas las áreas)"]
            KPIsEstr["📊 KPIs Estratégicos<br/>(Todas las áreas)"]
        end
        
        subgraph "⚡ DdD TÁCTICO" 
            DDDTactico["🏭 DdD Táctico<br/>8:45-9:00 (15 min)"]
            JefesPlanta["👥 Jefes de Planta + Equipo<br/>(Por área específica)"]
            KPIDept["📊 KPIs Tácticos<br/>(Por departamento/área)"]
        end
        
        subgraph "⚙️ DdD OPERATIVO"
            DDDOperativo["👷 DdD Operativo<br/>8:00-8:30 (30 min)"]
            Operadores["👥 Operadores + Supervisores<br/>(Por turno y área)"]
            KPTurnos["📊 KPIs Operativos<br/>(Por turno/línea)"]
        end
    end
    
    subgraph "🚨 SISTEMA DE ALERTAS"
        FueraNorma["⚠️ KPI Fuera de Norma<br/>(Detecta desviaciones)"]
        AlertaDD["🚨 Alerta en DdD<br/>(Según reunión activa)"]
    end
    
    subgraph "✅ GESTIÓN DE COMPROMISOS"
        Compromiso["📋 Crear Compromiso<br/>(Desde alerta)"]
        Responsable["👤 Asignar Responsable<br/>(Usuario del área)"]
        Seguimiento["📅 Seguimiento<br/>(Estados y fechas)"]
    end
    
    subgraph "👥 USUARIOS Y PERMISOS"
        Admin["🔧 Administrador<br/>(Crea KPIs todas áreas)"]
        JefeArea["👨‍💼 Jefe de Área<br/>(Agrega datos de su área)"]
        Operativo["👷 Operador<br/>(Participa en DdD operativo)"]
    end
    
    %% Flujos de conexión
    Informe --> Datos
    Datos --> KPIsArea
    KPIsArea --> DDDEstrategico
    KPIsArea --> DDDTactico  
    KPIsArea --> DDDOperativo
    
    Gerencia --> DDDEstrategico
    KPIsEstr --> DDDEstrategico
    DDDEstrategico --> FueraNorma
    
    JefesPlanta --> DDDTactico
    KPIDept --> DDDTactico
    DDDTactico --> FueraNorma
    
    Operadores --> DDDOperativo
    KPTurnos --> DDDOperativo
    DDDOperativo --> FueraNorma
    
    FueraNorma --> AlertaDD
    AlertaDD --> Compromiso
    Compromiso --> Responsable
    Responsable --> Seguimiento
    
    Admin --> KPIsArea
    JefeArea --> KPIsArea
    Operativo --> DDDOperativo
    
    %% Estilos
    style Informe fill:#e3f2fd
    style KPIsArea fill:#fff3e0
    style DDDEstrategico fill:#ffebee
    style DDDTactico fill:#e8f5e8
    style DDDOperativo fill:#f3e5f5
    style FueraNorma fill:#fff9c4
    style Compromiso fill:#f1f8e9
```

## Estructura del Repositorio

El proyecto está organizado para asegurar la separación de responsabilidades y facilitar la escalabilidad:

```
nutrisco-ddd/
├── frontend/       # Código fuente del cliente (React)
│   └── src/
├── backend/        # Lógica de negocio (Django)
│   ├── apps/
│   └── ddd/
├── docker/         # Configuración de contenerización
├── docs/           # Documentación técnica y funcional
├── scripts/        # Utilidades y scripts auxiliares
```

## Funcionalidades Principales

- Centralización y visualización de **KPIs específicos por área y usuario**.
- **Detección de desviaciones y notificación automática** de indicadores fuera de norma **en el contexto del DdD correspondiente**.
- **Gestión de Diálogos de Desempeño (DdD) Estratégicos, Tácticos y Operativos**, adaptados a diferentes niveles organizacionales y áreas.
- Generación, asignación y seguimiento de compromisos.
- Herramientas de reporte, auditoría y exportación de datos.
- Integración con servicios de correo y calendarios.
- Seguridad basada en roles y autenticación JWT.

## Contacto

Para consultas, contribuciones o soporte, por favor contactar a los administradores del repositorio o abrir un issue en [GitHub](https://github.com/ColDev-Colivoro/Proyecto-Estandarizaci-n-normalizacion-Nutrisco).

## Licencia

Este proyecto puede estar sujeto a una licencia específica. Consulte el archivo LICENSE Coldev o contacte a los responsables para más información.
