/// <reference types="Cypress" />

import BuscarCredenciadosElements from "../elements/BuscarCredenciadosElements";
const buscarCredenciados = new BuscarCredenciadosElements

class BuscarCredenciados {

    acessarSiteSky(){
        cy.visit('https://www.sky.com.br/')
    }

}

export default BuscarCredenciados;