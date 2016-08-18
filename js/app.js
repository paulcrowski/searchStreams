/**
 * Created by Pol on 2015-12-31.
 */
console.log('test');

$(document).ready(function() {
    $.ajaxSetup({ cache: false });
    console.log('load');
});


// getjson for wiki
function getWiki(searchValue) {
    $.getJSON(getLinkHelper(searchValue), showWiki);
}