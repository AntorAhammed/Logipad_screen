import React, { useState } from "react";
import DefaultLayout from "../layouts/default";
import eth from "../resources/images/eth.png";
import rowImg from "../resources/images/row-img.png"; 
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
  },
];


const Farming= () => {
  const [currentPage, setCurrectPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);

  return (
    <DefaultLayout>
      <div className={classes["dashboard-body"]}>
        <div className={classes["dashboard-body-phone-heading-title"]}>
          <h1>
            Explore <br /> Igos
          </h1>
        </div>

        <div className={classes["dashboard-body-filter"]}>
          <div className={classes["dashboard-body-filter-radio"]}>
            <input type="radio" name="filter" id="openigo" />
            <label htmlFor="openigo">ACTIVE </label>
          </div>
          <div className={classes["dashboard-body-filter-radio"]}>
            <input type="radio" name="filter" id="upcomingigo" />
            <label htmlFor="upcomingigo">INACTIVE</label>
          </div>
          <div className={classes["dashboard-body-filter-radio"]}>
            <input type="radio" name="filter" id="pastigo" />
            <label htmlFor="pastigo">STAKED ONLY</label>
          </div>
        </div>

        <div className={classes["dashboard-body-header"]}>
           

          <div className={classes["dashboard-body-table-project-ul"]}>
              <div/>
              
              <ul>
                  <li>POOLS</li>
                  <li>APY </li>
                  <li>STAKED</li>
                  <li>EARNED</li>
                  <li>TOTAL VALUE LOCKED</li>
              </ul>
            <div className={classes["dashboard-body-header-selects-divider"]}
            >
                
            </div>
            
          </div>
        </div>

        
        <div className={classes["dashboard-body-cards"]}>
          {data.map((val, index) => {
            return (
              <div key={index} className={classes["dashboard-body-card"]}>
                <div>
                  <div className={classes["dashboard-body-table-project-name"]}>
                    <img src={val.image} alt="project" />
                    <div>
                      <h3>TRX-BNB/TRX</h3>
                      <p>{val.projectPrice}</p>
                    </div>
                    <img
                      style={{ width: "30px" }}
                      alt="chain"
                      src={val.chain}
                    />
                  </div>
                </div>

                <div>
                  <div className={classes["dashboard-body-card-header"]}>
                    6783    
                  </div>
                  {val.endIn}
                </div>

                <div>
                  <div className={classes["dashboard-body-card-header"]}>
                    Total Raise
                  </div>
                  {val.totalRaise}
                </div>

                <div>
                  <div className={classes["dashboard-body-card-header"]}>
                    Progress
                  </div>
                  <div
                    className={
                      classes["dashboard-body-table-progress-container"]
                    }
                  >
                    <div className={classes["dashboard-body-table-progress"]}>
                      {Array(20)
                        .fill(null)
                        .map((_val, index) => {
                          return (
                            <div
                              className={`${
                                classes["dashboard-body-table-progress-single"]
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
                    {val.progress + "%"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ width: "100%", overflowX: "auto" }}>
          {/* Web */}
          <table className={classes["dashboard-body-table"]}>
            <thead>
              <th>TRX-BNB/TRX</th>
              <th>89.89%</th>
              <th>436.3 BNB</th>
              <th>8848.3 BNB</th>
              <th>$34724285</th>
            </thead>
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
                           
                          <div>
                            <h3>Deposit</h3>
                            <input type="text"/>
                            <p>Your Balance is 150 BNB</p>
                          </div>
                        </div>
                      </td>
                      <td>
                         
                      </td>
                      <td> 
                      <div
                          className={
                            classes["dashboard-body-table-project-name"]
                          }
                        >
                           
                          <div>
                            <h3>Widthdraw</h3>
                            <input type="text"/>
                            <p>Deposit  is 150.50 BNB</p>
                          </div>
                        </div>
                      </td>
                      
                      <td>
                      <div
                          className={
                            classes["dashboard-body-table-project-name"]
                          }
                        >
                           
                          <div>
                               <h3>Pending Reward</h3>
                                <p>Your Balance is 150 BNB</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={classes["dashboard-body-table-project-ul"]}>
              <div/>
              
              <table className={classes["dashboard-body-table"]}>
                  <tr>
                   <td>MFT-AVAX / MFT</td>
                   <td>112.5% </td>
                   <td>50.09 AVAX </td>
                   <td>4.99 AVAX</td>
                   <td>$944893.50</td>
                  </tr>
              </table>
               
            <div className={classes["dashboard-body-header-selects-divider"]}
            >
                
            </div>
            <table className={classes["dashboard-body-table"]}>
                  <tr>
                   <td>BEST-DOT /BEST</td>
                   <td>112.5% </td>
                   <td>50.09 AVAX </td>
                   <td>4.99 AVAX</td>
                   <td>$944893.50</td>
                  </tr>
              </table>
            
          </div>
          
  
      </div>
    </DefaultLayout>
  );
};

export default Farming;
