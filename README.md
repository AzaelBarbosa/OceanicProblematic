# OceanicProblematic
Un proyecto para la resolución de una problemática oceánica

| Integrantes | Rol | Link a los Gtihub |
| ------------- |:-------------:| -----:|
|`Alexis Aparicio`|FullStack - Lider|[Contacto](https://github.com/Alexis96-2)|
|`Luis Angel Baez`|Frontend|[Contacto](https://github.com/LuisBaezN)|
|`Juan Pablo Pech`|Frontend|[Contacto](https://github.com/JPabloPQ)|
|`Azael Barbosa`|Backend|[Contacto](https://github.com/AzaelBarbosa)|

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

### Explicación de la problemática

Dentro del gran número de daños que le hemos causado al océano, la pesca ilegal en áreas marinas protegidas (MPA) representa un impacto muy alto a largo plazo, ya que se ha demostrado que estas áreas ayudan a recuperar la biodiversidad del oceano gracias al libre tránsito de especies. De no proteger la vida marina, los efectos del cambio climático incrementan más rápido.

Del total del océano, cerca del 6.35% está protegido, pero solo el 1.89% rigurosamente. Además, se sabe que si se pesca en el área limítrofe de las reservas, la población se reduce un 60% en una extención de 1km comparado con el área céntrica. A su vez, el 64% de las MPAs tienen un área menor a los 10,000 kilómetros cuadrados. Se estima que cerca del 20% al 30% de la comida marina importada proviene de pesca ilegal en zonas protegidas y se valora en más de $23.5 mil millones de dólares.

Desde hace 20 años se empezó a desarrollar un sistema de monitoreo electrónico (EM) para mejorar el proceso, monitorear el las trayectorias de pesca, evitar la sobre explotación, etc. Sin embargo, el sistema no ha tenido mucho éxito, aunque se tiene esperanza de que la tecnología se incorpore gracias a los avances tecnológicos, la reducción de costos, resurgimiento de la inteligencia artificial y las nuevas políticas. Por lo que por ahora este sistema no representa una solución de apoyo.


[Zonas protegidas de México](https://www.profepa.gob.mx/innovaportal/v/1380/1/mx.wap/areas_naturales_protegidas_marinas_y_litorales.html)

> Fuentes: <br> [Problematica de pesca ilegal](https://thehumaneleague.org/article/fishing-industry) <br> [Zonas protegidas de México](https://www.profepa.gob.mx/innovaportal/v/1380/1/mx.wap/areas_naturales_protegidas_marinas_y_litorales.html) <br> [Ubicación Geografíca de las zonas protegidas](https://simec.conanp.gob.mx/consulta_fichas.php)

### Solución planteada

Fish Savior es un sistema de monitoreo y respuesta ante la pesca ilegal dentro de MPAs.

Una patrulla consta de:
- Barco (1)
- Lanchas (3 o más)
- Drones (3 o más)

Procedimiento:
- Destino generado aleatoriamente
- Alcanzado el destino, despliega lanchas
- Después de alcanzar cierta distancia, despliega dron.
- Dron busca algun barco y registra si encuentra alguna anomalía.
- Si se encuentra alguna anomalía, alerta, si no, regresa.
- Repetir despliege de dron durante cierto límite de tiempo.
- Cambiar posición de monitoreo al terminar el tiempo en el primer espacio.

#### Alcance

En este proyecto se considera que el uso de drones y transmisión de información de lanchas a barco puede ser un problema, por lo que este pude ser un elemento que se puede escalar, así que se tomará un solo barco como agente de monitoreo, respuesta, registro y análisis.

El análisis del presupuesto, que incluye gastos operativos y de mantenimiento no se incluye por la falta de un experto en el área que pueda orientarnos de las diversas variables, como combustible, operadores, cuerpo de seguridad, etc.

Aunque ya exiten muchos trabajos enfocados en la detección de barcos con el uso de deep learning, el trabajo realizado por Yu Guo, Yuxu Lu y Ryan Wen Liu en su artículo titulado "Lightweight deep network-enabled real-time low-visibility enhancement for promoting vessel detection in maritime video surveillance" ofrece resultados y procesamiento viables para un sistema como el que se propone en este proyecto, sin embargo, la red neuronal se probó en una tarjeta gráfica NVIDIA RTX 2080Ti dando respuesta de procesamiento y detección de 0.0045 segundos en una imagen de 1920x1080 que, aunque da una respuesta para una aplicación en tiempo real, esta puede ser reemplazada por un sistema embebido, como una Jetson Nano, para reducir costos y, por el protocolo de operación descrito, aunque tenga un tiempo de respuesta menor, no será un obstáculo. Por esto, solo se ha replicado el experimeto usando una GTX 1660 super para visualizar el tiempo de respuesta, los resultados con diferentes imágenes y verificar el tamaño del estado latente. 

Todo lo descrito anteriormente corresponde a la etapa de procesamiento de imagen, queda por implementarlo junto a una red YOLO. Dentro del trabajo de Zhenfeng Shao et al, titulado "SeaShips: A Large-Scale Precisely Annotated Dataset for Ship Detection" se provó la segunda versión de esta red para detectar embarcaciones, sin embaro, ya existe una cuarta vesión de esta red.

> API considerada a usar desde el principio: [Señala con Google Maps](https://www.cursosgis.com/como-crear-geometrias-con-la-api-javascript-de-google-maps/)

### Tecnologías a usar

- API
- CSS
- JavaScript
- Html

> API para mapeo: [Mapa leaflet](https://leafletjs.com/examples/quick-start/) <br> Herramientas de servidor: [Azure Tools](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice)

> Dependencias: <br> npm install jest@26.0.0 --save <br> npm install express --save

### Herramientas

- Visual Studio Code

> Extensiones: [VSCODE - Azure](https://code.visualstudio.com/docs/azure/extensions)

## Resultados

### Frontend

### Backend

### IA

Usando LVENet filtramos las siguientes 3 imágenes con tamaños variables:

![img 1](assets/2.png)
![img 2](assets/23.png)
![img 3](assets/3.png)

Se obtuvieron los siguientes tiempos de procesamiento:

![log](assets/log.png)

### Dudas sobre codigos

```JavaScript
// Aquí codigos clave que requerimos investigar 1
```

```JavaScript
// Aquí codigos clave que requerimos investigar 2
```

