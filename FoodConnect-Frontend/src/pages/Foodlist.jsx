import React, { useState, useEffect } from "react";
import "./Foodlist.css";
import "./Registration.css";
import axios from "axios";
import logo from "../assets/imgs/logo-f1.png";
import { useNavigate } from "react-router-dom";

const Foodlist = () => {
  const [data, setdata] = useState([]);
  const nav = useNavigate();

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

      <section className="contact-us">
        <br />
        <br />
        <center>
          <h1>
            List of <span className="red">Food</span> Donors
            <br />
            <br />
          </h1>
        </center>
        <button onClick={update}>see the list</button>

        {data.map((dat, id) => {
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
                    <h1>name:-{dat.name}</h1>
                    <h3 className="email">email:-{dat.email}</h3>
                    <h3>mobile:-{dat.no}</h3>
                    <h3>category:-{dat.category}</h3>

                    <h3 className="des">desc:-{dat.desc}</h3>
                    <button
                      onClick={() => {
                        deleteitem(dat._id);
                      }}
                    >
                      delete item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section className="contact-us receiver">
        <br />
        <br />
        <center>
          <h1>
            List of <span className="gld">Food</span> Demanding Orgs & NGOs
            <br />
            <br />
            <button onClick={() => nav("/")}>go back</button>
          </h1>
        </center>
      </section>
    </>
  );
};

export default Foodlist;
