/* jshint camelcase:false */

(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#get').click(getMovies);
    }

    function getMovies() {
        var number = $('#number').val();
        var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=' + number + '&country=us&apikey=exusuyre62mxvmxf8u7fgusc&callback=?';

        $.getJSON(url, function(movie) {
            getInfo(movie);
        });
    }

    function getInfo(movie) {
        var ratings = movie.movies;
        var score = $('#score').val();


        for(var i = 0; i < ratings.length; i++) {
            var title = ratings[i].title;
            var poster = ratings[i].posters.thumbnail;
            var rating = ratings[i].ratings.audience_score;
            if(rating > score) {
                display(title, poster, rating);
            }
        }
    }

    function display(title, poster, rating) {
        var all = '<div class="poster"><img src="' + poster + '"></img><div class="title">' + title + '</div><div class="rating">' + rating + '</div></div>';
        $('#output').append(all);
    }


})();
