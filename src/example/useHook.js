import React from 'react'
import useBodyScrollPosition from './positionEffect'

export default function Test (){

const position= useBodyScrollPosition()

    return (
        <>
        <h1 style={{position:"fixed"}}>
        {position}
        </h1>
        <div style={{height:'1000px'}}></div>
        </>
    )
}