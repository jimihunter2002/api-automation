Feature: Account creation using Digital custody service

    Feature Description: The purpose of these tests is to create an account
    Background: User generates api token for authentication
        Given user is an authorized user

    Scenario Outline:  Authorized user is able to add asset to a firm :POST
        Given an asset <assetId> is available to be added to firm <firmId>
        When user adds the asset with the "/asset" endpoint
        Then the asset is successfully added to the firm above
        And status code returned should be 201
        And empty object should be return as specified by documentation

        Examples:
            | assetId | firmId |
            | 2851G   | SECCI  |


    Scenario:  Create a model: POST
        Given user has created valid model request payload
        When user performs the CREATE action using then "/model" endpoint
        Then model should be  successfully created
        And status code returned should be 201
        And the response object should contain model "id" as a property


    Scenario:  Partial Update of a model : PATCH
        Given user has already created a model and has valid modelId "modelId"
        And the user has the updateId "updateId"
        And user has created valid update payload using the "updateId"
        When user performs the update action using then "/model/firmId/" endpoint
        Then model should be  successfully updated
        And status code returned should be 200
        And the response object should contain no data


    Scenario:  Create a client: POST
        Given user has created valid client request payload
        When user performs the CREATE action using then "/client" endpoint
        Then model should be  successfully created
        And status code returned should be 201
        And the response object should contain client "id" as a property


    Scenario: Create client account using modelId and clientId: POST
        Given user has valid modelId "<modelId>" and clientId "<clientId>"
        And user has created a valid payload with the modelId and clientId
        When user creates account using the endpoint "/account"
        Then account should be created successfully for the client
        And status code returned should be 201
        And the response object should contain account "id" as a property

    Scenario: Authorized user unable to add invalid asset to a firm
        Given an invalid asset <assetId> is available to be added to firm <firmId>
        When user adds the asset with the "/asset" endpoint
        Then the asset should not be added to the firm above
        And status code returned should be 400
#serverError returned 500 why? I would expect a bad request

