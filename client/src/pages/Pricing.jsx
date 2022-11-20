import React from 'react'

export default function Pricing() {
  return (
    <>
    <div className='py-3'>
      <h1 className='text-3xl text-center'> Our Pricing </h1>
    
    <div className='w-12 border-b-4 mr-auto ml-auto border-red-700 mt-3'></div>
    <p className='py-2 text-white text-center'>Call to action pricing table is really crucial to your for your business website. <br/>Make your bids stand-out with amazing options.</p>
    </div>
    
    <div className='flex  w-full h-25'>
      <div className='rounded h-auto  w-32 flex-auto  bg-white  text-center text-black border'>
          <h4 class="text-uppercase">Free</h4>
          <h6 className="text-uppercase text-muted py-2">Limited Time</h6>
          <div class="pricing-border"></div>
          <div class="plan-features mt-4">
            <p>No. of Screens: 
              <b>1</b></p>
              <p className='py-1'>Onlinespace: <b>50</b></p>
              <p>Support: <b>No</b></p>
              <p><b>1</b> Domain</p>
              <p><b>No</b> Hidden Fees</p>
              </div>
              <a class="btn  mt-4 text-bold  border-2" href="#">Joined</a>
              </div>
              
      
      <div className='rounded h-auto w-32 flex-auto bg-white text-center text-black border'>
      <h4 class="text-uppercase">Economy</h4>
        <h3> $2.50</h3>
          <h6 className="text-uppercase text-muted py-1">Monthly</h6>
          <div class="pricing-border"></div>
          <div class="plan-features ">
            <p>No. of Screens: 
              <b>1</b></p>
              <p className='py-1'>Onlinespace: <b>50</b></p>
              <p>Support: <b>No</b></p>
              <p><b>1</b> Domain</p>
              <p><b>No</b> Hidden Fees</p>
              </div>
              <a class="btn  mt-4 text-bold  border-2" href="#">Join Now</a>
              </div>
              
              
      
      <div className='rounded h-auto flex-auto w-32  bg-white text-center text-black border'>
      
      <h4 class="text-uppercase">Prime 
      Plan</h4>
          <h3> $20.50</h3>
          <h6 className="text-uppercase text-muted py-1">Annual</h6>
          <div class="pricing-border"></div>
          <div class="plan-features ">
            <p>No. of Screens: 
              <b>4</b></p>
              <p className='py-1'>Onlinespace: <b>50</b></p>
              <p>Support: <b>Yes</b></p>
              <p><b >2</b> Domain</p>
              <p><b>No</b> Hidden Fees</p>
              </div>
              <a class="btn  mt-4 text-bold  border-2" href="#">Join Now</a>
              </div>
              
      
      </div>
    </>
  )
}
