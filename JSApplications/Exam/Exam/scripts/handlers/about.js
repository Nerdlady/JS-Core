let about = (() => {
    function about(ctx) {
        userSession.redirectUser(ctx);
        ctx.loggedIn = auth.getUserId();
        ctx.username = auth.getUsername();
        ctx.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs",
            menu: "./templates/menu/menu.hbs",
            about: "./templates/about/about.hbs"

        }).then(function () {
            this.partial("./templates/about/aboutPage.hbs")
        })
    }

    return {
        about
    }
})();
