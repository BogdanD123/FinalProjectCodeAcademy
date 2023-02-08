import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";
import "./GithubProjects.css";
import "../../index.css";
function GithubProjects() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleData = async () => {
    try {
      const res = await axios
        .get("https://run.mocky.io/v3/e9e59917-53a3-48d2-9e45-0f568b143394")
        .then((res) => {
          setData(res.data);
          setLoading(true);
        });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleData();
  }, []);

  return (
    <section id="githubprojects" className="githubContainer contents">
      <h2 className="githubTitle">My Github</h2>
      <div className="cards">
        {loading ? (
          data.map((item, index) => {
            return (
              <div className="singleCard" key={index}>
                <Card item={item} />
              </div>
            );
          })
        ) : (
          <div className="loader">Loading</div>
        )}
      </div>
    </section>
  );
}

export default GithubProjects;
