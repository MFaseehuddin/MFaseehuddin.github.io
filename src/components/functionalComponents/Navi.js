import React, { useState } from 'react'
import "./Navi.css"

function Navi({siteTitle, buttonContent , theme, children}) {   
    const[buttonState, setButtonState] = useState(false);
    
    const toggleButtonState=()=>{
        setButtonState(!buttonState);
    }


    return (
        <div className="LayoutContent" style={{
            backgroundColor:theme.primaryColor,
            height:"100vh",
            width:"100vw",
            overflow:"none"
        }}>
            <nav className="Navi" style={{
                backgroundColor:theme.primaryColor,
                userSelect:"none"
            }}>
                <ul style={{
                    fontWeight:"300",
                    padding:"2vh 15vw",
                    margin:0,
                    display:"flex",
                    alignContent: "center",
                    justifyContent: theme.isSmall ? "center" : "space-between",
                    listStyleType:"none",
                    fontSize: "1rem",
                    boxShadow: "0px -4px 16px rgba(0, 0, 0, 0.25)",
                }}>
                    <li id="siteTitle" style={{
                        alignSelf:"center",
                        color:theme.secondaryColor
                    }}>{siteTitle}</li>
                    {!theme.isSmall && 
                        <li id="Button" className="button" style={{
                            backgroundColor: buttonState? theme.primaryColor:theme.secondaryColor,
                            color: buttonState? theme.secondaryColor:theme.primaryColor,
                            padding: "0.25rem 0.75rem",
                            borderRadius: "1rem",
                            cursor:"pointer"        
                        }}
                        onTouchStart={toggleButtonState}
                        onTouchEnd={toggleButtonState}
                        onMouseEnter={toggleButtonState}
                        onMouseLeave={toggleButtonState}
                        >{buttonContent}</li>
                    }
                    {
                        theme.isSmall && 
                        <li id="Button" className="button"
                            style={{
                                position:"absolute",
                                backgroundColor: buttonState? theme.primaryColor:theme.secondaryColor,
                                color: buttonState? theme.secondaryColor:theme.primaryColor,
                                height:"6vh",
                                width:"40vw",
                                borderRadius:"2em",
                                display:"flex",
                                justifyContent:"center",
                                alignContent:"center",
                                alignItems:"center",
                                bottom:0,
                                margin:"1em"
                            }}
                        onTouchStart={toggleButtonState}
                        onTouchEnd={toggleButtonState}
                        >{buttonContent}</li>
                    }
                </ul>
            </nav>
            {children}
        </div>
    )
}


export default Navi;