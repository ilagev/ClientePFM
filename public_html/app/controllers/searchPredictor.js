angular.module('sc').directive('autoComplete', function(RESOURCES) {
        
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
                    value: smartphone.brandName + " " + smartphone.modelName
               };
            });
        }
    }});
    
    return function(scope, element) {
        element.typeahead(null, {
            display: 'value',
            source: engine
          });
    };
});