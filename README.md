# OceanicProblematic
Un proyecto para la resolución de una problemática oceánica

| Integrantes | Rol | Link a los Gtihub |
| ------------- |:-------------:| -----:|
|`Alexis Aparicio`|FullStack|[Contacto](https://github.com/Alexis96-2)|
|`Luis Angel Baez`|FullStack|[Contacto](https://github.com/LuisBaezN)|
|`Diego Rafael Moctezuma`|FullStack|[Contacto](https://github.com/DiegoMoctezuma)|
|`Juan Pablo Pech`|FullStack|[Contacto](https://github.com/JPabloPQ)|
|`Azael Barbosa`|FullStack|[Contacto](https://github.com/AzaelBarbosa)|

## Pesca Ilegal en Zonas Protegidas

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
### Tecnologías a usar

- API
- CSS
- JavaScript
- Html

> API usada al final: [Mapa leaflet](https://leafletjs.com/examples/quick-start/)

### Explicación de la problemática

Aquí va una explicación de la situación.

> Fuentes: https://thehumaneleague.org/article/fishing-industry

### Solución planteada

Aquí va una explicación de la solución tomada de acuerdo a la problemática.

> API considerada a usar desde el principio: [Señala con Google Maps](https://www.cursosgis.com/como-crear-geometrias-con-la-api-javascript-de-google-maps/)

### Dudas sobre codigos

```JavaScript
//Aquí codigos clave que requerimos investigar 1
```

```JavaScript
//Aquí codigos clave que requerimos investigar 2
```

