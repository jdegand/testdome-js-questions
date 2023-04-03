function createCheckDigit(membershipId) {
    let sum = membershipId.split('').reduce((a, c) => {
         a+=parseInt(c);
         return a;
    }, 0);
  
    // have to convert the sum back to a string  
  
    return sum >= 10 ? createCheckDigit(sum.toString()) : sum;

}

console.log(createCheckDigit("55555"));
