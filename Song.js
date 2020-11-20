class Song {
  name;
  nextSong;

  constructor(name){
    this.name = name;
  }

  isRepeatingPlaylist(){
    let bank = new Set();
    let currentSong = this;

    while(true){
      if(currentSong.nextSong == undefined){
        return false;
      }else if(!bank.has(currentSong.nextSong.name)){
        bank.add(currentSong.name);
        currentSong = currentSong.nextSong;
      }else {
        return true;
      }
    }
  }
}
