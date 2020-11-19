function ensure(value){
  if(value === undefined){
    throw new Error('value must be provided')
  }
  return value;
}
