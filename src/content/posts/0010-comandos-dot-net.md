---
title: "Comandos de la CLI de .NET"
publishDate: 2024-26-02 10:00:00
tags: ["desarrollo"]
isDraft: false
slug: comandos-dot-net
---

Recientemente he estado trabajando en algunos proyectos de prueba con .Net usando una Macbook Air con macOS Sonoma. En este ambiente, solo instalé [Visual Studio Code](https://code.visualstudio.com/) y [.NET 8](https://dotnet.microsoft.com/es-es/download/dotnet/8.0).

Para poder crear proyectos, compilarlos, ejecutarlos y publicarlos, he estado usando la CLI (command-line interface) de .NET. La "interfaz de la línea de comandos" (CLI) permite invocar el controlador genérico `dotnet`, ejecutar un comando y, si se requiere, enviarle opciones al comando.

```showLineNumbers title="CLI de .NET"
dotnet <comando> <opciones>
```

A continuación te comparto los comandos que he estado usando y que podrían ser de utilidad para tu desarrollo con la plataforma .NET.

## dotnet

Para revisar si tenemos instalado .NET en el equipo y consultar la versión, se puede utilizar la opción `version` o la opción `info`. Para obtener más ayuda del controlador dotnet se puede usar la opción `help`.

```showLineNumbers title="CLI de .NET"
dotnet --version
dotnet --info
dotnet --help
```

## new

El comando `new` es utilizado para crear un nuevo proyecto, archivo de configuración o solución, dependiendo de la plantilla que se le indique como argumento.

Para crear un proyecto de aplicación de consola, se utilizaría la plantilla `console` de la siguiente manera:

```showLineNumbers title="CLI de .NET"
dotnet new console
```

Para crear un proyecto de API web de ASP.NET Core, se utilizaría la plantilla `webapi`, se le especificaría el nombre *API* y se le indicaría que usara la opción use-controllers para que agregue los modelos y controladores de la siguiente manera:

```showLineNumbers title="CLI de .NET"
dotnet new webapi -n API --use-controllers
```

Para crear un proyecto de MAUI (Multi-platform App UI), se utilizaría la plantilla `maui` (la cual se descarga cuando se instala la carga de trabajo **maui**) de la siguiente manera:

```showLineNumbers title="CLI de .NET"
dotnet new maui
```

Para tener acceso a la ayuda del comando se puede usar la opción `help`:

```showLineNumbers title="CLI de .NET"
dotnet new --help
```

## workload

El comando `workload` permite trabajar con cargas de trabajo de .NET.

La opción `install` instala una carga de trabajo indicada. Por ejemplo, para instalar la carga de trabajo **maui** se haría de la siguiente manera:

```showLineNumbers title="CLI de .NET"
dotnet workload install maui
```

Para mostrar información sobre las cargas de trabajo instaladas, se hace de la siguiente manera:

```showLineNumbers title="CLI de .NET"
dotnet workload --info
```

Para tener acceso a la ayuda del comando se puede usar la opción `help`:

```showLineNumbers title="CLI de .NET"
dotnet workload --help
```

## run

El comando `run` permite ejecutar el código fuente. Se puede usar de la siguiente manera:

```showLineNumbers title="CLI de .NET"
dotnet run
```

Para tener acceso a la ayuda del comando se puede usar la opción `help`:

```showLineNumbers title="CLI de .NET"
dotnet run --help
```

## build

El comando `build` compila el código fuente y todas sus dependencias.

Para compilar un proyecto maui y ejecutarlo sobre el framework .NET 8 bajo la plataforma de macOS se hace de la siguiente manera:

```showLineNumbers title="CLI de .NET"
dotnet build -t:Run -f net8.0-maccatalyst  
```

Para tener acceso a la ayuda del comando se puede usar la opción `help`:

```showLineNumbers title="CLI de .NET"
dotnet build --help
```

## publish

El comando `publish` se utiliza para publicar la aplicación y sus dependencias en una carpeta. Estos archivos pueden ser desplegados en un servidor posteriormente.

Para publicar un proyecto de tipo API web de ASP.NET Core se puede hacer de la siguiente manera:

```showLineNumbers title="CLI de .NET"
dotnet publish  
```

## Importante

Para que la mayoría de los comandos anteriores funcione, es necesario cambiar la carpeta de trabajo de la terminal a la ruta en la que se encuentra nuestro proyecto de .NET. 

Para ello, podemos usar el comando `ls` (list) para listar los archivos y carpetas de la carpeta de trabajo y el comando `cd` (change directory) para  "entrar" o "salir" de una carpeta. 

Si usamos Visual Studio Code, su terminal se iniciará automáticamente en la carpeta que se abra.


## Referencias
* MAUIMAN.dev. (2023). .NET MAUI with .NET CLI (Command Line Interface). Recuperado de https://mauiman.dev/maui_cli_commandlineinterface.html
* MAUIMAN.dev. (2023). Getting started with .NET MAUI (iOS) on an M1 Mac. Recuperado de https://mauiman.dev/maui_ios_mac.html
* Microsoft Learn. (2024). ¿Qué es .NET MAUI?. Recuperado de https://learn.microsoft.com/es-es/dotnet/maui/what-is-maui?view=net-maui-8.0
* Microsoft Learn. (2023). dotnet build. Recuperado de https://learn.microsoft.com/es-es/dotnet/core/tools/dotnet-build
* Microsoft Learn. (2023). comando dotnet. Recuperado de https://learn.microsoft.com/es-es/dotnet/core/tools/dotnet
* Microsoft Learn. (2024). dotnet new. Recuperado de https://learn.microsoft.com/es-es/dotnet/core/tools/dotnet-new
* Microsoft Learn. (2023). dotnet publish. Recuperado de https://learn.microsoft.com/es-es/dotnet/core/tools/dotnet-publish
* Microsoft Learn. (2023). dotnet run. Recuperado de https://learn.microsoft.com/es-es/dotnet/core/tools/dotnet-run
* Microsoft Learn. (2023). dotnet workload install. Recuperado de https://learn.microsoft.com/es-es/dotnet/core/tools/dotnet-workload-install
* Microsoft Learn. (2023). Información general sobre la CLI de .NET. Recuperado de https://learn.microsoft.com/es-es/dotnet/core/tools/