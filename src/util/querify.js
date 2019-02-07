export default function querify(str) {
    var reserved = ['$', '&', '+', ',', ':', ';', '=', '?', '@']
    var newStr = '';
    for (var i = 0; i < str.length; i++) {
        if (reserved.indexOf(str[i]) !== -1) {
            if (str[i] === '$') {
                newStr+= '%24' 
            }
            if (str[i] === '&') {
                newStr+= '%26'
            }
            if (str[i] === '+') {
                newStr+= '%2B'
            }
            if (str[i] === ',') {
                newStr += '%2C'
            }
            if (str[i] === ':') {
                newStr += '%3A'
            }
            if (str[i] === ';') {
                newStr += '%3B'
            }
            if (str[i] === '=') {
                newStr += '%3D'
            }
            if (str[i] === '?') {
                newStr += '%3F'
            } 
            if (str[i] === '@') {
                newStr += '%40'
            }
        }
        else {
            newStr += str[i]
        }
    }
    return newStr
}