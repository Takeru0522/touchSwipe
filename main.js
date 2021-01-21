$(function() {
    $(".swipearea").swipe( {
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            $('#text1').text("Direction: " + direction );  
            $('#text2').text("Duration: " + duration + " ms" );  
            $('#text3').text("Distance " + distance + " px" ); 
            if(direction === "left") {
                console.log('left');
                $(this).css('color', 'black');
                $(this).css('left', '-100px');
            }
            if(direction === "right") {
                console.log('right');
                $(this).css('color', 'navy');
                $(this).css('left', '0');
            }
        }
    });
  
    //Set some options later
    $(".swipeare").swipe("option", {
        threshold: 15, 
        fingers:1
    });
    
  });

$('.hidden-area').on('click', () => {
    alert('本当に削除しますか？')
})