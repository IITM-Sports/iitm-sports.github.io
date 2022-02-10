import React from 'react';
import './Modal.css';

const Modal = ({ name, data, setModal }) => {
    const sport = data.filter((d) => d.name === name)[0].schedule;
    const cols = Object.keys(sport[0]);
    console.log(sport);
    return (
        <div className="modal-bg">
            <div className="modal-card">
                <button id="close-btn" onClick={()=>{setModal("")}}></button>
                <h1 className='headin'>{name}</h1>
                <table>
                    <thead>
                        <tr>
                            {cols.map((c) => {
                                return <th>{c}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {sport.map((d,index) =>{
                            return (<tr key={index}>
                                {cols.map((c,ind) =>{
                                    return <td key={ind}>{d[c]}</td>
                                })}
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Modal;
