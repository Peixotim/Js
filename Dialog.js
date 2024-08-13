function DialogOpen(e){
    var player = 300*Math.PI/180
    var distance = 3
    var xp = -Math.sin(player)
    var xz = Math.cos(player)

    var x = player.getPostion()+xp;
    var y = player.getPostion()+1 ;
    var z = player.getPostion()+xz ;
    e.npc.setPostion(x+distance,y,z)
    e.npc.say("Boo!")
}

//Então, o player vai abrir o diálogo com o NPC e o NPC vai dar tp 3 blocos atrás do player,  e mandar alguma mensagem no chat, pode ser um "Boo!", entende?
//Quando o player abrir o diálogo, o NPC dar tp 3 blocos atrás do player, e depois de uns 5 segundos que é o tempo do player ver o NPC atrás dele, o NPC volta pro lugar default.