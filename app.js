"use strict";
const chalk = require('chalk');

// Use the Azure IoT device SDK for devices that connect to Azure IoT Central. 
var iotHubTransport = require('azure-iot-device-mqtt').Mqtt;
var Client = require('azure-iot-device').Client;
var Message = require('azure-iot-device').Message;
var ProvisioningTransport = require('azure-iot-provisioning-device-mqtt').Mqtt;
var SymmetricKeySecurityClient = require('azure-iot-security-symmetric-key').SymmetricKeySecurityClient;
var ProvisioningDeviceClient = require('azure-iot-provisioning-device').ProvisioningDeviceClient;
var provisioningHost = 'global.azure-devices-provisioning.net';

// Enter your Azure IoT keys.
var idScope = '0ne0027B2B8';
var registrationId = 'RefrigeratedTruck1';
var symmetricKey = '0FBsKSc22BQuLNcndtnDAr05ZQOuiSsxGdVvql5QuLw=';

var provisioningSecurityClient = new SymmetricKeySecurityClient(registrationId, symmetricKey);
var provisioningClient = ProvisioningDeviceClient.create(provisioningHost, idScope, new ProvisioningTransport(), provisioningSecurityClient);
var hubClient;

var truckIdentification = "Truck number 1";

var rest = require("azure-maps-rest");

// Enter your Azure Maps key.
var subscriptionKeyCredential = new rest.SubscriptionKeyCredential("78XE3hMQ2ngZH7IoH5VQ6mwUWe6XmlQ-wVtYItoAXBM");

// Azure Maps connection 
var pipeline = rest.MapsURL.newPipeline(subscriptionKeyCredential);
var routeURL = new rest.RouteURL(pipeline);

function greenMessage(text) {
    console.log(chalk.green(text) + "\n");
}
function redMessage(text) {
    console.log(chalk.red(text) + "\n");
}