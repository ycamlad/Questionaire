import React, {useState} from 'react';
import Complet from "../Complet/Complet";
import Bouton from "../../../Components/Bouton/Bouton";

const StatusRegime = (props) => {
    const [temps,setTemps] = useState("")
    const comp=()=>{
        return(
            <Complet
            stat={temps}
            affiche={true}
            />
        )
    }

    return (
        <>
            <div className={"container"}>
            <fieldset className="form-group">
                <legend>Status/Regime</legend>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1"
                               onClick={()=>setTemps("Temps plein")}  />
                        Temps plein
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2"
                               onClick={()=>setTemps("Temps partiel")}  />
                        Temps partiel
                    </label>
                </div>
            </fieldset>
            </div>
            <Bouton to={"/Information+Personnelle/Formations/StatusRegime/Complet"} >Continuer</Bouton>

        </>
    );
};

export default StatusRegime;
