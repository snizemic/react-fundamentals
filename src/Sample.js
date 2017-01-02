const sample = () => {

    let foo = [1, 2, 3, 4, 5, 6, 7];

    const result = foo.reduce((previous, current) => {
        return previous + ' - ' + current;
    });

    console.log(result);
}

export default sample;