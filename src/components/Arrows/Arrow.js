import React from 'react';
import { connect } from 'react-redux';
import './LeftMenu-Item_link.css';
import {onNext, onPrev} from '../../store/actions/actions'
import {bindActionCreators} from 'redux'
function Arrow(props) {
    return (
        <div className="Arrows">
            <div className="LeftMenu-Item_type_link" onClick={props.onPrev} onPrev={props.onPrev} />
            {props.active}/{props.length}
            <div className="RightMenu-Item_type_link" onClick={props.onNext} onNext={props.onNext} />
            
        </div>
    )
}
export const mapStateToProps = (store) =>({
    active: store.active + 1,
    length: store.data.length
  })
  const mapDispatchToProps = (dispatch) => bindActionCreators({
    onPrev,
        onNext
    }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Arrow);