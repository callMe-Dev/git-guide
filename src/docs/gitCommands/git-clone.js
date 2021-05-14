export const git_clone = `
El comando <span>git clone</span> copia un repositorio de Git existente, y hace un clon o copia de ese repositorio en un nuevo directorio, en otra ubicación.

El repositorio original se puede ubicar en el sistema de archivos local o en protocolos compatibles con acceso de máquina remota.

Esto es algo así como la verificación de SVN, excepto que 'la copia de trabajo' es un repositorio Git completo: tiene su propio historial, administra sus propios archivos y es un entorno completamente aislado del repositorio original.

~~~js
$ git clone
~~~

Clonando con un <span>tag especifico</span>

~~~js
$ git clone --branch 'tag' 'repo'
~~~
`
