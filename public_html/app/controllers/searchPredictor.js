angular.module('sc').directive('autoComplete', function(RESOURCES, $window) {
        
    var engine = new Bloodhound({
        datumTokenizer: function(datum) {
        return Bloodhound.tokenizers.whitespace(datum.value);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
        wildcard: '%QUERY',
        url: RESOURCES.BASE + RESOURCES.SMARTPHONES + "?query=%QUERY",
        transform: function(response) {
            return $.map(response, function(smartphone) {
               return {
                    value: smartphone.brandName + " " + smartphone.modelName,
                    id: smartphone.id
               };
            });
        }
    }});
    
    return function(scope, element) {
        element.typeahead(null, {
            minLength: 2,
            highlight: true,
            display: 'value',
            source: engine,
            templates: {
                empty: function(data) {
                    return '<p>No results...</p>';
                },
                suggestion: function(data) {
                    return '<p><strong>' + data.value + '</strong></p>';
                }
            }
        }).on('typeahead:select', function(ev, suggestion) {
            $window.location.href= "#smartphone/" + suggestion.id;
        });
    };
});