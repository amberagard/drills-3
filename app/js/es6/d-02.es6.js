/* jshint unused:false */

(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#square').click(getNums);
    }

    function getNums() {
        var numbers = $('#numbers').val().split(', ').map(n=>n*n).map(n=>`<div>${n}</div>`).forEach(n=>$('#output').append(n));
    }

})();
