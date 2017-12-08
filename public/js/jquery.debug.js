jQuery.fn.warning = function () {
    return this.each(function () {
        alert('tag name"' + $(this).prop("tagName") + '".');
    });
};