const findModulus = (x, y) => {
    const e = x / y;

    if (e === 0) {
        return 0
    }

    return (x - (y * Math.floor(e)))
}

const inverseModulus = (mod, res) => {

}

//test
console.log(0 % 1);
console.log(findModulus(0,1)); 