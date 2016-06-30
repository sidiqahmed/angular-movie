function SynopsisController(MovieService, $sce) {
  var synopsisVm = this;

  synopsisVm.renderHtml = renderHtml;

  getMovie();

  function getMovie() {
    MovieService
      .fetch()
      .then(getResults);
  }

  function getResults(movie) {
    synopsisVm.movie = movie[0];
  }

  function renderHtml(html) {
    return $sce.trustAsHtml(html);
  }
}

angular.module('Movie.synopsis')
.controller('SynopsisController', SynopsisController);
