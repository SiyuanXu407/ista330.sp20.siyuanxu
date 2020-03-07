// dependencies
const express = require('express');
const url = require('url');
var cors = require('cors');

//create the server
const app = express();
const port = 3002;

app.use(cors())

let themes = [{id: 1, name: 'The Supermarket'},
              {id: 2, name: 'Outdoor'},
              {id: 3, name: 'Seasonal Verbs'},
              {id: 4, name: 'Houses'}];
let images = [{id: 23, name: '1.jpg', themeId: 1},
              {id: 24, name: '2.jpg', themeId: 2},
              {id: 25, name: '3.jpg', themeId: 3}
              {id: 26, name: '4.jpg', themeId: 4}];
let words = [{id:1, themeId: 1, imageId: 23, name:'scale', X: 145, Y:534, number: 7},
             {id:1, themeId: 1, imageId: 23, name:'aisle', X: 340, Y:210, number:10}];
// the methods
app.get('/', (request, response) => {
   response.send('This is picture dictionary service.')
});

app.get('/words/:contentId/:imageId/:objectX/:objectY', (request, response) => {
  let themeId = Number(request.params.contentId);
  let imageId = Number(request.params.imageId);
  let objectX = Number(request.params.objectX);
  let objectY = Number(request.params.objectY);
  //TODO
   let word = words.find(x => x.themeId === themeId &&
                   x.imageId === imageId &&
                   (Math.abs(x.X - objectX) < 10) &&
                   (Math.abs(x.Y - objectY) < 10));
   if (word) {
     response.json({name: word.name, number: word.number});
   } else {
     response.status(404).send('No words were found.');
   }
});

app.get('/pages/:contentId/image/:imageId', (request, response) => {
   let themeId = Number(request.params.contentId);
   let imageId = Number(request.params.imageId);
   let image = images.find(x => x.id === imageId && x.themeId === themeId);
   if(image) {
       response.sendFile('./static/imgs/' + image.name);
   } else {
     response.status(404).send('No images were found.')
   }

});

app.get('/pages/:contentId', (request, response) => {
  let themeId = Number(request.params.contentId);
  let ids = images.filter(x => x.themeId === themeId)
         .map(x => x.id);
    response.json(ids);
});

app.get('/contents', (request, response) => {
   response.json(themes);
});

// start the server
app.listen(port, () => console.log('Listening on port ' + port));
