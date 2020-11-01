setTimeout(
    () => {
        console.log('timeout 1')
        queueMicrotask(() => console.log('microtask 1'))
    },
    0
)
setTimeout(
    () => {
        console.log('timeout 2')
        const promise2 = new Promise((resolve) => { resolve() })
        promise2
            .then(() => console.log('promise 2.1'))
            .then(() => console.log('promise 2.2'))
    },
    0
)
setTimeout(
    () => console.log('timeout 3'),
    0
)

const promise1 = new Promise((resolve) => { resolve() })
const promise2 = promise1
    .then(() => console.log('promise 1.1'))
    .then(() => console.log('promise 1.2'))
const promise3 = promise1
    .then(() => console.log('promise 1.3'))
    .then(() => console.log('promise 1.4'))

console.log('sync 1', promise2, promise3)