const core = require('@actions/core');
const SSH2Shell = require("ssh2shell");

try {

    /* SSH input commands */
    const commands = core.getInput('commands');

    /* Splitting commands if there are multiple */
    let items = commands.split("\n");

    const host = {
        server: {
            host: core.getInput('host'),
            userName: core.getInput('username'),
            password: core.getInput('password')
        },
        commands: items,
    }

    /* creating new SSH client */
    const SSH = new SSH2Shell(host);
    
    /* Connecting... */
    SSH.connect(function(sessionText){
        /* Response text */
        console.log(sessionText);
        if(sessionText == 'Ready'){
            console.log("Successfully executed ssh commands!");
        }
    });

} catch (error) {
    core.setFailed(error.message);
}