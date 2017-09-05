function startApp() {
    showHideMenuLinks();
    showView('viewHome');
    $("#linkHome").click(() => showView('viewHome'));
    $("#linkLogin").click(() => showView('viewLogin'));
    $("#linkRegister").click(() => showView('viewRegister'));
    $("#linkListAds").click(listAds);
    $("#linkCreateAd").click(() => showView('viewCreateAd'));
    $("#linkLogout").click(logoutUser);

    $(document).on({
        ajaxStart: function () {
            $("#loadingBox").show()
        },
        ajaxStop: function () {
            $("#loadingBox").hide()
        }
    });

    $("#formLogin").submit(loginUser);
    $("#formRegister").submit(register);
    $("#formCreateAd").submit(createAd);
    $("#formEditAd").submit(editAd);
}