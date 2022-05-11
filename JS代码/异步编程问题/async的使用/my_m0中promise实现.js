function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    resolveAfter2Seconds().then((mes) => {
        console.log('@',mes);
    });
    // expected output: "resolved"
}

asyncCall();
