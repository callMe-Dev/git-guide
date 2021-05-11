export const git_init = `
El comando git init crea un <span>nuevo repositorio local de Git</span>. Se puede usar para convertir un proyecto existente sin versión en un repositorio de Git o para inicializar un repositorio nuevo y vacío.

La mayoría de los demás comandos de Git no están disponibles fuera de un repositorio inicializado, por lo que este suele ser el primer comando que ejecutará en un nuevo proyecto.

Aparte del directorio <span>.git</span>, en el directorio raíz del proyecto, un proyecto existente permanece inalterado.

De forma predeterminada, git init inicializará la configuración de Git en la ruta del subdirectorio <span>.git</span>

Puede configurar la variable de entorno <span>$GIT_DIR</span> en una ruta personalizada y git init inicializará los archivos de configuración de Git allí

~~~js
$ git <span>init</span>
~~~

La flag <span>--bare</span> crea un repositorio que no tiene un directorio de trabajo, lo que hace que sea imposible editar archivos y confirmar cambios en ese repositorio

 ~~~js 
 $ git init --bare /path/to/repo.git
 ~~~
`
