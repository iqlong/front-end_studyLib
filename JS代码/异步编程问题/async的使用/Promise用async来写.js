function getProcessedData(url) {
    return downloadData(url) // 返回一个 promise 对象
        .catch(e => {
            return downloadFallbackData(url)  // 返回一个 promise 对象
        })
        .then(v => {
            return processDataInWorker(v); // 返回一个 promise 对象
        });
}
