function showInfo(message) {
    $('#infoBox').text(message);
    $('#infoBox').show();
    setTimeout(function () {
        $('#infoBox').fadeOut();
    }, 3000);
}

function showError(errorMsg) {
    $('#errorBox').text("Error: " + errorMsg);
    $('#errorBox').show();
}

function showHideMenuLinks() {
    $("#linkHome").show();
    if (sessionStorage.getItem('authToken') == null) {
        // No logged in user
        $("#linkLogin").show();
        $("#linkRegister").show();
        $("#linkListAds").hide();
        $("#linkCreateAd").hide();
        $("#linkLogout").hide();
    } else {
        // We have logged in user
        $("#linkLogin").hide();
        $("#linkRegister").hide();
        $("#linkListAds").show();
        $("#linkCreateAd").show();
        $("#linkLogout").show();
    }
}

function showView(viewName) {
    $('main > section').hide();
    $('#' + viewName).show();
}
