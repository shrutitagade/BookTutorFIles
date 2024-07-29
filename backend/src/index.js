const express = require('express');
const app = express();
require("../db/config.js");
const cors = require("cors");
const User = require("../db/user.js");
const Tutor = require('../db/tutor');
const Class = require('../db/class')
// Middleware to parse JSON-encoded and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const multer = require('multer');
const JoinClass = require('../db/joinClassSchema.js');
const upload = multer({ dest: 'uploads/' })
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });
app.use('/uploads', express.static('uploads'))
app.post("/register", async (req, resp) => {
  let result = new User(req.body);
  result = await result.save();
  
  resp.send(result);
});
app.post('/become-tutor', async (req, resp) => {
  let result = new Tutor(req.body);
  result = await result.save();
  
  resp.send(result);


});
app.post('/student-join-course', async (req, resp) => {
  let result = new JoinClass(req.body);
  result = await result.save();
  
  resp.send(result);


});
app.get('/students', async (req, resp) => {
  const student = await JoinClass.find();
  resp.send(student);


});

app.get('/show-student/:id', async (req, res) => {

  const student = await JoinClass.findById(req.params.id).populate('student');
  res.send(student);
  
  

});

app.get("/show-tutor/:id", async (req, resp) => {

  const classInfo = await Class.findById(req.params.id).populate('tutor');
  
  resp.send(classInfo);
});


// app.post('/create-class', upload.single('image'), async (req, res) => {

//   // Create a new class object

//   const courseName = req.body.courseName
//   const duration = req.body.duration
//   const price = req.body.price
//   const userId = req.body.userId
//   const imageUrl = req.file.path
//   const education = req.body.education
//   const specialization = req.body.specialization
//   const about = req.body.about
//   const videos = req.body.videos
//   const newClass = new Class({ courseName: courseName, duration: duration, price: price, imageUrl: imageUrl,education:education,specialization:specialization,about:about,videos:videos , userId: userId}) // Replaced "Item" with "AddedProduct"
//   const success = await newClass.save()
//   if (success) {
//     return res.send({ code: 200, message: 'add success', })
//   } else {
//     return res.send({ code: 500, message: 'Service error' })

//   }
// });
app.post('/create-class', upload.single('image'), async (req, res) => {
  try {
    // Extract data from the request body and file
    const { courseName,tutorName, duration, price, userId, education, specialization, about, videos,link } = req.body;
    const imageUrl = req.file.path; // Path of the uploaded image

    // Create a new class object with extracted data
    const newClass = new Class({
      courseName,
      tutorName,
      duration,
      price,
      userId,
      imageUrl,
      education,
      specialization,
      about,
      videos,
      link
    });

    // Save the new class to the database
    const savedClass = await newClass.save();
console.log(savedClass.link)
    // Respond with success message
    res.status(200).json({ code: 200, message: 'Class created successfully', class: savedClass });
  } catch (error) {
    // If an error occurs, respond with an error message
    console.error('Error creating class:', error);
    res.status(500).json({ code: 500, message: 'An error occurred while creating class' });
  }
});

app.get('/tutors', async (req, res) => {
  try {
    const tutors = await Tutor.find();

   await res.json(tutors);
    
    console.log(tutors._id)
  } catch (error) {
    console.error('Error fetching tutor information:', error);
    res.status(500).json({ message: 'An error occurred while fetching tutor information' });
  }
});
app.post("/login", async (req, resp) => {
  if (req.body.email && req.body.password) {
    let result = await User.findOne(req.body);
    if (result) {
      resp.send(result);
    } else {
      resp.send({ result: "No Record Found" });
    }
  } else {
    resp.send({ result: "Please Enter both data" });
  }
});
app.delete("/delete/:id", async (req, resp) => {
  let result = await Class.deleteOne({ _id: req.params.id }); // Replaced "Item" with "AddedProduct"
  resp.send(result);
})
app.get("/show/:id", async (req, resp) => {
  let result = await Class.find({ _id: req.params.id }); // Replaced "Item" with "AddedProduct"
  resp.send(result);
})

app.get("/class-list", async (req, resp) => {
  let result = await Class.find();
  if (result.length > 0) {
    resp.send(result);
  }
  else {
    resp.send({ result: "No Record Found" });
  }
})
app.get("/", (req, resp) => {
  resp.send("hello")
})
const port = 8080;
app.listen(port, () => {
  console.log(`Server is connected at ${port}`);
});
