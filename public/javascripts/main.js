var currentCity = 1;

$(function(){
 /*       var addTitle = $('#search-results-template').html();
        var addDescription = 
        var renderTemplate = Handlebars.compile(searchResultsTemplate);


        $('.btn').on('keyup', function(e){
                if(e.keyCode === 13){
                     // console.log("keyup worked");
                        // do something
                        var val = $(this).val()
                        // console.log(val);

                        //first arg is url to request, 
//second arg (optional) is data to send to the server
//third arg: callback and data (whatever is sent to client (res.send, for ex.))
                        $.get('/', {name : val}, function(data){
                             var render = renderTemplate(data);
                             $('#').html(render);
                                
                        });
                }
        });*/
// console.log("hello");
    $('.btn').on('click', function(){
        // currentCity++
        $.get("/goforth", {whichCity:currentCity}, function(data){
            console.log(data);
            $('h1').text(data.name);
            $('h2').text(data.description);
            currentCity = data.next;
            if (currentCity === "end") {
                $('.btn').hide();
            }
        });
        return false;

    });

 
});


