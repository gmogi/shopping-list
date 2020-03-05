$(function() {
    $('#js-shopping-list-form').submit( event => {
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
    $('.shopping-item-toggle').on('click', event => {
        event.preventDefault();
        const selectName = $(event.currentTarget).parent().parent().find("span").first();
        selectName.toggleClass('shopping-item__checked');
    });
    $('ul').on('click', '.shopping-item-delete', event => {
        event.preventDefault();
        $(event.currentTarget).parent().parent().remove();
    });
}
$(handleClicks);
