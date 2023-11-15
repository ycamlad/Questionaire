import React, {useState} from 'react';

const Complet = (props) => {

    const [objectif,setObjectif]=useState("")
    const [info,setInfo]=useState("")
    const [stats,setStats]=useState("")
    const afficher =()=>{
        if(props.affiche===true){
            if(objectif==="Lancez son entreprise"&&info==="22"&&stats==="temps partielle"){
                return(
                    <div>
                        Nous regrettons de vous informer que vous n'etes pas admissible a cette formation
                    </div>
                )
            }
        }
        else {
            return (
                <div>
                    Felicitation
                </div>
            )
        }
    }

    return (
        <>
            {setObjectif(props.obj)}
            {setInfo(props.inf)}
            {setStats(props.stat)}

            {afficher()}
        </>
    );
};

export default Complet;
