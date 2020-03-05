$(function() {
    $('#js-shopping-list-form').submit( function(event) {
        event.preventDefault();
        const itemName = $('#shopping-list-entry').val();
        $("ul").append(
            '<li>' +
            `<span class="shopping-item">${itemName}</span>` +
            '<div class="shopping-item-controls">' +
              '<button class="shopping-item-toggle">' +
                '<span class="button-label">check</span>' +
              '</button>' +
              '<button class="shopping-item-delete">' +
                '<span class="button-label">delete</span>' +
              '</button>' +
            '</div>' +
          '</li>'
        )
     });
});

function handleClicks() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        event.preventDefault();
        const selectName = $(this).parent().parent().find("span").first();
        selectName.toggleClass('shopping-item__checked');
    });
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        event.preventDefault();
        $(this).parent().parent().remove();
    });
}
$(handleClicks);
