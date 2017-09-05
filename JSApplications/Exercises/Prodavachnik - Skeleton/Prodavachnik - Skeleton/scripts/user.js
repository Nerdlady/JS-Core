const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_Hk1fBo4vb";
const kinveyAppSecret = "f3b6fc45438b4412b36f8c10d6cab730";
const kinveyAppAuthHeaders = {
    'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret),
};

function register(e) {
    e.preventDefault();
    let data = convertFormToJSON(this);
    const kinveyRegisterUrl = kinveyBaseUrl + "user/" + kinveyAppKey + "/";
    $.ajax({
        method: "POST",
        url: kinveyRegisterUrl,
        headers: kinveyAppAuthHeaders,
        data: data,
        success: registerSuccess,
        error: handleAjaxError
    });

    function registerSuccess(userInfo) {
        saveAuthInSession(userInfo);
        showHideMenuLinks();
        listAds();
        showInfo('User registration successful.');
    }

}

function loginUser(e) {
    e.preventDefault();
    const kinveyLoginUrl = kinveyBaseUrl + "user/" + kinveyAppKey + "/login";
    let userData = convertFormToJSON(this);
    $.ajax({
        method: "POST",
        url: kinveyLoginUrl,
        headers: kinveyAppAuthHeaders,
        data: userData,
        success: loginSuccess,
        error: handleAjaxError
    });

    function loginSuccess(userInfo) {
        saveAuthInSession(userInfo);
        showHideMenuLinks();
        listAds();
        showInfo('Login successful.');
    }
}

function logoutUser() {
    sessionStorage.clear();
    $('#loggedInUser').text("");
    showHideMenuLinks();
    showView('viewHome');
    showInfo('Logout successful.');
}

function saveAuthInSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let username = userInfo.username;
    sessionStorage.setItem("username", username);
    $('#loggedInUser').text("Welcome, " + username + "!");
}
