/* The purpose of this file is... 
        Parse the html DOM tree
[jQuery methods]
.children(), .parents(), .siblings()   
 Getting element content
 .html(), .text()

 https://red-wdp.herokuapp.com/lesson/01-ajax-apis/

 Protocol, hostname, path

*/

$(function() {

        // your jQuery code here...
        $('button').on('click', function() {
                $.ajax({
                   method: 'GET',
                   url: 'https://api.nytimes.com/svc/topstories/v2/${userSelection}.json?api-key=GIqZAIsxqaRSSg8D5T07I8ryCQGJ2q0d'
                })
                        
                .done(function(data) {
                   $('.user-name').append(data.login); // change this to 
                });
        });

        // document.addEventListener('DOMContentLoaded', (event) => {
        //         console.log('DOM fully loaded and parsed');
        // });

});