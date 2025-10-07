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
flowchart TD
  %% --- ARQUITECTURA TÉCNICA ---
  subgraph TECH["🏗️ ARQUITECTURA TÉCNICA"]
    subgraph FRONTEND["💻 Frontend"]
      FE["React + MUI"]
      PLANNER["📅 Admin Planner<br/>(Calendarizador DdD)"]
      UI["🎨 UI/UX<br/>(Dashboards, Forms)"]
    end
    
    subgraph BACKEND["⚙️ Backend"]
      BE["Django REST"]
      API["🔌 APIs RESTful"]
      AUTH["🔐 JWT Auth"]
      SERVICES["📋 Services<br/>(KPIs, Meetings, Commitments)"]
    end
    
    subgraph DATABASE["🗄️ Base de Datos"]
      DB["PostgreSQL 15"]
      TABLES["📊 Tablas<br/>(Users, KPIs, Meetings, Commitments)"]
    end
    
    subgraph EXTERNAL["🌐 Servicios Externos"]
      GCAL["📆 Google Calendar"]
      SMTP["📧 SMTP Email"]
    end
    
    %% Conexiones técnicas
    FE --> API
    PLANNER --> API
    UI --> FE
    BE --> DB
    BE --> GCAL
    BE --> SMTP
    API --> BE
    AUTH --> BE
    SERVICES --> BE
    TABLES --> DB
  end

  %% --- FLUJO CONCEPTUAL ---
  subgraph CONCEPTUAL["📊 FLUJO CONCEPTUAL"]
    %% Administrador
    subgraph ADMIN["🔧 ADMINISTRADOR"]
      Admin["🔑 Administrador"]
      Admin --> PLANNER
    end
    
    %% Flujo General
    subgraph FLUJO_GENERAL["📈 FLUJO GENERAL"]
      Informe[/"📄 Informe por Área\n(WR, PHP, Fisherman, Conservas)"/]
      Datos["🗂️ Datos del Informe\n(Producción, Calidad, etc.)"]
      KPIsArea["📋 KPIs por Área\n(Específicos de cada área)"]
      Informe --> Datos --> KPIsArea
    end
    
    %% Dialog Management Hub
    subgraph DIALOG_HUB["🏛️ DIALOG MANAGEMENT HUB"]
      DialogHub["🎯 Dialog Management Hub<br/>(Espacio Central de Reuniones)"]
      Area1["🏭 Área 1"]
      Area2["🏭 Área 2"]  
      AreaN["🏭 Área N"]
      DialogHub --> Area1
      DialogHub --> Area2
      DialogHub --> AreaN
    end
    
    %% Sistema DdD
    subgraph SISTEMA["⚙️ SISTEMA DE DdD"]
      subgraph ESTRAT["🎯 DdD ESTRATÉGICO"]
        Gerencia["👩‍💼 Gerencia General<br/>(Todas las áreas)"]
        KPIsEstrat["📈 KPIs Estratégicos\n(Todas las áreas)"]
        ReuEstrat["🗓️ DdD Estratégico<br/>9:00-9:30 (30 min)"]
        TemasEstrat["📝 Temas Abordados"]
        CompEstrat["✅ Compromisos Generados"]
        Gerencia --> ReuEstrat
        KPIsEstrat --> ReuEstrat
        ReuEstrat --> TemasEstrat
        ReuEstrat --> CompEstrat
      end
      
      subgraph TACTIC["⚡ DdD TÁCTICO"]
        JefesPlanta["🧑‍🏭 Jefes de Planta + Equipo\n(Por área específica)"]
        KPIsTact["📊 KPIs Tácticos\n(Por departamento/área)"]
        ReuTact["🗓️ DdD Táctico<br/>8:45-9:00 (15 min)"]
        TemasTact["📝 Temas Abordados"]
        CompTact["✅ Compromisos Generados"]
        JefesPlanta --> ReuTact
        KPIsTact --> ReuTact
        ReuTact --> TemasTact
        ReuTact --> CompTact
      end
      
      subgraph OPER["🔧 DdD OPERATIVO"]
        Operadores["👷 Operadores + Supervisores<br/>(Por turno y área)"]
        KPIsOper["📉 KPIs Operativos\n(Por turno/línea)"]
        ReuOper["🗓️ DdD Operativo<br/>8:00-8:30 (30 min)"]
        TemasOper["📝 Temas Abordados"]
        CompOper["✅ Compromisos Generados"]
        Operadores --> ReuOper
        KPIsOper --> ReuOper
        ReuOper --> TemasOper
        ReuOper --> CompOper
      end
      
      %% Conexiones internas DdD
      KPIsArea --> KPIsEstrat
      KPIsArea --> KPIsTact
      KPIsArea --> KPIsOper
    end
    
    %% Usuarios y Alertas
    subgraph USERS["👥 USUARIOS Y PERMISOS"]
      JefeArea["🧾 Jefe de Área<br/>(Agrega datos de su área)"]
      Oper["👤 Operador\n(Participa en DdD operativo)"]
    end
    
    subgraph ALERTS["🚨 SISTEMA DE ALERTAS"]
      KPI_Fuera["⚠️ KPI Fuera de Norma\n(Detecta desviaciones)"]
      AlertaDdD["📣 Alerta en DdD\n(Según reunión activa)"]
      KPI_Fuera --> AlertaDdD
    end
    
    %% Gestión de Compromisos
    subgraph GESTION["✅ GESTIÓN DE COMPROMISOS"]
      CrearComp["📝 Crear Compromiso<br/>(Desde alerta)"]
      AsignResp["👤 Asignar Responsable<br/>(Usuario del área)"]
      Seguimiento["🔁 Seguimiento<br/>(Estados y fechas)"]
      CrearComp --> AsignResp --> Seguimiento
    end
    
    %% Conexiones conceptuales
    PLANNER --> DialogHub
    DialogHub --> ReuEstrat
    DialogHub --> ReuTact
    DialogHub --> ReuOper
    
    JefeArea --> KPIsTact
    Oper --> KPIsOper
    
    ReuEstrat --> KPI_Fuera
    ReuTact --> KPI_Fuera
    ReuOper --> KPI_Fuera
    
    AlertaDdD --> CrearComp
    CompEstrat --> CrearComp
    CompTact --> CrearComp
    CompOper --> CrearComp
  end
  
  %% Conexión entre arquitectura y flujo conceptual
  TECH --> CONCEPTUAL
  
  %% Estilos
  style FE fill:#e3f2fd,color:#000
  style PLANNER fill:#fff3e0,color:#000
  style BE fill:#fff3e0,color:#000
  style DB fill:#ffebee,color:#000
  style DialogHub fill:#e1f5fe,color:#000
  style ReuEstrat fill:#ffebee,color:#000
  style ReuTact fill:#e8f5e8,color:#000
  style ReuOper fill:#f3e5f5,color:#000
  style KPI_Fuera fill:#fff9c4,color:#000
  style CrearComp fill:#f1f8e9,color:#000
  style TemasEstrat fill:#e8f5e8,color:#000
  style CompEstrat fill:#c8e6c9,color:#000
  style TemasTact fill:#e8f5e8,color:#000
  style CompTact fill:#c8e6c9,color:#000
  style TemasOper fill:#e8f5e8,color:#000
  style CompOper fill:#c8e6c9,color:#000
  
  %% Estilos para subgraphs
  classDef techBox fill:#f8f9fa,stroke:#333,color:#000,stroke-width:2px
  classDef conceptBox fill:#2f2f2f,stroke:#555,color:#fff
  
  class FRONTEND,BACKEND,DATABASE,EXTERNAL techBox
  class ADMIN,FLUJO_GENERAL,DIALOG_HUB,SISTEMA,USERS,ALERTS,GESTION conceptBox
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
