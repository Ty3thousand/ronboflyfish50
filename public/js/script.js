$(document).ready(function () {
    $('#showFormBtn').click(() => $('#myForm').removeClass('hidden'));
    $('#close-form').click(() => $('#myForm').addClass('hidden'));

    $('#reviewOption').change(function () {
        if ($(this).val() === 'yes') {
            $('#reviewText').removeClass('hidden');
        } else {
            $('#reviewText').addClass('hidden');
        }
    });

    $('#myForm').submit(function (event) {
        event.preventDefault();
        $.post('/stats', $(this).serialize())
            .done(response => {
                alert(response);
                $('#myForm').addClass('hidden');
            })
            .fail(error => alert('Error: ' + error.responseText));
    });
});
