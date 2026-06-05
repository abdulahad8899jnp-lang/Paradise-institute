// import AboutUs from '@/pages/about-us'
// import Courses from '@/pages/courses'
// import { SignIn } from '@/pages/sign-in'
// import Home from '@/pages/home'
// import { OurStudents } from '@/pages/our-students'
// import { Route, Routes } from 'react-router-dom'


// export const AllRoutes = () => {
//   return (
//     <Routes>
//         <Route element={<Home/>} path='/' ></Route>
//         <Route element={<Courses/>} path='/courses' ></Route>
//         <Route element={<AboutUs/>} path='/about-us' ></Route>
//         <Route element={<SignIn/>} path='/sign-in' ></Route>
//         <Route element={<OurStudents/>} path='/our-students' ></Route>
       

//     </Routes>
//   )
// }




import AboutUs from '@/pages/about-us'
import Courses from '@/pages/courses'
import { SignIn } from '@/pages/sign-in'
import Home from '@/pages/home'
import { OurStudents } from '@/pages/our-students'

import StudentSearch from '@/pages/StudentSearch'
import StudentResult from '@/pages/StudentResult'
import AdminLogin from '@/pages/AdminLogin'
import AdminDashboard from '@/pages/AdminDashboard'
import AdminUpload from '@/pages/AdminUpload'

import { Route, Routes } from 'react-router-dom'

export const AllRoutes = () => {
  return (
    <Routes>

      {/* Existing Pages */}
      <Route path='/' element={<Home />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/our-students' element={<OurStudents />} />

      {/* Student Management */}
      <Route path='/student-search' element={<StudentSearch />} />
      <Route path='/student-result' element={<StudentResult />} />

      {/* Admin Panel */}
      <Route path='/admin' element={<AdminLogin />} />
      <Route path='/admin/dashboard' element={<AdminDashboard />} />
      <Route path='/admin/upload' element={<AdminUpload />} />

    </Routes>
  )
}