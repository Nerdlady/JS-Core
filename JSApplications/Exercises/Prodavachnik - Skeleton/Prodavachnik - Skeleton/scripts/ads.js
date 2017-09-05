function listAds() {
    $('#ads table').empty();
    showView('viewAds')

    const kinveyAdsUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/ads";
    $.ajax({
        method: "GET",
        url: kinveyAdsUrl,
        headers: getKinveyUserAuthHeaders(),
        success: loadAdsSuccess,
        error: handleAjaxError
    });

    function loadAdsSuccess(ads) {
        showInfo('Ads loaded.');
        if (ads.length === 0) {
            $('#ads').text('No advertisements available');
        } else {
            let adsTable = $('<table>')
                .append($('<tr>').append(
                    '<th>Title</th>',
                    '<th>Publisher</th>',
                    '<th>Description</th>',
                    '<th>Price</th>',
                    '<th>Date Published</th>')
                );
            for (let ad of ads) {
                let links = [];
                let readMore = $('<a href="#">[Read More]</a>')
                    .click(adReadMore.bind(this, ad));
                links = [readMore]
                if (ad._acl.creator === sessionStorage['userId']) {
                    let deleteLink = $('<a href="#">[Delete]</a>')
                        .click(deleteAd.bind(this, ad));
                    let editLink = $('<a href="#">[Edit]</a>')
                        .click(loadAdForEdit.bind(this, ad));

                    links = [readMore, ' ', deleteLink, ' ', editLink];
                }
                adsTable.append($('<tr>').append(
                    $('<td>').text(ad.title),
                    $('<td>').text(ad.publisher),
                    $('<td>').text(ad.description),
                    $('<td>').text(ad.price),
                    $('<td>').text(ad.date),
                    $('<td>').append(links)
                ));
            }
            $('#ads').append(adsTable);


        }
    }
}

function createAd(e) {
    e.preventDefault();
    let user = sessionStorage.getItem("username");
    const kinveyAdsUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/ads";
    let adData = convertFormToJSON(this);
    adData['publisher'] = user;

    $.ajax({
        method: "POST",
        url: kinveyAdsUrl,
        headers: getKinveyUserAuthHeaders(),
        data: adData,
        success: createAdSuccess,
        error: handleAjaxError
    });

    function createAdSuccess() {
        listAds();
        showInfo('Ad created.');
    }
}

function deleteAd(ad) {
    const kinveyAdUrl = kinveyBaseUrl + "appdata/" +
        kinveyAppKey + "/ads/" + ad._id;
    $.ajax({
        method: "DELETE",
        url: kinveyAdUrl,
        headers: getKinveyUserAuthHeaders(),
        success: deleteAdSuccess,
        error: handleAjaxError
    });

    function deleteAdSuccess(response) {
        listAds();
        showInfo('Ad deleted.');
    }
}

function loadAdForEdit(ad) {
    const kinveyAdUrl = kinveyBaseUrl + "appdata/" +
        kinveyAppKey + "/ads/" + ad._id;
    $.ajax({
        method: "GET",
        url: kinveyAdUrl,
        headers: getKinveyUserAuthHeaders(),
        success: loadAdForEditSuccess,
        error: handleAjaxError
    });

    function loadAdForEditSuccess(ad) {
        $('#formEditAd input[name=id]').val(ad._id);
        $('#formEditAd input[name=publisher]').val(ad.publisher);
        $('#formEditAd input[name=title]').val(ad.title);
        $('#formEditAd textarea[name=description]').val(ad.description);
        $('#formEditAd input[name=date]').val(ad.date);
        $('#formEditAd input[name=price]').val(ad.price);
        $('#formEditAd input[name=imageURL]').val(ad.imageURL);
        showView('viewEditAd');
    }
}

function editAd(e) {
    e.preventDefault();
    const kinveyAdUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey +
        "/ads/" + $('#formEditAd input[name=id]').val();
    let adData = convertFormToJSON(this);
    $.ajax({
        method: "PUT",
        url: kinveyAdUrl,
        headers: getKinveyUserAuthHeaders(),
        data: adData,
        success: editAdSuccess,
        error: handleAjaxError
    });

    function editAdSuccess() {
        listAds();
        showInfo('Ad edited.');
    }
}

function adReadMore(ad) {
    const kinveyAdUrl = kinveyBaseUrl + "appdata/" +
        kinveyAppKey + "/ads/" + ad._id;

    $.ajax({
        method: "GET",
        url: kinveyAdUrl,
        headers: getKinveyUserAuthHeaders(),
        success: showReadMore,
        error: handleAjaxError
    });

    function showReadMore(ad) {
        $('#readMoreTitle').text(ad.title);
        $('#readMoreDescription').text(ad.description);
        $('#readMorePublisher').text(ad.publisher);
        $('#readMoreDate').text(ad.date);
        $('#readMoreViewsCount').text(ad.viewsCount);
        $('#readMoreImage').attr("src", ad.imageURL);
        showView('viewReadMore');
    }

}

