---
title: "Iniciando el 2024"
publishDate: 2024-01-01 20:00:00
tags: ["personal"]
isDraft: false
slug: iniciando-el-2024
references: [
    "Artiga, H. (2023). Biografía de Bob Parsons. Emprende PYME.NET. Recuperado de https://emprendepyme.net/biografias/bob-parsons"
]
---
Decidí iniciar el 2024 rentando un servidor VPS en GoDaddy. A continuación te comparto más información sobre esta adquisición.

## Antecedentes
Godaddy y yo hemos coincidido desde hace mucho años. Recuerdo que en la empresa en la que laboro, por allá del 2009 (cuando Bob Parsons aún era CEO de GoDaddy), contratamos varios productos y servicios con ellos. Al tener pocas incidencias con lo adquirido, se empezó a generar una confianza en ellos.

El 19 de noviembre de 2011 me animé a rentar un Ultimate Web Hosting Windows (Servidor compartido) con el cual emprendí en el mundo de los dominios, servidores y administración de correos. Mi experiencia fue bastante agradable y aprendí mucho en aquel momento.

## En el 2023...

El 26 de agosto del 2023, renté un [Web Hosting Ultimate](https://www.godaddy.com/es/hosting/web-hosting) el cual incluía Windows Server como sistema operativo y Plesk para la administración. 

Obtuve un servidor que me permitía lo siguiente:
- 25 sitios web
- 50 bases de datos
- 75 GB de almacenamiento
- Recursos compartidos de vCPU y RAM
- Dominio gratis
- Prueba gratis de correo profesional
- SSL gratuito e ilimitado para todos tus sitios web

Si bien, el desempeño de las páginas estáticas que llegué a colocar ahí era bastante bueno, a la hora de empezar a crear algunas Web API's con .Net 6 y conectarlas a unas bases de datos SQL Server, se empezaba a sentir que la respuesta a las peticiones empezaban a demorar.

## Y para el 2024...

Tomando en cuenta lo anterior y que se vienen proyectos interesantes para el 2024, decidí dar el brinco. Hoy me puse en contacto con GoDaddy a través del chat oficial y les compartí mis necesidades. Gabriela B., quien fue mi asesora, me sugirió el plan [Gen4 VPS para Windows 4 CPU](https://www.godaddy.com/es/hosting/vps-hosting) el cual consiste en un servidor VPS (Servidor Virtual Privado) con características muy superiores al Web Hosting Ultimate.

Las características del VPS son las siguientes:
- 4 núcleos vCPU
- 8 GB de memoria RAM
- 200 GB de almacenamiento SSD NVMe
- Respaldos instantáneos
- Compatibilidad con Windows
- 3 IP adicionales disponibles a pedido
- Centros de datos globales

Estuve pensándole por un buen rato, ya que si bien por características no iba a batallar, el tema de la inversión era elevada ya que tendría que pagar <kbd>x10</kbd> lo que venía pagando. Al final decidí aventarme al ruedo: se hizo la baja del Web Hosting Ultimate, me hicieron un reembolso de las mensualidades que no estaría usando y con ello se abonó al pago anual que hice para el VPS. 

Para que el VPS no me saliera aún más caro solicité que fuera Autoadministrado, esto significa que el Sistema Operativo lo pone GoDaddy y que todo lo que requiera el servidor de aplicaciones y configuraciones van por mi cuenta. Es algo arriesgado, ya que lo más sencillo era que el servidor pudiera contar con Plesk para que la administración fuera más sencilla, pero aquí nos gusta elegir lo que no es sencillo.

Mis siguientes artículos tratarán los temas de configuración del VPS.