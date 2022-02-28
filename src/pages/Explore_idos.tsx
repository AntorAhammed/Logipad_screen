import React, { useState } from "react";
import DefaultLayout from "../layouts/default";
import eth from "../resources/images/eth.png";
import rowImg from "../resources/images/row-img.png";
import search from "../resources/images/search.png";
import classes from "../styles/homepage.module.css";

const data = [
  {
    image: rowImg,
    projectName: "KyberDyne",
    projectPrice: "price (GAC) =  0.59 BUSD",
    chain: eth,
    endIn: "0D  12H  15M  58S",
    totalRaise: "100,000 BUSD (85%)",
    progress: 70,
  } 
];

const HomePage = () => {
  const [currentPage, setCurrectPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);

  return (
    <DefaultLayout>
      <div className={classes["dashboard-body"]}>
         

        <div style={{ width: "100%", overflowX: "auto" }}>
          {/* Web */}
          <table className={classes["dashboard-body-table"]}>
            
            <tbody>
              {data.map((val) => {
                return (
                  <>
                    <tr>
                      <td>
                        <div
                          className={
                            classes["dashboard-body-table-project-name"]
                          }
                        >
                          <img src={val.image} alt="project" />
                          <div>
                            <h3>{val.projectName}</h3>
                            <p>{val.projectPrice}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <img
                          style={{ width: "30px" }}
                          alt="chain"
                          src={val.chain}
                        />
                      </td>
                      <td>{val.endIn}</td>
                      <td>{val.totalRaise}</td>
                      
                    </tr>
                    <div  className={classes["dashboard-body-table-progress"]}
                          >
                            {Array(20)
                              .fill(null)
                              .map((_val, index) => {
                                return (
                                  <div
                                    className={`${
                                      classes[
                                        "dashboard-body-table-progress-single"
                                      ]
                                    }
                                    ${
                                      index < (val.progress / 100) * 20
                                        ? classes[
                                            "dashboard-body-table-progress-single-active"
                                          ]
                                        : ""
                                    }
                                    `}
                                  ></div>
                                );
                              })}
                          </div>
                  </>
                );
              })}
            </tbody>
          </table>
          <div>

            
          </div>
        </div>

       
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
