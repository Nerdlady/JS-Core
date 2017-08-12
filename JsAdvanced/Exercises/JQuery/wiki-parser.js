function wikiParser(selector) {
    let words = $(selector).text();

    let regItalic = /''([^']*?)''/g;
    let regBold = /'''([^']*?)'''/g;
    let regH1 = /=([^=]*?)=/g;
    let regH2 = /==([^=]*?)==/g;
    let regH3 = /===([^=]*?)===/g;
    let regLinkText = /\[\[(.*?)\|(.*?)]]/;
    let regLink = /\[\[([^\]\[]*?)]]/g;
    let match;

    while (match = regBold.exec(words)) {
        let result = '<b>' + match[1] + '</b>';
        words = words.replace(match[0], result);
    }

    while (match = regItalic.exec(words)) {
        let result = '<i>' + match[1] + '</i>';
        words = words.replace(match[0], result);
    }

    while (match = regH3.exec(words)) {
        let result = '<h3>' + match[1] + '</h3>';
        words = words.replace(match[0], result);
    }

    while (match = regH2.exec(words)) {
        let result = '<h2>' + match[1] + '</h2>';
        words = words.replace(match[0], result);
    }

    while (match = regH1.exec(words)) {
        let result = '<h1>' + match[1] + '</h1>';
        words = words.replace(match[0], result);
    }

    while (match = regLink.exec(words)) {
        let matchTwo;
       if(matchTwo = regLinkText.exec(match[0])){
           let result = `<a href="/wiki/${matchTwo[1]}">${matchTwo[2]}</a>`;
           words = words.replace(match[0], result);
       } else {
           let result = `<a href="/wiki/${match[1]}">${match[1]}</a>`;
           words = words.replace(match[0], result);
       }
    }

    $(selector).text('');
    $(selector).append(words);
}
