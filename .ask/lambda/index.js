const Alexa = require('ask-sdk-core');
const handlers = require('./Logic/handlers/handlers')
const amazonHandlers = require('./Logic/handlers/amazonHandlers')

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        handlers.GetNombreIntentHandler,
        handlers.GetApellidoIntentHandler,
        handlers.GetSegundoApellidoIntentHandler,
        handlers.UseServiceIntentHandler,
        amazonHandlers.LaunchRequestHandler,
        amazonHandlers.HelpIntentHandler,
        amazonHandlers.CancelAndStopIntentHandler,
        amazonHandlers.SessionEndedRequestHandler,
        amazonHandlers.IntentReflectorHandler, 
        ) 
    .addErrorHandlers(
        amazonHandlers.ErrorHandler,
        )
    .lambda();