function validateRequest(request) {
    let methods = ['GET','POST','DELETE','CONNECT'];
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1' ,'HTTP/2.0' ];
    if(!methods.includes(request.method)){
        throw new Error('Invalid request header: Invalid Method');
    }

    let urlReg = /^([a-zA-Z.0-9]+|\*)$/;
    if(!urlReg.test(request.uri) || request.uri === undefined){
        throw new Error('Invalid request header: Invalid URI');
    }

    if(!versions.includes(request.version)){
        throw new Error('Invalid request header: Invalid Version');
    }

    let messageReg = /^([^<>\\&'"]*)$/;

    if(!messageReg.test(request.message) || request.message === undefined){
        throw new Error('Invalid request header: Invalid Message');
    }
    return request;
}

validateRequest({
    method: 'GET',
    version: 'HTTP/1.1',
    message: ''
});




