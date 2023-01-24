@credenciados
Feature: Buscar Credenciados

Background:
    Given que o usuario acesse o portal da sky
    When acessar o link encontre um credenciado

    @Scenario01
    Scenario: Validar que esta sendo redirecionando para pagina de buscar credenciado
        Then sera apresentado a pagina de buscar credenciado 
    @Scenario02      
    Scenario: Validar que ao apresentar um novo cep ira apresentar um Recaptha
        And preencher o campo cep '50050300'
        When entao sera apresentado a opcao de recaptcha
    @Scenario03
    Scenario: Validar que o usuario ira preencher o cep errado
        When  preencher o campo cep '33333333'
        Then sera informado que o cep nao existe um credenciado local
    @Scenario04
    Scenario: Validar que o usuario preenchá o cep e click no X
        Given preencher o campo cep '50050300'
        When o usuario deve clicar no X 
