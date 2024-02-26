import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Update() {


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



  const { id } = useParams();

  const navigate = useNavigate();

  const [value, setValue] = useState({
    id: id,
    namep: "",
    price: "",
    uploded: "",
  });

  const [Items, setItems] = useState(JSON.parse(localStorage.getItem("items")));

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("items"));

    setItems(result);

    result.map((item) => {
      if (item.id == id) {
        setValue({
          namep: item.productname,
          price: item.productprice,
          uploded: item.uplodedby,
        });
      }
    });
  }, []);

  const handlechange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const add = (e) => {
    e.preventDefault();

    let updatedItems = Items.map((item) => {
      if (item.id == id) {
        return {
          ...item,
          productname: value.namep,
          productprice: value.price,
          uploadedby: value.uploded,
        };
      } else return item;
    });

    setItems(updatedItems);
    setValue({ namep: "", price: "", uploded: "" });

    navigate("/View");
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(Items));
  }, [Items]);

  // const Back = () => {

  //     navigate("/View")

  //   }

  return (
    <div>
      <h1 className="bg-[#a5b1c2] text-white pt-4 pb-4 text-center font-bold">
        Update the product details
      </h1>

      <form onSubmit={add}>
        <div className="flex flex-col items-center mt-8">
          <input
            type="text"
            required
            name="namep"
            placeholder="enter product name"
            value={value.namep}
            onChange={(e) => handlechange(e)}
            className="pl-14 pr-14 bg-gray-200 mt-4 pt-1 pb-1 rounded"
          />

          <input
            type="text"
            required
            name="price"
            placeholder="enter product name"
            value={value.price}
            onChange={(e) => handlechange(e)}
            className="pl-14 pr-14 bg-gray-200 mt-8 pt-1 pb-1 rounded"
          />

          <input
            type="text"
            required
            name="uploded"
            placeholder="enter product name"
            value={value.uploded}
            onChange={(e) => handlechange(e)}
            className="pl-14 pr-14 bg-gray-200 mt-8 pt-1 pb-1 rounded"
          />

          <button
            type="submit"
            className="bg-[#a5b1c2] pl-10 pr-10 pb-1 pt-1 mt-10 text-white rounded"
          >
            {" "}
            Submit{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Update;
