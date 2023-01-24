import{
    Given,
    When,
    And,
    Then
} from "@badeball/cypress-cucumber-preprocessor";

import BuscarCredenciadosPage from "../pages/BuscarCredenciadosPage";
const buscarCredenciados = new BuscarCredenciadosPage


Given("que o usuario acesse o portal da sky", () => {
	buscarCredenciados.acessarSiteSky()
    buscarCredenciados.clicarBotaoMinhaSky()
    buscarCredenciados.clicarNoCookie()
});

When("acessar o link encontre um credenciado", () => {
    buscarCredenciados.encontrarCredenciado()
});

Then("sera apresentado a pagina de buscar credenciado", () => {
	buscarCredenciados.validarPaginaBuscarCredenciados()
});

When("entao sera apresentado a opcao de recaptcha", () => {
	buscarCredenciados.recaPtcha()
});

When("preencher o campo cep {string}", (args1) => {
	buscarCredenciados.preencherCep(args1)	
});

Then("sera informado que o cep nao existe um credenciado local", () => {
	buscarCredenciados.boteiOcepErrado
});

When("o usuario deve clicar no X", () => {
	buscarCredenciados.deveClicarnoX
});

