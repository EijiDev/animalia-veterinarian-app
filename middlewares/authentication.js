function ensureAuth(req, res, next){
    let token = req.get('authorization');
    console.log('Token ' + token);
    token = parseInt(token);
    next();
}

module.exports = ensureAuth;