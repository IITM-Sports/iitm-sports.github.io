import React  from 'react';
import './Schedule.css';
import Modal from './Modal'
const Schedule = ({data}) => {
  const [modal, setModal] = React.useState("");
  return (
    <div className="app-container">
      {modal!=="" && <Modal name={modal} data={data} setModal={setModal}/>}
      {data.map((sport)=>{
        return (
        <div key={sport.name}>
          <button className="sport-button" onClick={()=>setModal(sport.name)}>{sport.name}</button>
        </div>)
      })}
    </div>
  );
};

export default Schedule;
