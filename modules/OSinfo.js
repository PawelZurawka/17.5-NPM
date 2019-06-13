const os = require('os');
const colors = require('colors');
const timeFormat = require('./time_format');

function getOSinfo() {
    let type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    const release = os.release();
    const cpu = os.cpus()[0].model;
    const uptime = os.uptime();
    const userInfo = os.userInfo();
    console.log('System: '.green, type);
    console.log('Release: '.yellow, release);
    console.log('CPU model: '.magenta, cpu);
    console.log('Uptime: '.red, timeFormat.time(uptime));
    console.log('User name: '.gray, userInfo.username);
    console.log('Home dir:'.cyan, userInfo.homedir);
}

exports.print = getOSinfo;