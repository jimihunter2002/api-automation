Running test: How to ?

1. clone repo from location : <github_url>
2. for testing endpoints on adhoc basis. Use postman or any other application. In this instance
   REST client was used in VS Code IDE.
3. navigate to project root <seccl> folder and create settings.json file in .vscode folder and set
   environment variables to be used in the requests.
4. Any variable referenced in the requests with `{{}}` must be set in the `settings.json` file as environment variables

   -----------Automation---------

5. For the automation part : navigate into `<seccl-automation>` folder and run `npm install` to install all dependencies
6. create a `.env` file in `<seccl-automation>` folder and set all these variables as environments variable
   - baseUrlStaging
   - firmId
   - userId
   - password
   - idOrName
   - clientEmail
   - clientNiNumber
   - firmLei
   - clientMobile
7. Once this is done run the test with the command `npm test -- --coverage`
8. There is a feature file `<seccl.feature>` which describes the scenarios that were automated.
