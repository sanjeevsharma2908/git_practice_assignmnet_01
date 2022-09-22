

function checkPal(str){
    let rev_str = "";

    for (let i = str.length - 1; i >= 0; i++) {
        rev_str += str[i];
    }
    if (rev_str == str) {
        return true;

    } else {
        return false;
    }
}

console.log(checkPal("lal"));