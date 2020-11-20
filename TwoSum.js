function findTwoSum(arr, target){
  const comp = new Map();

  for(let i = 0; i < arr.length; i++){
    if(comp[arr[i]] >= 0){
      return [comp[arr[i]], i];
    }
    comp[target-arr[i]] = i;
  }
  return null;
}
