function damaged(e){
    var vida = e.npc.getHealth();
    var maxvida = e.npc.getMaxHealth();
    var facas = "";
    var tabl1 = 1;
    var tabl2 = 2;
    var nome1 = "facasbuggy"
    var nome2 = "martelobuggy"
    var animation = e.API.createAnimBuilder()
        
    if(!e.npc.getStoreddata().has("vida") && e.source != null && e.source.type == 1 && vida < maxvida * 0.8){
        e.npc.getStoreddata().put("vida",vida)
        e.API.getClones().spawn(e.npc.x,e.npc.y,e.npc.z, tabl1, nome1, e.npc.getWorld())
        //Quando buggy chegar a 80% de vida as facas spawnaram em volta dele, com a animação e aw invisiveis
        animation.addAnimation(nome1)
    }
    if(!e.npc.getStoreddata().has("vida") &&e.source != null && e.source.type == 1 && vida < maxvida * 0.6){
        e.npc.getStoreddata().put("vida",vida)
        e.API.getClones().spawn(e.npc.x,e.npc.y,e.npc.z, tabl2, nome2, e.npc.getWorld())
        e.source.message("Segura então Otario!")
        //Quando buggy chegar a 60% de vida o martelo spawnara e fará a animação
        animation.addAnimation(nome2)
    }
    if(!e.npc.getStoreddata().has("vida") && e.source != null && e.source.type == 1 && vida < maxvida * 0.40){
        e.npc.getStoreddata().put("vida",vida)
        e.API.getClones().spawn(e.npc.x,e.npc.y,e.npc.z, tabl2, nome2, e.npc.getWorld())
        e.source.message("Acha que to morrendo?, Então segura essa!")
        //Quando buggy chegar a 40% de vida o martelo spawnara e fará a animação
        animation.addAnimation(nome2)
    }
}