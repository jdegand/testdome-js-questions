function newMessage(topicName){
  if(document.querySelector(`[data-topic-name="${topicName}"]`)){
    return document.querySelector(`[data-topic-name="${topicName}"]`)
    .style.backgroundColor = "red";
  }
}
