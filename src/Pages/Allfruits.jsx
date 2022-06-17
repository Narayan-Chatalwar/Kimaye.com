import React from 'react';
import { useEffect,useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const Allfruits = () => {
    const [allfruitsdata, setallfruitsdata] = useState([]);
    const navigate = useNavigate();

    

     useEffect(() => {
        
        axios
            .get("http://localhost:8080/allfruits")
            .then((res) => (res.data))
            .then((data) => setallfruitsdata(data))


    }, [allfruitsdata]);
       
    

  return (
    <div style={{ marginTop: "100px" }}>
      <div>
        <div
          className="Link"
          style={{
            display: "flex",
            //   border: "1px solid",
            width: "fit-content",
            gap: "20px",
            margin: "auto",
            marginTop: "25px",
          }}
        >
          <p
            style={{ textDecoration: "underline" }}
            onClick={() => navigate("all-fruits")}
          >
            ALL FRUITS
          </p>
          <p onClick={() => navigate("freshcuts")}> FRESH CUTS</p>
          <p onClick={() => navigate("fruitcombos")}>
            {" "}
            FRUIT COMBOS
          </p>
          <p onClick={() => navigate("giftsbykimaye")}>
            GIFTS BY KIMAYE
          </p>
        </div>
        <div className="MapBox">
          {allfruitsdata.map((el, idx) => (
            <div
            
              
            >
              <img
                className="Img"
                style={{ width: "100%", borderRadius: "30px", height: "80%" }}
                src={el.image}
                alt="broken"
              />
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                 
                  marginTop: "15px",
                }}
              >
                {el.title}
              </h1>
              <h3
                style={{
                  textAlign: "center",
                  color: "brown",
                  fontSize: "25px",
                  marginTop: "10px",
                }}
              >
                ₹{el.price}
              </h3>
            </div>
          ))}
        </div>
        {/* <div
          className="Link"
          style={{
            display: "flex",
           
            width: "fit-content",
            gap: "20px",
            margin: "auto",
            marginTop: "25px",
            marginBottom: "30px",
          }}
        >
          <p
            style={{ textDecoration: "underline" }}
            onClick={() => navigate("/collections/all-fruits")}
          >
            ALL FRUITS
          </p>
          <p onClick={() => navigate("/collections/fresh-cuts")}> FRESH CUTS</p>
          <p onClick={() => navigate("/collections/fruit-combos")}>
            {" "}
            FRUIT COMBOS
          </p>
          <p onClick={() => navigate("/collections/gifts-by-kimaye")}>
            GIFTS BY KIMAYE
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Allfruits;
