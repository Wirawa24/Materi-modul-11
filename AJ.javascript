$(document).ready(function() {
    $('#ajax-form').submit(function(e) {
        e.preventDefault();

        // Mengambil nilai input
        var name = $('#name').val();
        var email = $('#email').val();

        // Kirim data ke server menggunakan Ajax
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: {
                name: name,
                email: email
            },
            success: function(response) {
                // Menampilkan respons dari server
                $('#response').html(response);
            }
        });
    });
});