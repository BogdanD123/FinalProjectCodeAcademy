import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./GithubProjects.css";
import "../../index.css";
function GithubProjects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/e9e59917-53a3-48d2-9e45-0f568b143394")
      .then((request) => request.json())
      .then((response) => setData(response));
  }, []);

  return (
    <>
      <section id="githubprojects" className="githubContainer contents">
        <h2 className="githubTitle">My Github:</h2>
        <div className="cards">
          {data &&
            data.map((item, index) => {
              return (
                <div className="singleCard" key={index}>
                  <Card item={item} />
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}

export default GithubProjects;
