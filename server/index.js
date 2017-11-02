const fastify = require('fastify')()


fastify.register(require('fastify-jwt'), { secret: 'supersecret' }, err => {
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

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

fastify.get('/api/hello', function(request, reply) {
    auth(request, reply)
    reply.send({auth: 1})
})

fastify.get('/sigin', function(request, reply) {
    const {userName, password} = request.query || {}
    console.log(userName)
    if (userName == 'admin' && password == '123456') {
         const token = fastify.jwt.sign(userName);
         reply.send({token: token})
    }
    reply.send({message: 'Authenticate failed'})
})

// fastify.register(function (instance, options, next) {
//     // the route will be '/api/hello'
    
//     instance.get('/hello', (req, reply) => {
//       var token = req.body.token || req.query.token || req.headers['x-access-token']
//       fastify.jwt.verify()
//       reply.send({ greet: 'hello' })
//     })
//     next()
//   }, { prefix: '/api' })

// Run the server!
fastify.listen(3000, function (err) {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})