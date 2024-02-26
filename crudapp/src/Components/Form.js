import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Form() {

  const navigate = useNavigate();

  const [signout, setSignout] = useState(
    () => JSON.parse(localStorage.getItem("currentUser")) || []
  );

  
useEffect(()=>
{
  if(signout.length === 0)
  {
    navigate("/login") 
  }
       
}, [signout])



 
  const logout = ()=>

  {

    localStorage.removeItem("currentUser")


    navigate("/login")

  }

  const create = ()=>
  {

    navigate("/create")
  }

 const Viewall = ()=>
 {
  navigate("/View")
     
 }

  return (

    <>
    
     
         {/* <div >
         
         <ul className="flex w-full pl-72 mx-auto bg-gray-900 pb-4 pt-4 font-bold font-mono text-white fixed"> 
            
       
             <label className='ml-64' >Create an Account</label> 

         
            </ul>

            </div> 

<div>
         <ul  >

       
         <li className='pl-28'> <Link to={"/create"}> Create </Link></li>

         <li className='pl-28'> <Link to ="/View" > View All </Link></li>

</ul>

</div> */}
         <h1 className='bg-[#a5b1c2] text-white pt-4 pb-4 xs:w-full text-center font-bold'>CRUD OPERATIONS</h1>
         <button className='bg-[#a5b1c2] p-2 rounded-xl mt-4 pl-2 pr-2 ml-2 text-white' onClick={()=> logout()}> Logout </button>
         
         <div className='w-1/2 mt-12  flex justify-center mx-auto'>
         
           <div className='w-1/2 xs:w-full pb-20 flex rounded-xl  bg-[#d1d8e0] justify-center'>
             
           
         <ul  >

       
         <li> <button onClick={()=> create()} className=' rounded-xl xs:pr-6 xs:pl-6 xs:ml-3   bg-[#a5b1c2] font-semibold text-white mt-16 pr-12 pl-12 pb-1 pt-1 ' > Create </button></li>

         <li> <button onClick={()=> Viewall()} className='md:pr-9  rounded-xl xs:pr-4 xs:pl-6 xs:ml-3  bg-[#a5b1c2] font-semibold text-white mt-16 pr-12 pl-12 pb-1 pt-1'> View All</button> </li>

         

</ul>

</div> 

</div>


         
       

        

        



    
    
    
    
    
    </>
   


  )
}

export default Form

