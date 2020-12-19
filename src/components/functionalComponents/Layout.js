import React from 'react'
import Navi from './Navi'
export default function Layout({theme, children, childrenStyle}) {
    return (
        <div className="mainSite">
            {/* nav */}
            <Navi siteTitle="mfaseehuddin.github.io" buttonContent="contact me" theme={theme}>
                <div className="siteContent" style={childrenStyle}>
                    {children}
                </div>
            </Navi>    
            {/* bottom contact */}

        </div>
    )
}
