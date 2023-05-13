import React from 'react'


function Hamburger({ham,setHam}) {
    return (
        <div onClick={() => {
            setHam((prev) => !prev)
        }} className='hidden flex-col items-end gap-y-2 cursor-pointer   768:flex'>
            <div style={ham ? {transform:'rotate(45deg) translate(8px,8px)'} : {}} className='w-[40px] h-[2px] bg-white  duration-300'></div>
            <div style={ham ? {transform:'rotate(-45deg)'} : {}} className='w-[40px] h-[2px] bg-white  duration-300'></div>
            <div style={ham ? {transform:'translateX(20px)' , opacity:'0'} : {}} className='w-[40px] h-[2px] bg-white  duration-300'></div>
        </div>
    )
}

export default Hamburger
