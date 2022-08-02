const http = require('http')

const server = http.createServer((req,res)=>{
    // console.log(req);
    // res.write('the fuck you need?')
    // res.end
    if(req.url === '/') {
        res.end('the fuck you need?')
        return
    }
    if(req.url === '/about') {
        res.end(`you haven't answerd my previous question bitch!`)
        return
    }else {
    res.end('get fucked!')
    return
    }
})

server.listen(3000)