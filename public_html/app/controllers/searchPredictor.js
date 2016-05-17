$(document).ready(function() {
    
    //http://tatiyants.com/how-to-use-json-objects-with-twitter-bootstrap-typeahead/
    //https://www.youtube.com/watch?v=x4F6Kcbo3Vw
    //http://stackoverflow.com/questions/21530063/how-do-we-set-remote-in-typeahead-js
   
    // Instantiate the Bloodhound suggestion engine
    var movies = new Bloodhound({
        datumTokenizer: function(datum) {
        return Bloodhound.tokenizers.whitespace(datum.value);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
        wildcard: '%QUERY',
        url: 'http://localhost:8080/servidor.0.0.1-SNAPSHOT/api/v0/smartphones?query=%QUERY',
        transform: function(response) {
            // Map the remote source JSON array to a JavaScript object array
            return $.map(response, function(smartphone) {
               return {
                    value: smartphone.brandName + " " + smartphone.modelName
               };
            });
        }
    }});

    // Instantiate the Typeahead UI
    $('#index').typeahead(null, {
      display: 'value',
      source: movies
    });

});