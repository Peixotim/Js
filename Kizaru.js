function damage(e){
    var random = Math.random()*4 - 1
    var random2 = Math.random()*6 - 1
if(e.source.type == 1){
    e.npc.setPostion(e.source.x + random + e.source.y + e.source.z + random2)
    e.npc.particleType(4)
}
}
// O npc precisa ficar teleportando em volta do player
//CustomNPCsEvent()
//setPosition
//setKnockback(0)