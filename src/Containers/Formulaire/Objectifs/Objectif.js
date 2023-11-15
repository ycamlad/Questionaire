import React, {useState} from 'react';
import TitreH1 from "../../../Components/TitreH1/TitreH1";
import Bouton from "../../../Components/Bouton/Bouton";
import Complet from "../Complet/Complet";

const Objectif = () => {

    const [etat,SetEtat]=useState(false)


    const comp=(x)=>{
        console.log(x)
        return(
            <>
                <Complet
                obj={x}
                />
            </>
        )
    }

    const afficherBouton=()=>{
     if(etat){
         return(<div className={"text-center"}>
             <Bouton to={"/Information+Personnelle"} >Continuer</Bouton>
         </div>)
     }
     else {
         return (<div className={"text-center"}>
             Veuillez cocher au moins une case
         </div>)
     }
    }

    return (
        <>
            <div className={"container"}>
            <TitreH1>Quelles sont vos objectif a travers cette formation?</TitreH1>
            <fieldset className="form-group">
                <legend>choisir ce qui s'applique:</legend>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" onClick={()=>comp("Acquerir des nouvelles competences")} onChange={()=>SetEtat(true)}  id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Acquerir des nouvelles competences
                        </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"  onClick={()=>comp(" Consolider des competences") }  onChange={()=>SetEtat(true)}   id="flexCheckChecked" />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Consolider des competences
                        </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"  onClick={()=>comp("Apprendre la Theorie")}  onChange={()=>SetEtat(true)}  id="flexCheckChecked" />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Apprendre la Theorie
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"  onClick={()=>comp(" Ameliorer sa pratique")}  onChange={()=>SetEtat(true)}  id="flexCheckChecked" />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Ameliorer sa pratique
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"  onClick={()=>comp("Ameliorer sa situation financiaire")}  onChange={()=>SetEtat(true)} id="flexCheckChecked" />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Ameliorer sa situation financiaire
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"  onClick={()=>comp("Trouver un travail")}  onChange={()=>SetEtat(true)} id="flexCheckChecked" />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Trouver un travail
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"  onClick={()=>comp("Lancer son entreprise")}  onChange={()=>SetEtat(true)} value={"1"}  id="flexCheckChecked" />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Lancer son entreprise
                    </label>
                </div>
            </fieldset><br/>
                {afficherBouton()}
            </div>


       </>
    );
};

export default Objectif;
