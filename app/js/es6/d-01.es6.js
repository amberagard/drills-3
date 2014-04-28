/* jshint unused:false */

(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#string').click(makeString);
    }

    function makeString() {
        var firstName = $('#first').val().toLowerCase();
        var lastName = $('#last').val().toLowerCase();
        var movie = $('#movie').val().toUpperCase();
        var string = `${firstName} ${lastName} loves ${movie}`;

        $('#output').append(string);
    }

})();
