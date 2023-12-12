const curry = (fn) => {
    return curried = (...args) => {
        if (args.length >= fn.length) {
            return fn(...args)
        } else {
            return (...addMoreArgs) =>  curry(fn)(...args, ...addMoreArgs);
        }
    }
}

const add = (a, b) => {
    return a + b;
}

const curriedAdd = curry(add);

console.log(curriedAdd(2)(4));