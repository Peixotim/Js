function damaged(e){

var vida = e.npc.getHealth()
var maxvida = e.npc.getMaxHealth()

e.source.message(vida)
if(e.source.type == 1){
if(vida < maxvida * 0.8){
    e.source.message("Ai fdp ta doendo")
}
}
}