function damaged(e){
    var tabl = 1
    var vida = e.npc.getHealth()
    var maxvida = e.npc.getMaxHealth()
    var nome = "Luffy Gear 3"

    if(e.source.type == 1 && vida < maxvida * 0.4 ){
        e.API.getClones().spawn(e.npc.x,e.npc.y,e.npc.z, tabl, nome, e.npc.getWorld())
        e.npc.despawn()
    }
}