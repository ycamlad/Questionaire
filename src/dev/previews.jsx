import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import Objectif from "../Containers/Formulaire/Objectifs/Objectif";
import Formulaire from "../Containers/Formulaire/Formulaire";
import InformationPersonnelle from "../Containers/Formulaire/InformationPersonnelle/InformationPersonnelle";
import App from "../App";
import StatusRegime from "../Containers/Formulaire/StatusRegime/StatusRegime";
import Complet from "../Containers/Formulaire/Complet/Complet";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Objectif">
                <Objectif/>
            </ComponentPreview>
            <ComponentPreview path="/Formulaire">
                <Formulaire/>
            </ComponentPreview>
            <ComponentPreview
                path="/InformationPersonnelle">
                <InformationPersonnelle/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/StatusRegime">
                <StatusRegime/>
            </ComponentPreview>
            <ComponentPreview path="/Complet">
                <Complet/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;
