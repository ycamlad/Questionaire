import React, {useState} from 'react';
import Bouton from "../../../Components/Bouton/Bouton";

const Formations = (props) => {

    const [etat,setEtat]=useState(false)
    const [etat2,setEtat2]=useState(false)
    const [actif,setActif]=useState(false)
    const [Lecours,setLeCours]=useState("")
    const [LaFormation,setLaFormation]=useState("")

    const isActif=()=>{
       if(actif){
         return  <Bouton to={"/Information+Personnelle/Formations/StatusRegime"}>Continuer</Bouton>
       }
    }

    const cours=()=>{

        if(Lecours==="data") {
            return (
                <div>
                    <fieldset className="form-group">
                        <legend>Cours</legend>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="data" id="cours1"
                                       onClick={()=>{setActif(true)} } />
                                Big Data 1
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="data" id="cours2"
                                       onClick={()=>setActif(true)} />
                                Programmation 1
                            </label>
                        </div>
                    </fieldset>
                </div>
            )
        }
          else if(Lecours==="communication"){
            return (
                <div>
                    <fieldset className="form-group">
                        <legend>Cours</legend>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="communication" id="optionsRadios1"
                                       onClick={()=>setActif(true)} />
                                Communication organisationnelle
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="communication" id="optionsRadios2"
                                       onClick={()=>setActif(true)} />
                                Relation publique et journalisme
                            </label>
                        </div>
                    </fieldset>
                </div>
            )
        }
    }


    return (
        <>
            <div className={"container"}>
            <fieldset className="form-group">
                <legend>Formation</legend>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1"
                               onClick={()=>setLeCours("data")} />
                            Big data en finance - 421
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2"
                               onClick={()=>setLeCours("communication") }/>
                        Communication - 700
                    </label>
                </div>
            </fieldset>
                {cours()}
                {isActif()}
            </div>

        </>
    );
};

export default Formations;
