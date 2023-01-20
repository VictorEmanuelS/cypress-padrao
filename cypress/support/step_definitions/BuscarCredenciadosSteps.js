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
});
