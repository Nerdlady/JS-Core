let userSession = (() => {


    function register(ctx) {
        let username = ctx.params.username;
        let password = ctx.params.password;
        let repeatPass = ctx.params.repeatPass;
        if(!username || username.length < 3 || !username.match(/[a-zA-Z]+/g)){
            notifications.showError('Username should be at least 3 characters long and should contain only english alphabet letters');
            return;
        } 
        if(!password || password.length < 6 || !password.match(/[a-zA-Z0-9]+/g) ){
            notifications.showError('Password should be at least 6 characters long and should contain only english alphabet letters and digits');
            return;
        }

        if(password !== repeatPass){
            notifications.showError('Passwords mismatch');
            return
        }
        
        auth.register(username, ctx.params.password).then(function (data) {
            notifications.showInfo('User registration successful.');
            auth.saveSession(data);
            ctx.redirect('#/catalog');
        }).catch(notifications.handleError);

    }


    function login(ctx) {
        auth.login(ctx.params.username, ctx.params.password)
            .then(function (data) {
                auth.saveSession(data);
                notifications.showInfo('Login successful.');
                ctx.redirect('#/catalog');
            }).catch(notifications.handleError);

    }

    function logout(ctx) {
        auth.logout().then(function () {
            notifications.showInfo('Successfully logged out');
            auth.clearSession();
            ctx.redirect('#/home');
        }).catch(notifications.handleError);
    }


    function redirectUser(ctx) {
        if(auth.getUserId() == 'undefined'){
             ctx.redirect('#/home')
        }
    }


    return {
        register,
        login,
        logout,
        redirectUser
    }
})();
