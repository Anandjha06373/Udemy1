import React from 'react';
import Hero from "../components/Hero";
import CoursesList from "../components/CourseList";
import CategoriesList from "../components/CategoriesList";
import Footer from "../login/footer";
import Free from "../login/ReactVideoGallery";

const HomePage = () => {
  return (
    <div className='holder'>
      <Hero />
      <CoursesList />
      <Free/>
      <CategoriesList />
       <Footer/>
    </div>
  )
}

export default HomePage