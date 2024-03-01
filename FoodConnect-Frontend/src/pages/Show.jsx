import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Show() {
  const [data, setdata] = useState([]);

  const update = () => {
    axios
      .get("https://foodfill.onrender.com/api")
      .then((res) => {
        console.log(res);
        const dat = res.data;
        console.log(dat);
        setdata([...dat]);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteitem = async (id) => {
    await axios.delete(`https://foodfill.onrender.com/api/${id}`).then((res) => {
      const dat = res.data;
      console.log(dat);
      alert("deleted the data");
      setdata([dat]);
    });
  };

  return (
    <>
      <div>
        <button onClick={update}>to get data</button>

        {data.map((dat, id) => {
          return (
            <div>
              <h3>{id + 1}</h3>
              <h1>username :{dat.name} </h1>
              <h2>email : {dat.emial}</h2>
              <h2>no : {dat.no}</h2>
              <h2>category : {dat.category}</h2>
              <button
                onClick={() => {
                  deleteitem(dat._id);
                }}
              >
                delete{" "}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Show;
