# OceanicProblematic
Un proyecto para la resolución de una problemática oceánica

| Integrantes | Rol | Link a los Gtihub |
| ------------- |:-------------:| -----:|
|`Alexis Aparicio`|FrontEnd - Backend|[Contacto](https://github.com/Alexis96-2)|
|`Luis Angel Baez`|FrontEnd - Backend|[Contacto](https://github.com/LuisBaezN)|
|`Diego Rafael Moctezuma`|FrontEnd - Backend|[Contacto](https://github.com/DiegoMoctezuma)|
|`Juan Pablo Pech`|FrontEnd - Backend|[Contacto](https://github.com/JPabloPQ)|
|`Azael Barbosa`|FrontEnd - Backend|[Contacto](https://github.com/AzaelBarbosa)|

### Pesca Ilegal en Zonas Protegidas

```mermaid
graph TD;
    ZonaProtegida --> PescaIlegal;
    PescaIlegal --> B{PosiblesSoluciones};
    B --> CamaraSensores;
    B --> SensoresVigilancia;
    B --> SensoresBardas;
    CamaraSensores --> SolucionesController;
    SensoresVigilancia --> SolucionesController;
    SensoresBardas --> SolucionesController;
    SolucionesController -- test --> Server;
    Server --> A{API};
    A --> v1/soluciones/CamaraSensores;
    A --> v1/soluciones/SensoresVigilancia;
    A --> v1/soluciones/SensoresBardas;
```