import { styled } from '@mui/material/styles';
import Footer from "../../components/Footer/Footer"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp,  faGlobeEurope} from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card } from '@themesberg/react-bootstrap';import { useState } from 'react';




   


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Dashboard = () => {
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
  return (
    <div style={{height: "150vh"}}>
      <div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} >
        <Grid item xs >
          <Item style={{height: "100px"}}> <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-capitalize font-weight-bold">
                        Bootstrap Course
                      </p>
                      <h5 className="font-weight-bolder mb-0">
                        53 Projects
                        <span className="text-success text-sm font-weight-bolder">+55%</span>
                      </h5>
                    </div>
                  </div>
                  <div className="col-4 text-end" id="course_icon">
                    <div className="bg-gradient-primary shadow text-center border-radius-md">
                      <img src={courses.image} className="text-lg opacity-10 h-50" alt="" styel={{height: "50px", width:"60px"}}/>
                    </div>
                  </div>
                </div>
              </div>
            </div></Item>
        </Grid>
        <Grid item xs={6} >
          <Item style={{height: "100px"}}> <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-capitalize font-weight-bold">
                        Bootstrap Course
                      </p>
                      <h5 className="font-weight-bolder mb-0">
                        53 Projects
                        <span className="text-success text-sm font-weight-bolder">+55%</span>
                      </h5>
                    </div>
                  </div>
                  <div className="col-4 text-end" id="course_icon">
                    <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                      <img src={courses} className="text-lg opacity-10" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div></Item>
        </Grid>
        <Grid item xs>
          <Item style={{height: "100px"}}> <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-sm mb-0 text-capitalize font-weight-bold">
                        Bootstrap Course
                      </p>
                      <h5 className="font-weight-bolder mb-0">
                        53 Projects
                        <span className="text-success text-sm font-weight-bolder">+55%</span>
                      </h5>
                    </div>
                  </div>
                  <div className="col-4 text-end" id="course_icon">
                    <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                      <img src={courses} className="text-lg opacity-10" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </div></Item>
        </Grid>
      </Grid>
    </Box>
      </div>

      <div className="mt-2">
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Item style={{height: "350px"}}>
            <CounterWidget />
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item style={{height: "350px"}}>xs=6</Item>
        </Grid>
      </Grid>
    </Box>
      </div>
      <div className="mt-2">
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Item style={{height: "350px"}}>xs</Item>
        </Grid>
        <Grid item xs={12} md={8}>
          <Item style={{height: "350px"}}>xs=6</Item>
        </Grid>
      </Grid>
    </Box>
      </div>
     <Footer />
    </div>
  )
}

export default Dashboard;



const CounterWidget = (props) => {
  const { icon, iconColor, category, title, period, percentage } = props;
  const percentageIcon = percentage < 0 ? faAngleDown : faAngleUp;
  const percentageColor = percentage < 0 ? "text-danger" : "text-success";

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col xl={5} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
            <div className={`icon icon-shape icon-md icon-${iconColor} rounded me-4 me-sm-0`}>
              <FontAwesomeIcon icon={icon} />
            </div>
            <div className="d-sm-none">
              <h5>{category}</h5>
              <h3 className="mb-1">{title}</h3>
            </div>
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <div className="d-none d-sm-block">
              <h5>{category}</h5>
              <h3 className="mb-1">{title}</h3>
            </div>
            <small>{period}, <FontAwesomeIcon icon={faGlobeEurope} size="xs" /> WorldWide</small>
            <div className="small mt-2">
              <FontAwesomeIcon icon={percentageIcon} className={`${percentageColor} me-1`} />
              <span className={`${percentageColor} fw-bold`}>
                {percentage}%
              </span> Since last month
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};


