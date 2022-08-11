module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) return false;
    let re = '';
    for (let o = 0; o < str.length*str.length*2; o++) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            for (let j = 0; j < str.length; j++) {
                re = bracketsConfig[i][0] + bracketsConfig[i][1]
                str = str.replace(re, '')
            }
        }
    }
    if (str === '') {
        return true
    }
    else {
        return false
    }
}
