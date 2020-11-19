function formatDate(userDate){
  let result = new Date(userDate.split('/'))
  return result.toISOString().slice(0, 10).split('-').join('')
}
