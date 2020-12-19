import React from 'react'

export default function Texter({text, style}) {
    return (
        <p style={{margin:"0.2em", textAlign:'center', ...style}}>
            {text}
        </p>
    )
}
