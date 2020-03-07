// dependencies
const express = require('express');
const url = require('url');
const path = require('path')
var cors = require('cors');

const fs = require("fs");
const multer = require("multer");


const app = express();
const port = 3002;

//local host:3002/static/
app.use('/static', express.static(path.join(__dirname, './static')))

app.use(cors())

let themes = [{ id: 1, name: 'The Supermarket' },
{ id: 2, name: 'Outdoor' },
{ id: 3, name: 'Seasonal Verbs' },
{id:4, name: 'Houses'}];
let images = [{ id: 23, name: '1.jpg', themeId: 1 },
{ id: 24, name: '2.jpg', themeId: 2 },
{ id: 25, name: '3.jpg', themeId: 3 },
{ id: 26, name: '4.jpg', themeId: 4}];
let words = [{ id: 1, themeId: 1, imageId: 23, name: 'scale', X: 210, Y: 120, number: 10 },
{ id: 1, themeId: 1, imageId: 23, name: 'aisle', X: 340, Y: 210, number: 7 }];

app.get('/', (request, response) => {
  response.send('This is picture dictionary service.')
});


var objMulter = multer({ dest: './static/imgs' })
app.use(objMulter.any());

app.post('/pages/:contentId/uploadImg', (req, res, next) => {

  try{
    const newname=req.files[0].path+'.jpg'
    console.log(req.files[0])
  fs.rename(req.files[0].path,newname,function(err,newName){
    if(err){
        res.send('Upload Error;')
    }else{
        res.json(`${req.files[0].filename}.jpg`)
    }
})
  }catch(err){
    console.log(err)
  }
})

app.get('/pages/:contentName/image/:imageName', (request, response) => {
  let themeName = request.params.contentName
  let imgName = request.params.imageName

  let themeId = themes.filter(x =>{
    return x.name === themeName
  })[0].id
  let image = images.filter(x => {
    return x.themeId === themeId && x.name === imgName
  })[0]
  console.log(image,1)
  if (image) {
    response.send({ imgUrl: image.name })
  } else {
    response.status(404).send('No images were found.')
  }

});


app.get('/pages/:contentName', (request, response) => {
  let themeName = request.params.contentName
  let theme = themes.filter(x =>{
    return x.name === themeName
  })
  let imageObj = images.filter(x => {
    return x.themeId === theme[0].id
  })
  response.json(imageObj);
});

app.get('/contents', (request, response) => {
  response.json(themes);
});

// start the server
app.listen(port, () => console.log('Listening on port ' + port));
