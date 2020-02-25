const express = require('express');
const url = require('url');
var cors = require('cors');

const app =express();
const port = 3002;

app.use(cors());

let themes = [{id:1, name: 'The Supermarket'},
{id:2, name: 'Outdoor'},
{id:3, name: 'Houses'}];

let images = [{id:1, name: 'the-spermarket.png', themeId: 1},
{id:2, name: 'outdoor-clothes.png', themeId: 2},
{id:3, name: 'houses.png', themeId: 3}];

app.get('/',(requesst,response) => {
  response.send('This is picture dictionary service.')
});

app.get('/pages/:contentId', (request,response) => {
  let themeId = Number(request.params.contentId);
  let ids = images.filter(x => x.themeId === themeId).map(x => x.id);
  response.json(ids);
});

app.get('/pages/:contentId/image/:imageId', (request,response) => {
  let themeId = Number(request.params.contentId);
  let imageId = Number(request.params.imageId);
  let image = images.find(x => x.id === imageId && x.themeId === themeId);
  if(image){
    response.sendFile(__dirname + image.name);
  }else{
    response.status(404).send('No images were found.')
  }
})

app.get('/pages/:contentId/image/:imageId/:objectX:objectY',(request,response) =>{
  let themeId = Number(request.params.contentId);
  let imageId = Number(request.params.imageId);
  let objectX = Number(request.params.objectX);
  let objectY = Number(request.params.objectY);
});

app.get('/contents', (request,response) => {
  response.json(themes);
});

app.listen(port,() => console.log('Listening on port ' +port));
