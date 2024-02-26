import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Signupform() {

  const navigate = useNavigate();
  
  
  const signup = ()=> 
  {
     
    navigate("/signup")
       
  }

  const alreadyaccount = ()=> 
  {
     
    navigate("/login")
       
  }

  return (
    <>

{/* <h1 className='bg-[#a5b1c2] text-white pt-4 pb-4 text-center font-bold'></h1> */}

         
<div className='bg-white '>
  
<div className='bg-[#c8d6e5] lg:mt-28 xl:mt-48 lg:w-[30%] xl:w-[40%] md:mt-20 md:w-[40%]    sm:w-[75%] sm:h-[40%]  sm:mt-52 xs:mt-32 xs:w-[75%] w-1/3 xs:h-[100%] pb-32  mx-auto  rounded'>

  <h1 className='bg-[#8395a7] sm:pt-3 sm:pb-4 sm:text-xl   text-center rounded text-white font-bold pt-2 pb-2'>Sign up here ...</h1>

<div className='flex flex-col sm:text-xl text-white font-semibold mt-24'>

 <button className='border xs:pr-2 xs:pl-2  mx-auto pl-8 pr-8 pt-1 pb-2 rounded bg-[#8395a7]' onClick={()=>signup()}> Signup</button>

 <button className='mt-8 font-normal mx-auto  'onClick={()=> alreadyaccount()} >Already have an account ? </button> 

 </div>

</div> 



    </div>
    </>
  )
}

export default Signupform