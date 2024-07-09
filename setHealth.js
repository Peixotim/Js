function damaged(e){
    var vida = e.npc.getHealth()
    var maxvida = e.npc.getMaxHealth()
if(e.source.type == 1 && vida < maxvida * 0.8 ){
    e.npc.setHealth(maxvida + 10)
}
}