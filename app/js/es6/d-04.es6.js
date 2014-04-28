/* jshint unused:false */
/* global _:true */

(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#cubed').click(cubeArray);
    }

    function cubeArray() {
        var string = $('#input').val().split(', ');
        var begin = string[0];
        var end = string[1];
        var step = string[2];

        var numbers = _.range(begin, end, step);

        var _numbers = _(numbers).collect(x=>x*x*x).map(x=>`<div>${x}</div>`).forEach(x=>$('#output').append(x));

    }



})();
