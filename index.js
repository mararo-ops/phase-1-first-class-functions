
function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function namedFunction() {
        return "love hello";
    }
}
function returnsAnAnonymousFunction() {
    return () => {
        console.log ("my heart")}
}