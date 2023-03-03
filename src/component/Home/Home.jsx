import React from 'react'
import { AppBar, Box, Button, Grid, Toolbar, Typography  } from '@mui/material'
import FileCopyIcon from '@mui/icons-material/FileCopy';


import image from '../../Assets/resume-banner.png'
const Home = () => {
  const navItems = ["Resume", "Cover Letter", "Career Advice"]
  return (
    <>
     {/*NavBar  */}
    <Box display="flex" >
      <AppBar component="nav" >
        <Toolbar sx={{display:'flex',alignItems:'center', justifyContent:'space-between', position:'stickey'}} >
          <Typography variant='h4' component="span" sx={{fontStyle:'italic'}}>
            <FileCopyIcon sx={{fontSize:'1.8rem', marginRight:'0.4em'}}/>
            Resume.pk
          </Typography>
          <Box>
           <Typography>
           {
              navItems.map(navItem=>{
                return(
                  <Button key={navItem} sx={{color:"#fff",fontSize:'1.5rem'}}>{navItem}</Button>
                )
              })
            }
           </Typography>
          </Box>
          <Box >
            <Button variant='outlined' sx={{color:"#fff", fontSize:'1.6rem'}}>Sign In</Button>
            <Button variant='outlined' sx={{color:"#fff", fontSize:'1.6rem'}}>Get Started</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Toolbar/>
    </Box>
    <br />
 
    <Box sx={{bgcolor:'#0d2525', marginTop:'3em', height:'auto' }} >

    <Grid container spacing={2} direction='row' alignItems='center' justifyContent='center' height='100%'>
      <Grid item xs={12} md={6} sx={{textAlign:'center'}}  >
        <Box sx={{padding:'3em', display:'flex',flexDirection:'column', justifyContent:'center'}}>
          <Typography variant='h5'sx={{color:"#fff", fontWeight:"bold", fontSize:'3rem'}}>
          Build a professional resume for free
          </Typography>
          <Typography variant='text' sx={{fontSize:'1.5rem', letterSpacing:'0.02em' ,padding:'1em 0em', color:"#eee8e8d7", lineHeight:'1.4em'}}>
          Are you tired of struggling to format your resume in Microsoft Word? Or spending hours trying to find the perfect resume template? Look no further! Our website provides a simple and user-friendly interface that will guide you through the resume-building process step-by-step.
          <br />
          <br />
          Create your resume easily with our free builder and professional templates.Our resume builder tool is designed to be user-friendly and intuitive, making it easy to create a polished and professional-looking resume in no time.
          </Typography>
          <br />
          <br />
          <hr />

          <Box component='div' sx={{display:'flex', alignItems:'center', justifyContent:{xs:'center' , md:'flex-start'}, marginTop:'1em'}}>
          <Button size='large' href='/' variant='contained' sx={{padding:'1.2em 3em'}}>Let's build the CV</Button>
          </Box>
          
        </Box>
      </Grid>
      <Grid item xs={12} md={6} sx={{textAlign:'center', display:{xs:'none', sm:'block'}}}>
        <figure>
          <img src={image} alt="resume-tamplate" height='500px' />
        </figure>
      </Grid>

    </Grid>
    </Box>

    </>
    )
}

export default Home