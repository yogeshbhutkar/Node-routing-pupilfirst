const http = require('http');
const fs = require('fs');
const args = require('minimist')(process.argv.slice(2));

let homeContent = "";
let projectContent = "";
let registrationContent = "";

fs.readFile("home.html",(err, HomeData)=>{
    if (err) throw err;
    homeContent = HomeData;
});

fs.readFile("project.html", (err, ProjectData)=>{
    if (err) throw err;
    projectContent = ProjectData;
});

fs.readFile("registration.html", (err, RegistrationData)=>{
    if (err) throw err;
    registrationContent = RegistrationData;
});

http.createServer((request, response)=>{
    let url = request.url;
    response.writeHeader(200,{"Content-Type":"text/html"});
    switch(url){
        case "/project":
            response.write(projectContent);
            response.end();
            break;
        case "/registration":
            response.write(registrationContent);
            response.end();
            break;
        default:
            response.write(homeContent);
            response.end();
            break;
    }  
}).listen(args["port"]);
