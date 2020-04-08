// dependencies
const express = require('express');
const url = require('url');
const path = require('path')
const fileUpload = require('express-fileupload');
var cors = require('cors');
const bodyparser = require("body-parser");
const fs = require("fs");
let db = require("./db");

const app = express();
const port = 3002;

// localhost:3002/static/
app.use('/', express.static(path.join(__dirname, './static')))
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors())
app.use(fileUpload());

// let themes = [{ id: 1, name: 'The Supermarket' },
// { id: 2, name: 'Outdoor' },
// { id: 3, name: 'Seasonal Verbs' },
// {id:4, name: 'Houses'}];
let themes = db.getAllThemes().then(data=>{return data});
//let images = [{ id: 23, name: '1.jpg', themeId: 1 },
//{ id: 24, name: '2.jpg', themeId: 2 },
//{ id: 25, name: '3.jpg', themeId: 3 },
//{ id: 26, name: '4.jpg', themeId: 4}];
let images = db.getAllImages().then(data=>{
	return data
});
//let words = [{ id: 1, themeId: 1, imageId: 23, name: 'scale', X: 210, Y: 120, number: 10 },
//{ id: 1, themeId: 1, imageId: 23, name: 'aisle', X: 340, Y: 210, number: 7 }];
let words = db.getAllWord().then(data=>{return data});
app.get('/', (request, response) => {
  // response.send('This is picture dictionary service.')
	response.sendFile(path.join(__dirname+'/static/index.html'));
});

app.post('/theme', (request, response) => {
	  let date = new Date(Date.now()).toString();
	  console.log(date + " - new theme - " + request.body.theme);
	  db.saveTheme(request.body.theme)
	    .then(id => response.status(200).json(id))
	    .catch(e => response.status(500).send('The theme could not be added.'));
	});

app.post('/image/:contentId', (request, response) => {
	  console.log(`/image/${ request.params.contentId} received.`);

	  let imageFile = request.files.image;

	  db.saveImage(request.params.contentId)
	  .then(image => {
		  console.log(image);
		  imageFile.mv('./static/imgs/' + image.name);
		  return image;
	  })
	  .then(image => response.json(image.id))
	  .catch(e => {
	    console.log(e);
	    response.status(500).send('The image could not be saved.');
	  });
	});



app.put('/image/:imageId', (request, response) => {
  console.log(`/image/${ request.params.imageId} received.`);

  let imageFile = request.files.image;

  db.getImageName(request.params.imageId)
  .then(name => {
	  imageFile.mv('./static/imgs/' + name);
	  })
  .then(() => response.status(200).json({message:'The image updated.'}))
  .catch(e => {
    console.log(e);
    response.status(500).send('The image could not be saved.');
  });
});

app.post('/label', (request, response) => {
	  let date = new Date(Date.now()).toString();
	  console.log(date + " - new word - " + request.body.name
	                                      + "-" + request.body.x
	                                      + "-" + request.body.y
	                                      + "-" + request.body.number
	                                      + "-" + request.body.imageId);
	  // TODO: save the lable into the database and return the id of the label
	  let name = request.body.name;
      let x = request.body.x;
      let y = request.body.y;
      let number = request.body.number;
      let imageId = request.body.imageId;
	  db.saveLabel(name, x, y, number, imageId)
	  .then(x=>response.json(x))
	  .catch(e=>response.send(e));
});

app.put('/label', (request, response) => {
	  let date = new Date(Date.now()).toString();
	  console.log(date + " - new word - " + request.body.name
	                                      + "-" + request.body.id
	                                      );
	  // TODO: update the label name in the databse
	  let name = request.body.name;
	  let wordId = request.body.id;
	  db.updateLabel(name, wordId)
	  .then(x=>response.json(x))
	  .catch(e=>response.send(e));
	});


app.get('/labels/:imageId', (request, response) => {
  let date = new Date(Date.now()).toString();
  let imageId = request.params.imageId;
  console.log('/labels/' + imageId);
  // TODO: get all the labels for the given imageId
  db.getLabels(imageId).then(x=>response.json(x))
  .catch(e=>response.status(500).send('No labels found for this image'));
});

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
	console.log("save image information to database...");
  }catch(err){
    console.log(err)
  }
})

app.get('/pages/:contentId/image/:imageId', (request, response) => {
  let date = new Date(Date.now()).toString();
  console.log('pages...');
  let contentId = Number(request.params.contentId);
  let photoId = Number(request.params.imageId);
  console.log(`${contentId} ${photoId}`);
  db.getImageName(photoId)
  .then(x => {
    console.log('sending file ...');
    response.sendFile(__dirname + '/static/imgs/' + x);
  })
  .catch(e => response.status(404).send('No image were found.'));
});

app.get('/pages/:contentId', (request, response) => {
	  let contentId = Number(request.params.contentId);
	  db.getImageIds(contentId)
	  .then(x => response.json(x.map(y => y.id)))
	  .catch(e => response.status(404).send('No images were found for the content.'));
	});

app.get('/contents', (request, response) => {
	  let date = new Date(Date.now()).toString();
	  console.log('/contents');
	  db.getAllThemes()
	  .then(x => response.json(x))
	  .catch(e => response.status(500).send('The themes could not be retrieved.'));
	});

app.get('/words/:contentId/:imageId/:objectX/:objectY', (request, response) => {
	  let date = new Date(Date.now()).toString();
	  console.log('pages...');
	  let contentId = Number(request.params.contentId);
	  let imageId = Number(request.params.imageId);
	  let objectX = Number(request.params.objectX);
	  let objectY = Number(request.params.objectY);
	  console.log(`${contentId} ${imageId}`);
	  // TODO: get the word for the given imageId, objectX and objectY
	  return db.getLabel(imageId,objectX, objectY).then(x=>response.json(x))
	  .catch(e=>response.status(500).send('The object could not be found'));
	});
// start the server
app.listen(port, () => console.log('Listening on port ' + port));
