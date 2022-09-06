import React from "react";
import { useState, useEffect } from "react";

const Task =  () => {
  const [info, setInfo] = useState([]);
  
  //METHOD 1
  // useEffect(() => {
  //   const api = "https://covidnigeria.herokuapp.com/api";
  //   fetch(api)
  //     .then((response) => response.json())
  //     .then((actualdata) => setInfo(actualdata.data))
  //     .catch((error) => {
  //       console.log("Error", error.message);
  //     });
  // }, []);

  //Method 2
  const getPost = async () => {
    const url = "https://covidnigeria.herokuapp.com/api";
      const response = await fetch(url);
      const data = await response.json();
      setInfo(data.data);
  }
  useEffect(() => {
    getPost();
  }, [])

  return (
    <>
      {info && Object.keys
      (info).length > 0 ? (
        <div className="wrapper">
          <h2 className="title">Covid Report in Nigeria 2020</h2>
          <section className="total_div">
            <div className="total total_death">
              <p className="total_header">Total Sample Tested</p>
              <p className="total_num">{info.totalSamplesTested}</p>
            </div>
            <div className="total total_discharge">
              <p className="total_header">Total Confirmed Cases</p>
              <p className="total_num">{info.totalConfirmedCases}</p>
            </div>
            <div className="total total_active_cases">
              <p className="total_header">Total Active Cases</p>
              <p className="total_num">{info.totalActiveCases}</p>
            </div>
            <div className="total total_confirm_cases">
              <p className="total_header">Total Number Discharged</p>
              <p className="total_num">{info.discharged}</p>
            </div>
            <div className="total total_sample_tested">
              <p className="total_header">Total Number of Death</p>
              <p className="total_num">{info.death}</p>
            </div>
          </section>
          <section className="state_data">
            <table className="row">
              <thead>
                <tr className="table_row data">
                  <th className="data">State</th>
                  <th className="data">Confirmed Cases</th>
                  <th className="data">Cases On Admission</th>
                  <th className="data">Discharged</th>
                  <th className="data">Death</th>
                </tr>
              </thead>

              {info.states.map((data) => {
                return (
                  <tbody key={data._id}>
                    <tr className="state_data data">
                      <td className="data">{data.state}</td>
                      <td className="data">{data.confirmedCases}</td>
                      <td className="data">{data.casesOnAdmission}</td>
                      <td className="data">{data.discharged}</td>
                      <td className="data">{data.death}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </section>
        </div>
      ) : null}
    </>
  );
};

export default Task;

