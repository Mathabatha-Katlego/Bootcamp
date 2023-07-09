const startCountingPromise = new Promise((resolve) => {
    resolve('Start Counting');
});

function counter(value) {
    console.log(value);
}

startCountingPromise
    .then((result) => {
        counter(result);
        return 'One';
    })
    .then((result) => {
        counter(result);
        return 'Two';
    })
    .then((result) => {
        counter(result);
        return 'Three';
    });
