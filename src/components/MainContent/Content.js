import React from 'react';
import "./Content.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {extractIconPairArray} from '../../Helpers';

function Content(props){

  console.log(props.data);
    return (
      <div><div className="Content">
        <span><FontAwesomeIcon icon={props.data.icon && extractIconPairArray(props.data.icon)} /></span><h3> {props.data.title} </h3>
        
      </div>
      <div className="progressBar"></div>
      </div>
    );
  }

export default Content;
{/* <span><FontAwesomeIcon icon={extractIconPairArray(props.data.icon)} /></span> */}