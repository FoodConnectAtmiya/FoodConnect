import React, { useState, useEffect } from "react";
import "./Foodlist.css";
import "./Registration.css";
import axios from "axios";


import logo from "../assets/imgs/logo-f1.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nearbyDonorsAsync, nearbyOrganizationAsync, selectNearBy } from "../ReduxAPIs/mainSlice";
const Foodlist = () => {
  const dispatch = useDispatch();
  useEffect(() =>{
    if(localStorage.getItem("loggedInOrganization")){
      const pinCode = 360007;
      // const data = (localStorage.getItem("loggedInOrganization"));
      dispatch(nearbyDonorsAsync(pinCode));
    }
    else{
      
      dispatch(nearbyOrganizationAsync(data.dt.pinCode))
    }
    
  },[])

  
  const [data, setdata] = useState(null);
  const nav = useNavigate();
  // const nearBy = useSelector(selectNearBy);
  const deleteitem = async (id) => {
    await axios.delete(`https://foodfill.onrender.com/api/${id}`).then((res) => {
      const dat = res.data;
      console.log(dat);
      alert("deleted the data");
      setdata([dat]);
      nav("/");
    });
  };

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
  const nearBy = useSelector(selectNearBy);
  useEffect(()=>{
    // console.log(nearBy);
    setdata(nearBy);  
  },[nearBy])
  return (
    <>
      <section className="sub-header">
        {/* <div className="home-ico">
          <a href="index.html">
            <i className="fa fa-home"></i>
          </a>
        </div> */}
        <nav>
          <a href="index.html" className="flx">
            <i>
              <img src={logo} height="70px" alt="" />
            </i>
          </a>
        </nav>

        <h1>List Of Helping Hands Around The Nation</h1>
      </section>

      {localStorage.getItem("loggedInOrganization") &&<section className="contact-us">
        <br />
        <br />
        <center>
          <h1>
            List of <span className="red">Food</span> Donors
            <br />
            <br />
          </h1>
        </center>
        {/* <button onClick={update}>see the list</button> */}

        {data && data.map((dat, id) => {
          return (
            <div className="row connn">
              <div className="col">
                <div className="card">
                  <div className="dp">
                    <center>
                      <img src={"${src}"} alt="" />
                    </center>
                  </div>
                  <div className="info">
                    <h1 className="text-center">{dat.name}</h1>
                    <h3 className="email">email:-{dat.email}</h3>
                    <h3>mobile:-{dat.phone}</h3>
                    <h3>Address : {dat.address}</h3>
                    <h3>pinCode: {dat.pinCode}</h3>
                    {/* <h3>category:-{dat.category}</h3> */}

                    {/* <h3 className="des">desc:-{dat.desc}</h3> */}
                    {/* <button
                      onClick={() => {
                        deleteitem(dat._id);
                      }}
                    >
                      delete item
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>}
      {localStorage.getItem("loggedInDonor") &&<section className="contact-us receiver">
        <br />
        <br />
        <center>
          <h1>
            List of <span className="gld">Food</span> Demanding Orgs & NGOs
            <br />
            <br />
            <button onClick={() => nav("/")}>go back</button>
            {data && data.map((p)=>{
              return <div style={{border:'2px solid red',padding:"10px"}}>
                <p>Name: {p.name}</p>
                <p>Address: {p.address}</p>
                <p>City: {p.city}</p>
                <p>pinCode: {p.pinCode}</p>
                <p>phone: {p.phone}</p>
                <button>Send Message</button>
              </div>
            })}
          </h1>
        </center>
      </section>}
    </>
  );
};

export default Foodlist;
