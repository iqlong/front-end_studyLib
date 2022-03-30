let count = 0;
setTimeout(() => {
    console.log("base.count", ++count); // 1
}, 500)

module.exports.count = count;
