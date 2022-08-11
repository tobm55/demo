import React, { useRef, useEffect,useState } from "react";
import { useSelector } from "react-redux";

import "./App.scss";

import { ChartComp } from "./Components/ChartComp";
import  Pageone  from "./Components/Pageone";
import GenderCharacter from "./Components/GenderCharacter";
import ReactiveParagraph from "./Components/ReactiveParagraph";
import ReactiveGraph from "./Components/ReactiveGraph";
import RawData from "./Components/RawData";
import Filter from "./Components/Filter";
import StoryInput from "./Components/StoryInput";
import ClickOption from "./Components/ClickOption";
import {
  ReportSectionLabel,
  ReportDivider,
  ReportBackToTop,
} from "./Components/Utility";

import { RootStoreI } from "./Store";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const { sourced } = useSelector((store: RootStoreI) => store.dataReducer);
  const scrollDestination = useRef<null | HTMLDivElement>(null);
  const [data, setData] = useState({})

  useEffect(() => {
   // fetch("http://127.0.0.1:5000/result").then(
     // res => res.json()
    //).then(
     // data => {
      //  setData(data)
      //  console.log(data)
     // }
   // )
    if (sourced) {
      scrollDestination.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [sourced]);

  return (
    <Router>
    <div className="app">
      <StoryInput></StoryInput>
      {sourced && (
        <div ref={scrollDestination} className="report--content">
          <ReportSectionLabel text="Filter" />
          <Filter></Filter>
          <ReportDivider />
          <ChartComp/>
          <ReportDivider />
          <GenderCharacter/>
          <ReportDivider/>
          <ReportSectionLabel text="Story" />
          <ReactiveParagraph></ReactiveParagraph>
          <ReportDivider />

          <ReportSectionLabel text="Graph" />
          <ReactiveGraph></ReactiveGraph>
          <ReportDivider />

          <ReportSectionLabel text="Raw Data" />
          <RawData></RawData>
          <ReportBackToTop></ReportBackToTop>
          <Switch>
            <Route path="/test">
              <Pageone/>
            </Route>
          </Switch>
        </div>
      )}
    </div>
    </Router>
  );
}

export default App;
