/**
 * User: Marc Edouard Raffalli
 * Date: 27/03/14
 * Time: 18:41
 * Website: http://marc-ed-raffalli.com/
 */
/* global define */
define([
    'backbone'
], function (Backbone) {
    'use strict';

    return  Backbone.Marionette.ItemView.extend({

        // set the template to use in this view, file name is used as identifier
        template: require('templates/side/_countryInfoView.hbs'),

        // Listen to the change event on the countryInfo attribute of the Model
        // render will be called every time the value of the countryInfo changes
        modelEvents: {
            'change:countryInfo': 'render'
        }
    });
});