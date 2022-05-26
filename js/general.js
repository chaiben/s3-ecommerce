const DEBUG = true;

function log(){
    if(DEBUG)
        console.log(...arguments);
    return true;
}