import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const AddCourse = () => {
  const [courses, setCourses] = useState([
    {
      "name": "PostgreSQL for Everybody Specialization",
      "image": "https://res.cloudinary.com/practicaldev/image/fetch/s--5NXiT3Hl--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/75uyvkb5753zwjxnvzms.jpg",
      "elevation": 0,
      "featured": false,
      "cost": 75,
      "description": "Learn to Design and Create Websites. Build a responsive and accessible web portfolio using HTML5, CSS3, and JavaScript.",
      "outcome": "Skills you'll gain: HTMLAllCollection, CSS and Javascript foundamental",
      "comments": [
        {
          "rating": 5,
          "text": "What a magnificent view!",
          "author": "Tinus Lorvaldes",
          "date": "2018-10-25T16:30Z"
        },
        {
          "rating": 3,
          "text": "The campground was beautiful, but the bugs could bite sometimes.",
          "author": "Brennen Ech",
          "date": "2017-06-17T03:33Z"
        },
        {
          "rating": 5,
          "text": "I caught a world-record-breaking trout here on my last visit.",
          "author": "McKenzie Sebastian",
          "date": "2019-02-18T18:12Z"
        },
        {
          "rating": 2,
          "text": "A wonderful place to reconnect with nature.",
          "author": "Jordan Runn",
          "date": "2019-08-04T20:11Z"
        },
        {
          "rating": 4,
          "text": "The stars at night were a revelation!",
          "author": "Ann Dabramov",
          "date": "2018-07-23T19:44Z"
        }
      ]
    },
    {
      "name": "Introduction to Web Development with HTML, CSS, JavaScript",
      "image": "https://www.syncfusion.com/blogs/wp-content/uploads/2020/07/Top-6-Front-End-Web-Development-Tools-to-Increase-Your-Productivity-in-2020-1.jpg",
      "elevation": 1,
      "featured": false,
      "cost": 45,
      "description": "Want to take the first steps to become a Cloud Application Developer? This course will lead you through the languages.",
      "outcome": "This course can be applied to multiple Specializations or Professional Certificates programs. Completing this course will count towards your learning in any of the following programs",
      "comments": [
        {
          "rating": 5,
          "text": "What a magnificent view!",
          "author": "Tinus Lorvaldes",
          "date": "2018-10-25T16:30Z"
        },
        {
          "rating": 5,
          "text": "The campground was beautiful, but the bugs could bite sometimes.",
          "author": "Brennen Ech",
          "date": "2017-06-17T03:33Z"
        },
        {
          "rating": 5,
          "text": "I caught a world-record-breaking trout here on my last visit.",
          "author": "McKenzie Sebastian",
          "date": "2019-02-18T18:12Z"
        },
        {
          "rating": 4,
          "text": "A wonderful place to reconnect with nature.",
          "author": "Jordan Runn",
          "date": "2019-08-04T20:11Z"
        },
        {
          "rating": 4,
          "text": "The stars at night were a revelation!",
          "author": "Ann Dabramov",
          "date": "2018-07-23T19:44Z"
        }
      ]
    },
    {
      "name": "Basics of Web Development",
      "image": "https://miro.medium.com/max/1400/1*3T7J7csXY8u36acofw5N8g.jpeg",
      "elevation": 2,
      "featured": false,
      "cost": 65,
      "description": "Learn to Design and Create Websites. Build a responsive and accessible web portfolio using HTML5, CSS3, and JavaScript",
      "outcome": "Skills you'll gain: HTMLAllCollection, CSS and Javascript foundamental",
      "comments": [
        {
          "rating": 5,
          "text": "What a magnificent view!",
          "author": "Tinus Lorvaldes",
          "date": "2018-10-25T16:30Z"
        },
        {
          "rating": 4,
          "text": "The campground was beautiful, but the bugs could bite sometimes.",
          "author": "Brennen Ech",
          "date": "2017-06-17T03:33Z"
        },
        {
          "rating": 5,
          "text": "I caught a world-record-breaking trout here on my last visit.",
          "author": "McKenzie Sebastian",
          "date": "2019-02-18T18:12Z"
        },
        {
          "rating": 5,
          "text": "A wonderful place to reconnect with nature.",
          "author": "Jordan Runn",
          "date": "2019-08-04T20:11Z"
        },
        {
          "rating": 4,
          "text": "The stars at night were a revelation!",
          "author": "Ann Dabramov",
          "date": "2018-07-23T19:44Z"
        }
      ]
    }
  ])

  return (<di>
    <div className='w-100 d-flex justify-content-between py-3' >
      <h2>Course Posted</h2>
      <button className='btn btn-secondary'>Add New Course</button>
    </div>
    <Box sx={{ width: '100%',height: "150vh" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {courses.map((course) =>{
          return(
            <>
            <Grid item xs={12} md={6} lg={4} >
          <Item className="shadow">

            <Grid item>
              <ButtonBase sx={{ width: "60%", height: 128 }}>
                <Img alt="complex" src={course.image} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                   {course.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {course.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ID: 1030114
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ cursor: 'pointer' }} variant="body2" className='btn btn-outline-secondary'>
                    Remove
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  ${course.cost}.00
                </Typography>
              </Grid>
            </Grid>

          </Item>
        </Grid>
            </>
          )
        })}
        
      </Grid>
    </Box>
  </di>

  );
}

export default AddCourse