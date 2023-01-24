/// <reference types="Cypress" />

import BuscarCredenciadosElements from "../elements/BuscarCredenciadosElements";
const credenciadosElem = new BuscarCredenciadosElements

class BuscarCredenciados {

    acessarSiteSky(){
     cy.visit('https://www.sky.com.br/')
    }

    clicarBotaoMinhaSky(){
     cy.get(credenciadosElem.bntAcessarSky()).click()
    }
   
    encontrarCredenciado(){
     cy.get(credenciadosElem.lnkCredenciado()).click()
    }

    validarPaginaBuscarCredenciados(){
     cy.contains(credenciadosElem.txtCredenciados()).should('be.visible')
    }

    clicarNoCookie(){
     cy.get(credenciadosElem.btnCookie()).click()
       } 

    recaPtcha(){
     cy.get(credenciadosElem.euNaoSouUmRobo()).should('be.visible')
    }

    preencherCep(string){
     cy.get(credenciadosElem.inpcepCredenciados()).type(string)

    }

    deveClicarnoX(){
     cy.get(credenciadosElem.clickNoX()).click
    }
}

export default BuscarCredenciados;