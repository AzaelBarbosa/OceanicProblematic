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

> API para mapeo: [Mapa leaflet](https://leafletjs.com/examples/quick-start/)

### Explicación de la problemática

Dentro del gran número de daños que le hemos causado al océano, la pesca ilegal en áreas marinas protegidas (MPA) representa un impacto muy alto a largo plazo, ya que se ha demostrado que estas áreas ayudan a recuperar la biodiversidad del oceano gracias al libre tránsito de especies. De no proteger la vida marina, los efectos del cambio climático incrementan más rápido.

Del total del océano, cerca del 6.35% está protegido, pero solo el 1.89% rigurosamente. Además, se sabe que si se pesca en el área limítrofe de las reservas, la población se reduce un 60% en una extención de 1km comparado con el área céntrica. A su vez, el 64% de las MPAs tienen un área menor a los 10,000 kilómetros cuadrados. Se estima que cerca del 20% al 30% de la comida marina importada proviene de pesca ilegal en zonas protegidas y se valora en más de $23.5 mil millones de dólares.

Desde hace 20 años se empezó a desarrollar un sistema de monitoreo electrónico (EM) para mejorar el proceso, monitorear el las trayectorias de pesca, evitar la sobre explotación, etc. Sin embargo, el sistema no ha tenido mucho éxito, aunque se tiene esperanza de que la tecnología se incorpore gracias a los avances tecnológicos, la reducción de costos, resurgimiento de la inteligencia artificial y las nuevas políticas. Por lo que por ahora este sistema no representa una solución de apoyo.


[Zonas protegidas de México](https://www.profepa.gob.mx/innovaportal/v/1380/1/mx.wap/areas_naturales_protegidas_marinas_y_litorales.html)

> Fuentes: <br> https://thehumaneleague.org/article/fishing-industry <br> https://www.profepa.gob.mx/innovaportal/v/1380/1/mx.wap/areas_naturales_protegidas_marinas_y_litorales.html

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

