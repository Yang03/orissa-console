const fastify = require('fastify')()


fastify.register(require('fastify-jwt'), { secret: 'supersecret' }, err => {
    if (err) throw err
})
fastify.register(require('fastify-formbody'), {}, (err) => {
    if (err) throw err
  })

function auth(req, reply) {
    let token = req.headers['x-access-token']
    if (token) {
        fastify.jwt.verify(token, (err, decode) => {
            if (err) {
                reply.code(403).send({message: 'Failed to authenticate token'})
            }    
        })
    } else {
        reply.code(403).send({message: 'No token provided'})    
    }
}

fastify.get('/api/hello', function(request, reply) {
    auth(request, reply)
    reply.send({auth: 1})
})

fastify.post('/api/sigin', function(request, reply) {
    const {name, password} = request.body || {}
    if (name == 'admin' && password == '123456') {
         const token = fastify.jwt.sign(name);
         return reply.code(200).send({token: token})
    } 
    reply.code(403).send({message: 'Authenticate failed'})
})

fastify.listen(3000, function (err) {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})