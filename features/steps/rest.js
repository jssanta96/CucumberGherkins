const {
    Given,
    When,
    Then
} = require('cucumber');
var request = require('request');
const assert = require('assert');
var data;

When('user want to obtain the information of a country', function(callback) {
    request('https://restcountries.eu/rest/v2/name/colombia', (err,
        response, body) => {


        if (err) {
            callback(err);
        } else {
            data = JSON.parse(body);
            callback();
        }
    });

});

Then('return the country data in JSON format', function(callback) {
    callback();
    return data;
})