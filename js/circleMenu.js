
$('.trigger2').mouseover(function(e){
    e.preventDefault();
    $.popcircle('#pops2',
      {
        spacing:'10px',
        type:'half', // full, half, quad
        offset:5,	// 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
        ease:'easeOutQuad',
        time:'fast' // slow, fast, 1000
      }
    );
});
