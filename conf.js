"use strict";
exports.config = {
    //framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    noGlobals: false,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    framework: 'custom',  // set to "custom" instead of cucumber.
 
  frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
    noGlobals: true,
    specs: ['feature/test.feature'],
    SELENIUM_PROMISE_MANAGER: false,
    beforeLaunch: function() {
          require('ts-node').register({
                  project: '.'
                });
        },
        cucumberOpts: {
          require: ['cucumberStep/testStepDef.ts'],  // require step definition files before executing features
          tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
          strict: true,                  // <boolean> fail if there are any undefined or pending steps
          format: ['json:./results.json'],            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
          'dry-run': false,              // <boolean> invoke formatters without executing steps
          compiler: [] 
          //timeout: '60000'                 // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        },
      
       onPrepare: function () {
         // browser.manage().window().maximize(); // maximize the browser before executing the feature files
        }
};
