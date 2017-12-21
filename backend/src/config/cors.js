module.exports = function(req, res, next){
    res.header('Acess-Control-Allow-Origin', '*')
    res.header('Acess-Control-Allow-Method', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Acess-Control-Allow-Headers', 'Orgin, X-Requested-With, Content-Type, Accept')
    next()
}