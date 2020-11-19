// 75%

function createCheckDigit(membershipId){
  const initialValue = 0;

  const numbers = Array.from(membershipId);

  const reducer = (acc, item)=> {
    return Number(acc) + Number(item)
  }

  const total = numbers.reduce(reducer, initialValue)

  let string = total.toString();

  if(string.length > 1){
    let ss = string.split('');
    return Number(ss[0]) + Number(ss[1])
  }
    return Number(total)
}
