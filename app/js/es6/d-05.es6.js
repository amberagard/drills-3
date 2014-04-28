(function() {
    'use strict';

    $(document).ready(initialize);

    function initialize() {
        $('#get').click(getMovies);
    }

    function getMovies() {
        var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=7&country=us&apikey=exusuyre62mxvmxf8u7fgusc&callback=?';

        $.getJSON(url, function(movie) {
            getInfo(movie);
        });
    }

    function getInfo(movie) {
        var movies = movie.movies;

        for(var i = 0; i < movies.length; i++) {
            var title = movies[i].title;
            var poster = movies[i].posters.thumbnail;
            display(title, poster);
        }
        console.log(movies);
    }

    function display(title, poster) {
        var all = '<div class="poster"><img src="' + poster + '"></img><div class="title">' + title + '</div></div>';
        $('#output').append(all);
    }

})();
