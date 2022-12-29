import React, {useState} from "react";
import './Dialouge.styles.scss'

const Dialouge = ({text, onClick, i}) => {
    const [noClicked, setNoClicked]= useState(false);
    const [topOffset, setTopOffset] = useState(70);
    const noHandler = () => {
        setNoClicked(true);
        var offset= Math.floor(Math.random()*60)+10;
        setTopOffset(offset);
    }

  return(
    <div className="main-box">
        {i==5 ? (
            <div className="query-box">
                <p className= "query-text blue">Yay!!!!!!</p>
                <p className="query-text blue">I am sure we will have a great time together &lt;3</p>
            </div>
        ) : (
            <div 
            style={{
                position: noClicked ? 'absolute' : '',
                top: `${topOffset}%`
            }} 
            className="query-box">
                <p className="query-text">{text}</p>
                <div className="btn-box">
                    <button className="btn" onClick={onClick}>YES</button>
                    <button className="btn yellow" onClick={noHandler}>NO</button>
                </div>
            </div>
        )}
    </div>
  ); 
};

export default Dialouge;