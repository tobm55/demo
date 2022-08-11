import React, { useRef, useEffect,useState } from "react";
import { useSelector } from "react-redux";
import "./Filter.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SimpleTable from "./Simpletable";
import SimpleTableTopFemale from "./SimpleTableTopFemale";
import SimpleTableTopMale from "./SimpleTableTopMale";
import SimpleTableCharacter from "./SimpleTableCharacter";



const Pageone = () => {
    //const appDispatchAction = useAppDispatch();
  
    //const { filterKey, filteredOccurrences, occurrenceHighlightColor } =
      //useSelector((store: RootStoreI) => store.filterReducer);
      const [datum, setData] = useState(null)
  const data = {story : {characters : { female : {n : 2}, male : {n:4}}}}
  useEffect(() => {
    fetch("http://127.0.0.1:5000/result").then(
      res => res.json()
    ).then(
      datum => {
        setData(datum)
        console.log(datum)
      }
    )
    
  }, []);
      const genderType = ['female', 'male']
  
    return (
        
        <Container>{datum &&
          <>
  <Row>
    <Col>
    <SimpleTable  data={datum}/>
    </Col>
    <Col>
    <SimpleTableCharacter  data={datum}/>
    </Col>
    </Row>
    <Row>
    <Col>
    <SimpleTableTopFemale data={datum}/>
    </Col>
    <Col>
    <SimpleTableTopMale data={datum}/>
    </Col>
    
  </Row>
       </> }</Container>
      
      
      
    );
  };
  
  export default Pageone;