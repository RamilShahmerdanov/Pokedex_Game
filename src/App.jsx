// import { useState } from "react";

import Header from "./Components/header/Header";
import Team1 from "./Components/team1/Team1";
import datadef from "../src/Components/data/data.json";

import "./App.css";
import { useState } from "react";

function App() {
  console.log("datadef", datadef);
  const [data1, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [show, setShow] = useState(false);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  let mydata = [...datadef];
  console.log("mydata", mydata);
  let team1 = [];
  let team2 = [];
  function getdata() {
    setShow(true);
    for (let i = 0; i < datadef.length / 2; i++) {
      let randomindex = Math.floor(Math.random() * mydata.length);
      console.log("randomindex", randomindex);
      team1.push(mydata.splice(randomindex, 1)[0]);
      console.log("team1", team1);
      randomindex = Math.floor(Math.random() * mydata.length);
      team2.push(mydata.splice(randomindex, 1)[0]);
      console.log("team2", team2);
    }
    setData(team1);
    setData2(team2);
    const sum1 = team1.reduce((sum, item) => sum + item.base_experience, 0);
    const sum2 = team2.reduce((sum, item) => sum + item.base_experience, 0);
    console.log("sum1", sum1);
    console.log("sum2", sum2);

    setScore1(sum1);
    setScore2(sum2);
  }

  return (
    <>
      <Header onClick={getdata} />
      {show && (
        <div>
          <Team1 team={data1} score={score1} title={score1>score2 ? "Winner" :"Lose"} />
          <div className="vs">VS</div>
          <Team1 team={data2} score={score2} title={score2>score1 ? "Winner" :"Lose"}/>
        </div>
      )}
    </>
  );
}

export default App;
