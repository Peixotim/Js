function dialogClose(e){
    var player = e.player
    var npc = e.npc
    
    var angle = 0 //Este angulo e baseado em um triangulo ou sejá 45 graus, 90 graus e por ae vai, como a bola de fogo e continua e reta será 0
    var pitch = 40 //Altura onde a bola de fogo irá spawnar
    var distance = 1 //Essa distancia tem que ser continua ou sejá começar do 1 e ir até o 10

    for(var i = 0;i<36;++i){ 
        for(var j = -9;j<9;++j){ 
        var deltas = FrontVectors(npc,i*10,j*10,pitch,0)


        var X = npc.x +deltas[0]
        var Y = npc.y+1+deltas[1]
        var Z = npc.z +deltas[2]
        npc.world.spawnParticle("flame",X,Y,Z,0,0,0,0,1)
        }
    }


}
function FrontVectors(entity,dr,dp,distance,Mode){
    if(Mode == 0){
        var Angle = dr*Math.PI/180
        var Pitch = dp*Math.PI/180
    }
    if(Mode == 1){
        var Angle = (dr + entity.getRotation())*Math.PI/180
        var Pitch = (dp + -entity.getPitch())*Math.PI/180
    }

 
    var dx = -Math.sin(Angle)*distance*Math.cos(Pitch)
    var dy = Math.sin(Pitch)*distance
    var dz = Math.cos(Angle)*distance*Math.cos(Pitch)
    return[dx,dy,dz];//O array é este
}

// talvez adicionar negativo no var dx = -Math.sin(angle)