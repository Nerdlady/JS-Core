$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');
        this.get('index.html', loadHome);
        this.get("#/home", loadHome);

        this.get("#/register", loadRegister);
        this.post("#/register", register);

        this.get("#/login", loadLogin);
        this.post("#/login", login);

        this.get("#/logout", logout);

        this.get("#/catalog", loadCatalog)
        this.get("#/catalog/:teamId", loadTeamDetails)

        this.get("#/create",loadCreateTeam);
        this.post("#/create",createTeam);
    });

    function loadHome(ctx) {
        ctx.loggedIn = auth.getUserId();
        ctx.hasTeam = auth.hasTeam();
        ctx.username = auth.getUsername();
        ctx.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs"
        }).then(function () {
            this.partial("./templates/home/home.hbs")
        })
    }

    function loadRegister(ctx) {
        ctx.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs",
            registerForm: "./templates/register/registerForm.hbs"
        }).then(function () {
            this.partial("./templates/register/registerPage.hbs")
        })
    }

    function register(ctx) {
        auth.register(ctx.params.username, ctx.params.password).then(function (data) {
            auth.showInfo('Successfully registered');
            auth.saveSession(data);
            ctx.redirect('#/catalog');
        }).catch(function (response) {
            let errorMsg = response.responseJSON.description;
            auth.showError(errorMsg)
        });

    }

    function loadLogin(ctx) {
        ctx.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs",
            loginForm: "./templates/login/loginForm.hbs"
        }).then(function () {
            this.partial("./templates/login/loginPage.hbs")
        })
    }

    function login(ctx) {
        auth.login(ctx.params.username, ctx.params.password)
            .then(function (data) {
                auth.saveSession(data);
                auth.showInfo('Successfully logged in');
                ctx.redirect('#/catalog');
            }).catch(function (response) {
            let errorMsg = response.responseJSON.description;
            auth.showError(errorMsg)
        });

    }

    function logout(ctx) {
        auth.logout().then(function () {
            auth.showInfo('Successfully logged out');
            auth.saveSession(null);
            ctx.loggedIn = auth.getUserId();
            ctx.redirect('#/home');
        });
    }

    function loadCatalog(ctx) {
        ctx.loggedIn = auth.getUserId();
        ctx.hasNoTeam = auth.hasTeam();
        ctx.username = auth.getUsername();
        teamsService.loadTeams().then(function (teams) {
            ctx.teams = teams;
            ctx.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
                team: "./templates/catalog/team.hbs"
            }).then(function () {
                this.partial("./templates/catalog/teamCatalog.hbs")
            })
        }).catch(function (response) {
            let errorMsg = response.responseJSON.description;
            auth.showError(errorMsg)
        });

    }

    function loadTeamDetails(ctx) {
        ctx.loggedIn = auth.getUserId();
        ctx.username = auth.getUsername();
        teamsService.loadTeamDetails(ctx.params.teamId).then(function (data) {
            ctx.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
                teamMember: "./templates/catalog/teamMember.hbs",
                teamControls: "./templates/catalog/teamControls.hbs"
            }).then(function () {
                ctx.isOnTeam =  auth.hasTeam();
                ctx.isAuthor = auth.getUserId() === data._acl.creator;
                ctx.name = data.name;
                ctx.comment = data.comment;
                this.partial("./templates/catalog/details.hbs")
            })
        }).catch(function (response) {
            let errorMsg = response.responseJSON.description;
            auth.showError(errorMsg)
        });
    }

    function loadCreateTeam(ctx) {
        ctx.loggedIn = auth.getUserId();
        ctx.username = auth.getUsername();
        ctx.loadPartials({
            header: "./templates/common/header.hbs",
            footer: "./templates/common/footer.hbs",
            createForm: "./templates/create/createForm.hbs"
        }).then(function () {
            this.partial("./templates/create/createPage.hbs")
        })
    }

    function createTeam(ctx) {
        teamsService.createTeam(ctx.params.name,ctx.params.comment).then(function (data) {
            teamsService.joinTeam(data._id);
            auth.showInfo('Successfully created team ' + ctx.params.name);
            ctx.redirect('#/catalog');
        }).catch(function (response) {
            let errorMsg = response.responseJSON.description;
            auth.showError(errorMsg)
        });
    }

    app.run();
});