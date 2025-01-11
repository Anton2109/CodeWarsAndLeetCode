function isPalindrome(str) {
    let cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');
    
    return cleanedStr === cleanedStr.split('').reverse().join('');
};

console.log(isPalindrome('А роза упала на лапу Азора'));