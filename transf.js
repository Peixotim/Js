function interact(e){
  // var player = e.source
  var player = e.player
  var item = e.player.getMainhandItem()

  var conversa = "§a§lSeu Tp foi setado bom aproveito!"
  var conversa2 = "§4§lVocê não possui o papel requisitado!"

  if(item != null && item.getDisplayName() == "§4§l- 10 Milhões de TP -"){
    var nome = player.getName()
    e.npc.executeCommand("jrmctp 10000000 " + nome);
    e.player.removeItem(item, 1)
   e.npc.say(conversa)
  } else{
 e.npc.say(conversa2)
  }
}