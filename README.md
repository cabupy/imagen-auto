# Generar imagen a partir de una plantilla HTML+CSS

> Como podemos armar una plantilla HTML+CSS para generar una imagen.

### Pasos a seguir

1) Instalar previamente phantomjs (ejemplo ubuntu 14)

```sh
$ cd ~
$ wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2
$ sudo tar xvjf phantomjs-2.1.1-linux-x86_64.tar.bz2
$ mv phantomjs-2.1.1-linux-x86_64/ /usr/local/share/ 
$ sudo ln -s /usr/local/share/phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/local/bin/
$ phantomjs --version
```

2) Correr el server web

```sh
$ npm run test
```
3) Correr phantomjs

```sh
$ phantomjs render2img.js
```

4) Abrir el browser en http://localhost:8080

### Comentarios

Los numeros podrian ser dinamicos, mediante ajax se podria consumir una API REST
y colocar los numeros en cada <span> correspondiente.

### Licencia

MIT