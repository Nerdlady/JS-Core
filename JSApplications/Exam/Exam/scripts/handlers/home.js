let home = (() => {
        function loadHome(ctx) {
            redirectUserHome(ctx);
            ctx.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
                loginForm: "./templates/login/loginForm.hbs",
                registerForm: "./templates/register/registerForm.hbs",
                about: "./templates/about/about.hbs"

            }).then(function () {
                this.partial("./templates/home/home.hbs")
            })
        }

        function redirectUserHome(ctx) {
            let a = auth.getUserId();
            if(a != 'undefined' && a != null){
                ctx.redirect('#/catalog')
            }
        }

        return {
            loadHome
        }
    }
)();
