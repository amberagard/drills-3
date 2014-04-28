/* global moment:true */

(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#days').click(fromNow);
    }

    function fromNow() {
        var date = $('#calendar').val();
        var output = moment(date).fromNow();
        $('#output').append(output);
    }
})();
