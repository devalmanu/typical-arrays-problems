// let min = [1, 2, 3, 4];
// let max = [1, 2, 3, 4];
// let arr = [1, 2, 3, 4];

exports.min = function (array) {
    if (!array || !array.length) {
        return 0;
    }
    return Math.min(...array);

}

exports.max = function max(array) {
    if (!array || !array.length) {
        return 0;
    }
    return Math.max(...array);
}

exports.avg = function avg(array) {
    if (!array || !array.length) {
        return 0;
    }
    return array.reduce((sum, item) => sum + item, 0) / array.length;

}
