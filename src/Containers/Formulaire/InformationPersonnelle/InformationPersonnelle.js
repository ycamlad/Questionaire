import React, {useState} from 'react';
import Bouton from "../../../Components/Bouton/Bouton";
import Complet from "../Complet/Complet";

const InformationPersonnelle = (props) => {

    const [etat,SetEtat]=useState(" ")
    const comp=()=>{
        console.log(etat)
        return(
            <>
                <Complet
                    inf={etat}
                />
            </>
        )
    }
    const afficherBouton=()=>{
        console.log(etat)
        if(etat!==" "){
            return(<div className={"text-center"}>
                <Bouton to={"/Information+Personnelle/Formations"} clic={()=>comp()} >Continuer</Bouton>

            </div>)
        }else {
            return <div className={"text-center"}>Veuillez entrez votre age</div>
        }

    }
    return (
        <>
            <div className={"container"}>
            <legend>Quel est votre age?</legend>
            <label>Entrer votre age : </label>
            <input type={"text"} onChange={(e)=>SetEtat(e.target.value)}/>
            {afficherBouton()}
            </div>
        </>
    );
};

export default InformationPersonnelle;
