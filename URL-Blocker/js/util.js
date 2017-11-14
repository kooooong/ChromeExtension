/**
 * Created by 2172980000466 on 2017/03/09.
 */
function printVar(v) {
    var str = "";
    for (var k in v) {
        if (v.hasOwnProperty(k)) {
            str =+ "v[" + k + "]: " + v[k] + "\n";
        }
    }
    console.log(str);
}

function logEnter(name) {
    var log = "===============ENTER(" + name + ")=================";
    console.log(log);
}

function logExit(name) {
    var log = "===============EXIT(" + name + ")=================";
    console.log(log);
}

// test code
