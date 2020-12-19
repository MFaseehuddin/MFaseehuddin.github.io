import React, {useState, useEffect} from "react"
import Layout from "../components/functionalComponents/Layout"
import Faseeh from "../images/Faseeh.png"
import "../components/styleSheets/global.css"
//deps
import {useMediaQuery} from "react-responsive"


const theme = {
  isSmall:false,
  primaryColor:"white",
  secondaryColor:"black"

}



const childrenStyle={
  display:"flex",
  justifyContent:"center",
  color:theme.secondaryColor,
  flexDirection:"column",
  alignContent:"center",
  alignItems:"center",
  margin:"5vh"
}

const IndexPage = () => {
  
  
  theme.isSmall=useMediaQuery({
    query:'(max-width:600px)'
  })

  
  const skills = [
    "web developer  ",
    "react developer",
    "IoT enthusiast "
  ]

  return (
    <Layout theme={theme} childrenStyle={childrenStyle}>
      <img src={Faseeh} alt="faseeh's picture"/>
      <div style={{marginTop:"2vh", width:"60vw", display:"flex", flexDirection:'column', justifyContent:'center', alignContent:'center', alignItems:'center'}}>
        <p style={{margin:".2em"}}>hello, i am <strong>faseeh</strong></p>
      </div>
    </Layout>
  )
}

export default IndexPage
