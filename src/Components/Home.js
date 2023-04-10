import React from 'react'
import Header from './Home/Header'
import Options from './Home/Options'
import AdminEntry from './Admin/AdminEntry'
import { useState } from 'react'
import { ButtonGroup, Button, Fab, Breadcrumbs, Typography, Link } from '@mui/material'
import { Navigate } from 'react-router-dom'
import addSuffix from '../Utility/addSuffix'
import Navbar from './Navbar'


function Home({isAdmin}) {

  const [page, setPage] = useState(0);
  const [stream, setStream] = useState('');
  const [sem, setSem] = useState(0);
  const [material, setMaterial] = useState('');
  const [data, setData] = useState({});

  const incrementPage = () => {setPage(page + 1)
    setData({
      stream: stream,
      sem: sem,
      material: material
    })
  };
  const decrementPage = () => {setPage(page - 1)
    setData({
      stream: stream,
      sem: sem,
      material: material
    })
  };

  console.log(page + stream + sem + material)
  const pageOne = (
    <>
      <div className='selection-header'>
          <Header text="Get started, choose your class"/>
        <Breadcrumbs color="#fff" aria-label="breadcrumb">
        <Link
          underline='none'
          color="#FFB524"
          sx={{fontWeight:700}}
        >
         / Class
        </Link>
        </Breadcrumbs>
        
      </div>
      <div className="home-btns">
        <Options values={['MCA','MSC','MSC DS']} incPage={incrementPage} setValue={setStream}/>
      </div>
git     </>
  )

  const pageTwo = (
    <>
       <div className='selection-header'>
        <Header text="Now choose your semester"/>
        <Breadcrumbs color="#fff" aria-label="breadcrumb">
        <Link
          underline="hover"
          color="#fff"
          href="/"
        >
         / Class
        </Link>
        <button className='bread-button btn-active'>
          Sem
        </button>
        </Breadcrumbs>
      </div>
      <div className="home-btns">
        <Options values={[1,2,3,4]} incPage={incrementPage} setValue={setSem}/>
      </div>
    </>
  )

  const pageThree = (
    <>
       <div className='selection-header'>
        <Header text= {`${stream} ${addSuffix(sem)} sem material`} />
        <Breadcrumbs color="#fff" aria-label="breadcrumb">
        <Link
          underline="hover"
          color="#fff"
          href="/"
        >
         / Class
        </Link>
        <button className='bread-button' onClick={()=> {setPage(1)}}>
          Sem
        </button>
        <button className='bread-button btn-active'>
          Material
        </button>
        </Breadcrumbs>
      </div>
      <div className="home-btns">
        <Options values={["Previous Year", "Assignment","Study Material","Syllabus"]} incPage={incrementPage} setValue={setMaterial}/>
      </div>
    </>
  )

  const pageFour = (
    <>
       <Navigate to={`/${material}-${stream}-${sem}`}/>
    </>
  )

  const adminEntry = (
    <>
    <div className='main-header'>
    <Fab color="primary" aria-label="back" onClick={decrementPage}>
            <i className="ph-bold ph-arrow-left"></i>
      </Fab>
        <Header text={`Upload ${material}` }/>
      </div>
      <AdminEntry data={data}/>
    </>
  )

  let mainPage;

  if (page==0){
    mainPage = pageOne;
  }
  else if(page==1){
    mainPage = pageTwo;
  }
  else if(page==2){
    mainPage = pageThree;
  }
  else if(page==3){
    mainPage = isAdmin ? adminEntry : pageFour;
  }

  return (
    <>
    <header>
      <Navbar tab="home"/>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-heading">Ultimate Hub for<br/> Computer Science Students</h1>
          <p className="hero-subheading">Previous Year Papers, Solved Assignments, Study Material and more</p>
        </div>
      </section>
    </header>
    <div className='selector'>
      {mainPage}
    </div>
    </>
  )
}

export default Home