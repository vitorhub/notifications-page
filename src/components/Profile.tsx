import * as React from 'react';
import dados from '../data/db.json'
import './Profile.css'

export default function Profile() {

    const [bolinhaTrue, setBolinhaTrue] = React.useState(true);
    function toggleBolinha(){
        setBolinhaTrue(!bolinhaTrue)
    }

    function togleId(e: string){
        console.log(e)
        if(e){
            const varBolinha = document.getElementById(e)
            varBolinha!.classList.remove("mostraBolinha")
        }
    }

    return (
        <div>
            {dados.map(
                (d, index) => (
                    <div key={index} className='componente' >
                        <img src={'../../public/images/' + d.img} alt="any" />
                        <div className='message' onClick={()=>togleId("id"+index)}>
                            <p className='name'>
                                {d.name}
                                <small> {d.m.message} </small>
                                <span id={'id'+index} className={bolinhaTrue?'mostraBolinha':'escondeBolinha'}></span>
                            </p>
                            <p className='periodo'>{d.periodo}</p>
                            <div key={d.name} className="messageback">
                                {d.m.messageback.map(back => (<p key={back} >{back}</p>))}
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}