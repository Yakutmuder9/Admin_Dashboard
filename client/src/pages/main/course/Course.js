import { useState } from 'react'

const Course = () => {
  const [courses, setCourses] = useState([
    {
      id: 11234, titel: "Maths", term: "Fall 2022", enrolledAs: "Student", published: "Yes"
    },
    {
      id: 54332, titel: "Structural Design", term: "Fall 2022", enrolledAs: "Student", published: "Yes"
    },
    {
      id: 34678, titel: "Modern Architecture", term: "Fall 2022", enrolledAs: "Student", published: "Yes"
    },
  ])

  return (
    <div className='Course'>
      <div className='w-100 d-flex align-items-center justify-content-between'><h2>All Course</h2> <button className='btn btn-outline-secondary'>Add New Course</button>
      </div>
      <div className='currentEnrollde'>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Course Id</th>
              <th scope="col">Course Titel</th>
              <th scope="col">Term</th>
              <th scope="col">Enrolled as</th>
              <th scope="col">Published</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, key) => {
              return (
                <tr key={course.id}>
                  <th scope="row">{course.id}</th>
                  <td>{course.titel}</td>
                  <td>{course.enrolledAs}</td>
                  <td>{course.titel}</td>
                  <td>{course.published}</td>
                </tr>)
            })}

          </tbody>
        </table>
      </div>
      <div className=''><h2>Past Enrollment</h2></div>
      <div className='pastEnrollde'>
      <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Course Id</th>
              <th scope="col">Course Titel</th>
              <th scope="col">Term</th>
              <th scope="col">Enrolled as</th>
              <th scope="col">Published</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, key) => {
              return (
                <tr key={course.id}>
                  <th scope="row">{course.id}</th>
                  <td>{course.titel}</td>
                  <td>{course.enrolledAs}</td>
                  <td>{course.titel}</td>
                  <td>{course.published}</td>
                </tr>)
            })}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Course
