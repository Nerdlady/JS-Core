function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response);
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error.";
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description;
    showError(errorMsg);
}


function convertFormToJSON(form) {
    let array = $(form).serializeArray();
    let json = {};

    $.each(array, function () {
        json[this.name] = this.value || '';
    });

    return json;
}
function getKinveyUserAuthHeaders() {
    return {
        'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
    };
}

