const core = require('@actions/core');
const SSH2Shell = require("ssh2shell");

try {

    /* SSH input commands */
    const ssh_1 = core.getInput('ssh_1');
    const ssh_2 = core.getInput('ssh_2');
    const ssh_3 = core.getInput('ssh_3');
    const ssh_4 = core.getInput('ssh_4');

    const host = {
        server: {
            host: core.getInput('host'),
            userName: core.getInput('username'),
            password: core.getInput('password')
        },
        commands: [ssh_1, ssh_2, ssh_3, ssh_4]
    }
    /* creating new SSH client */
    const SSH = new SSH2Shell(host);
    
    /* Connecting... */
    SSH.connect(function(sessionText){
        /* Response text */
        console.log(sessionText);
        console.log("Successfully executed ssh commands!");
    });
    
} catch (error) {
    core.setFailed(error.message);
}