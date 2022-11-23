const Alexa = require('ask-sdk-core');
const JoinWordsIntent = require('../intents/JoinWordsIntent.js')

const getJoinWords = JoinWordsIntent.getJoinWords


const GetNombreIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'GetNombreIntent';
    },
    handle(handlerInput) {
        const slots = handlerInput.requestEnvelope.request.intent.slots
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes()
        const name = slots['name'].value
        sessionAttributes.firstName = name
        
        const speakOutput = `El nombre que usted ingresó es ${name}. Digame su apellido.`
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const GetApellidoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'GetApellidoIntent';
    },
    handle(handlerInput) {
        const slots = handlerInput.requestEnvelope.request.intent.slots
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes()
        const name = slots['lastName'].value
        sessionAttributes.lastName = name

        const speakOutput = `El apellido que usted ingresó es ${name}. Digame su segundo apellido`
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const GetSegundoApellidoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'GetSegundoApellidoIntent';
    },
    handle(handlerInput) {
        const slots = handlerInput.requestEnvelope.request.intent.slots
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes()
        const name = slots['secondLastName'].value
        sessionAttributes.secondLastName = name

        const speakOutput = `El segundo apellido que usted ingresó es ${name}. Realize el pedido al servicio`
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const UseServiceIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'UseServiceIntent';
    },
    async handle(handlerInput) {
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes()
        let firstName = sessionAttributes.firstName
        let lastName = sessionAttributes.lastName
        let secondLastName = sessionAttributes.secondLastName

        let res = await getJoinWords(firstName, lastName, secondLastName)

        const speakOutput = `su nombre completo es ${res}.`
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
}; 



module.exports = {
    GetNombreIntentHandler,
    GetApellidoIntentHandler,
    GetSegundoApellidoIntentHandler,
    UseServiceIntentHandler,
}