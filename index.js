const { request } = require('express');
const express=require('express')
const app=express()
const port=process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());

const courses=require('./data/Courses.json');
const instructors=require('./data/Instructors.json');
const course=require('./data/course_details.json')


app.get('/',(req,res)=>{
    res.send('API RUNNING')
});

// sending all the course informations
app.get('/courses',(req,res)=>{
    res.send(courses);

});

// sending all the instructors informations
app.get('/instructors',(req,res)=>{
    res.send(instructors);

});

// sending single course information
app.get('/course/:id',(req,res)=>{
    const id=parseInt(req.params.id);

    const selected_course= course.find(c => c.course_code ===  id);
    console.log(selected_course)
    res.send(selected_course);
    
});

// sending single instructor information
app.get('/instructor/:id',(req,res)=>{
    const id=parseInt(req.params.id);

    const selected_instructor= instructors.find(i => i.instructor_id ===  id);
    console.log(selected_instructor)
    res.send(selected_instructor);
    
});



app.listen(port,()=>{
    console.log('Server is running on port',port);
})