const resolve = Promise.resolve('cg')
const reject = Promise.reject('sb')

const t1= Promise.resolve(resolve)
const t2= Promise.resolve(reject)
console.log(t1,t2);

const T1= Promise.reject(resolve)
const T2= Promise.reject(reject)
console.log(T1,T2);

// .catch实际上就是调用了.then(_, onReject)
console.log(Promise.resolve(resolve));
console.log(t1==resolve,T1==resolve);