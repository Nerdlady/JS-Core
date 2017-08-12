function validate() {


    $('#submit').on('click', function (e) {
        e.preventDefault();
        let username = $('#username').val();
        let email = $('#email').val();
        let password = $('#password').val();
        let confPassword = $('#confirm-password').val();
        let companyInfo = $('#companyNumber').val();
        let isUsernameValid = checkUsername(username);
        let isEmailValid = checkEmail(email);
        let isPasswordsValid = checkPasswords(password, confPassword);
        let isCompanyValid = checkCompanyNumber(companyInfo);

        if(isUsernameValid && isEmailValid && isPasswordsValid && isCompanyValid){
            $('#valid').show();
        }
    });

    $('#company').on('change', function () {

        if($(this).is(':checked')){
            $('#companyInfo').show();
        } else {
            $('#companyInfo').hide();
        }

    });

    function checkUsername(username) {
        let reg = /^[a-zA-Z0-9]{3,20}$/;

        if (!reg.test(username)) {
            $('#username').css('border-color', 'red');
            return false;
        } else {
            $('#username').css('border', 'none');
            return true;
        }
    }

    function checkEmail(email) {
        let reg = /.*?@.*?\..*?/;

        if (!reg.test(email)) {
            $('#email').css('border-color', 'red');
            return false;
        } else {
            $('#email').css('border', 'none');
            return true;
        }
    }

    function checkPasswords(password, confPassword) {
        let reg = /^\w{5,15}$/;

        if (!reg.test(password) || (password !== confPassword)) {
            $('#password').css('border-color', 'red');
            $('#confirm-password').css('border-color', 'red');
            return false;
        } else {
            $('#password').css('border', 'none');
            $('#confirm-password').css('border', 'none');
            return true;
        }
    }

    function checkCompanyNumber(companyInfo) {
        if ($('#companyInfo').css('display') !== 'none') {
            if (Number(companyInfo) < 1000 || Number(companyInfo) > 9999) {
                $('#companyNumber').css('border-color', 'red');
                return false;
            } else {
                $('#companyNumber').css('border', 'none');
                return true;
            }
        }

        return true;
    }
}

