$('#input').on('change', function() {
    var val;
    val = $(this).val();
    $('.articles h1').text(val);
});
