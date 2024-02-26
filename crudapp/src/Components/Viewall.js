import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Viewall() {

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



  const [Records, setRecords] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    let info = localStorage.getItem("items");

    const record = JSON.parse(info);

    setRecords(record);
  }, []);

  const del = (id) => {
    const newItem = Records.filter((item) => !(item?.id === id));
    setRecords(newItem);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(Records));
  }, [Records]);

  const Back = () => {
    navigate("/create");
  };

  return (
    <div>
      <h1 className="bg-[#a5b1c2] text-white pt-4 pb-4 text-center font-bold">
        All Records
      </h1>

      <button
        onClick={() => Back()}
        className=" text-white bg-[#a5b1c2] rounded-md pl-4 pr-4 pt-2 pb-2 mt-4 ml-4"
      >
        Back
      </button>

      {/* <button onClick={viewallrocords} className='mt-4 font-medium pt-1 pb-1 text-white bg-gray-900 rounded-md pl-4 pr-4'>View All </button> */}

      <div className="  mt-4   ">
        <table className="w-full  bg-[#f1f2f6] ">
          <thead>
            <tr>
              <th className=" pt-8 font-bold pb-3 xs:w-1/3 xs:p-1">Product Name</th>
              <th className=" pt-8 font-bold pb-3 xs:w-1/3 xs:p-1 ">Product Price </th>
              <th className=" pt-8 font-bold pb-3 xs:w-1/3 xs:p-1"> Uploaded By</th>
              <th className="pt-8 pb-3 xs:w-1/3 xs:p-1"> Edit and Delete </th>
            </tr>
          </thead>

          {Records.map((item) => (
            <tbody className="mt-10 text-center">
              <tr>
                <td>{item.productname}</td>
                <td className="">{item.productprice}</td>
                <td>{item.uplodedby}</td>

                <td>
                  <button onClick={(e) => del(item.id)}>
                    <MdDelete />
                  </button>{" "}
                  <button>
                    <Link to={`/update/${item.id}`}>
                      {" "}
                      <MdEdit />{" "}
                    </Link>{" "}
                  </button>
                </td>

                <br />
                <br />
                <br />
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Viewall;
