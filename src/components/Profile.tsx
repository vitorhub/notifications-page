import * as React from 'react';
import { useState } from 'react'
import dados from '../data/db.json'
import './Profile.css'

export default function Profile() {
    const [numberReaded, setNumberReaded] = useState(7);
    const [salva, setSalva] = useState("")
    const [arr, setArr] = useState([""])

    const [bolinhaTrue, setBolinhaTrue] = React.useState(true);
    function toggleBolinha() {
        setBolinhaTrue(!bolinhaTrue)
        setNumberReaded(0)
    }

    function togleId(e: string) {
        const varBolinha = document.getElementById(e)
        varBolinha!.classList.remove("mostraBolinha")
        if (salva !== e && arr.indexOf(e) == -1 && numberReaded > 0) {
            setNumberReaded(valor_antigo => valor_antigo - 1);
            setArr([...arr, e])
        }
        console.log(arr)
        setSalva(e)
    }

    return (
        <div>
            <div className="topo">
                <div className="notificacao">
                    <h1>Notifications</h1>
                    <p >{numberReaded}</p>
                </div>
                <small onClick={toggleBolinha}>Mark all as read</small>
            </div>
            {dados.map(
                (d, index) => (
                    <div key={index} className='componente' >
                        <img src={'/images/' + d.img} alt="any" />
                        <div className='message' onClick={() => togleId("id" + index)}>
                            <p className='name'>
                                {d.name}
                                <small> {d.m.message} </small>
                                <span id={'id' + index} className={bolinhaTrue ? 'mostraBolinha' : 'escondeBolinha'}></span>
                            </p>
                            <p className='periodo'>{d.periodo}</p>
                            <div key={d.name} className="messageback">
                                {d.m.messageback.map(back =>
                                    (<p key={back} >{back}</p>)
                                )}
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}