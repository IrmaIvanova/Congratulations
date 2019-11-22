import React, { useEffect } from 'react';
import {bindActionCreators} from 'redux';
import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/MainContent/Content";
import Actions from "./components/Actions/Actions";
// import data from './data.json';
import Rewards from "./components/MainContent/Rewards";
import {connect} from 'react-redux';
import dataList from './store/thunk';
function App({active, data, dataList}) {
  useEffect(()=> {
    dataList()
  }, [])
  if(data.length === 0) return (<div>no data</div>)
  return (
    <div className="App">
      <div className="Inner">
      <Header 
      length={data.length}/>
      
      <div className="ContentBox">
        <Content 
        data = { data[active] }
      />
      <Rewards 
       data = { data[active].rewards }  />
       </div>
      <Actions
        data = { data[active].actions }
      />
      </div>


    </div>
  );
}

const mapStateToProps = (store) =>({
  active: store.active,
  data: store.data
})
const mapDispatchToProps = (dispatch) => bindActionCreators({
dataList
}, dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(App);

