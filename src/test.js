

const array = ['javascript', 'php', 'html'];

function logger(ar) {
    const [a, ...rest] = ar;

    console.log(a);
    console.log(...rest);
}

logger(array);

export default logger;