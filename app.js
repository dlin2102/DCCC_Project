angular
    .module("present", [])
    .controller("presentController", presentControllerFunction)

function presentControllerFunction($timeout) {
    var vm = this;
    var url = "https://api.open.fec.gov/v1/election-dates/?page=1&per_page=20&api_key=9fIiidcKwVGSG3PVT9GbcGhEJe0aJM4YpdFQjAwR&sort=-election_date"
    $.get(url, function(data) {
        $timeout(function() {
            vm.electionDates = data.results
        })
    })
}
