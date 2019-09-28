
$('ul').on('click', 'li', function() {
    $(this).toggleClass('completed');
});

// Click on X to delete Todo
$('ul').on('click', 'span', function(event) {
    // using .parent() to remove the li aswell because if we do not use this it will just remove the span
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    // pass in event and use the below statement to stop the event bubbling up and triggering the above function to fire too
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if (event.which === 13) {
        // grabbing new todo text from input
        var todoText = $(this).val();
        // clearing the input
        $(this).val("");
        // creating a new li and add to ul
        $('ul').append("<li><span>X</span> " + todoText + "</li>");
    }
});