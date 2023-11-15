import "bootswatch/dist/cerulean/bootstrap.min.css";
import {BrowserRouter, Route, Switch,} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Formulaire from "./Containers/Formulaire/Formulaire";
import Objectif from "./Containers/Formulaire/Objectifs/Objectif";
import InformationPersonnelle from "./Containers/Formulaire/InformationPersonnelle/InformationPersonnelle";
import Formations from "./Containers/Formulaire/Formations/Formations";
import StatusRegime from "./Containers/Formulaire/StatusRegime/StatusRegime";
import Complet from "./Containers/Formulaire/Complet/Complet";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path={"/"} exact component={Formulaire}/>
          <Route path={"/Information+Personnelle"} exact component={InformationPersonnelle}/>
          <Route path={"/Information+Personnelle/Formations"}  exact component={Formations}/>
          <Route path={"/Information+Personnelle/Formations/StatusRegime"} exact component={StatusRegime}/>
          <Route path={"/Information+Personnelle/Formations/StatusRegime/Complet"} exact component={Complet}/>

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
