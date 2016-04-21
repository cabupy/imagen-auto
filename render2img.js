/*
  Autor: Carlos Vallejos <carlos@vamyal.com>
  Fecha: Abril, 2016
*/

var page = require('webpage').create();
page.open('http://localhost:8080/', function() {
  page.viewportSize = { width: 235, height: 170 };
  page.clipRect = { top: 1, left: 1 , width: 235, height: 170 };
  page.render('carton.png', {format: 'png', quality: '100'});
  phantom.exit();
});