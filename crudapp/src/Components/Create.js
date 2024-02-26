import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {

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



  const navigate = useNavigate();

  const [create, setCreate] = useState({
    productname: "",
    productprice: "",
    uplodedby: "",
  });

  const [Items, setItem] = useState(
    () => JSON.parse(localStorage.getItem("items")) || []
  );
  const [added, setAdded] = useState(false);
  const [error, setError]  = useState({});
 

  const handlechange = (e) => {
    setCreate({ ...create, [e.target.name]: e.target.value });
  };

  const add = (e) => {
    e.preventDefault();

    const validationerror = {}


    if(create.productname.trim() === '')

    {
      validationerror.name = " Product Name is required"
      setError(validationerror)
      return;
      
     
    }  

    const regex = /[A-Za-z]/;
    
    if(!regex.test(create.productname))  
    {
         validationerror.name = "Product Name is not valid"
         setError(validationerror)
         return;
         
    }


    if(create.productprice.trim() === '')

    {
      validationerror.price = "Price is required"
      setError(validationerror)
      return;
      
     
    }  
    const re = /^[0-9\b]+$/;

    if(!re.test(create.productprice))

     {

      validationerror.price = "Please enter correct price"
      setError(validationerror)
      return;

     }

     if(create.uplodedby.trim() === '')

    {
      validationerror.uploded = "Name is required"
      setError(validationerror)
      return;
    
    }  

    if(create.uplodedby.length < 4)
       {

        validationerror.uploded = " Please enter a full name "
        setError(validationerror)
        return;
            
       }

       if(/[!@#$%^&*(),.?":{}|<>]/g.test(create.uplodedby) || !/^[A-Z]/.test(create.uplodedby) || /\d+/g.test(create.uplodedby))
       {
            validationerror.uploded = "Name is not in valid form"
            setError(validationerror)
            return;
            
       }



    setItem([...Items, { ...create, id: Math.random() }]);
    setAdded(true);

    setCreate({ productname: "", productprice: "", uplodedby: "" });
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(Items));
    if (added) {
      navigate("/View");
    }
  }, [Items]);

  const Back = () => {
    navigate("/home");
  };

  return (
    <div>
      <h1 className="bg-[#a5b1c2] text-white pt-4 pb-4 text-center font-bold xs:w-full">
        Enter a product details
      </h1>

      <button
        onClick={() => Back()}
        className=" text-white bg-[#a5b1c2] rounded-md pl-4 pr-4 pt-2 pb-2 mt-4 ml-4"
      >
        Back
      </button>

      <form onSubmit={add}>
        <div className="flex flex-col items-center mt-8">
          <input
            type="text"
            name="productname"
            placeholder="Enter a product Name"
            value={create.productname}
            onChange={(e) => handlechange(e)}
            className="pl-14 pr-14 bg-gray-200 mt-4 pt-1 pb-1 rounded-xl xs:pl-2 xs:pr-2  "
          />
           {error.name && <label className='text-red-500 text-xs'>{error.name}</label>}

          <input
            type="text"
            name="productprice"
            placeholder="Enter a Product price"
            value={create.productprice}
            onChange={(e) => handlechange(e)}
            className="pl-14 pr-14 bg-gray-200 mt-8 pt-1 pb-1 rounded-xl xs:pl-2 xs:pr-2 "
          />
          {error.price && <label className='text-red-500 text-xs '>{error.price}</label>}

          <input
            type="text"
            
            name="uplodedby"
            placeholder="Uploaded By "
            value={create.uplodedby}
            onChange={(e) => handlechange(e)}
            className="pl-14 pr-14 bg-gray-200 mt-8 pt-1 pb-1 rounded-xl xs:pl-2 xs:pr-2 "
          />
          {error.uploded && <label className='text-red-500 text-xs'> {error.uploded} </label> }

          <button
            type="submit"
            className="pl-10 pr-10 pb-1 pt-1 mt-10 text-white rounded-xl bg-[#a5b1c2]"
          >
            {" "}
            Submit{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
