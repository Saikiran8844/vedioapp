import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default function Home() {
        return (

            <>
            <div className='mt-2 ml-1 mr-1 rounded py-4 w-ful border-solid hover:border-dotted h-25 text-center text-bold bg-slate-50 '>
                 Banner of the top vedios 
            </div>
            <div className='text-center py-2'>Uploaded vedios </div>
            <div className=" mt-2 h-5 grid grid-cols-5 gap-1 content-center text-center">
                <div className=' bg-violet-700 rounded  '>01</div>
                <div  className=' bg-violet-700 rounded'>02</div>
                <div  className=' bg-violet-700 rounded'>03</div>
                <div  className=' bg-violet-700 rounded'>04</div>
                <div  className=' bg-violet-700 rounded '>05</div>
            </div>
            </>
        )
    
}