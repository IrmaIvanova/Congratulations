import React from 'react';
import "./Actions.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {extractIconPairArray} from '../../Helpers';
function Actions (props) {
   
        return (
            <div className="Actions">
                {props.data.map((item, key) =>
                <div><FontAwesomeIcon icon={extractIconPairArray(item.icon)}/> {item.title} </div>
                )}
               
            </div>
    );

}

export default Actions;

