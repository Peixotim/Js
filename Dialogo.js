function dialogOption(e){
var permissions = {
    p1 : "tag.donor",
    p2 : "tag.viplus",
    p3 : "tag.prime",
    p4 : "tag.titan",
    p5 : "tag.mvp"
}
if (player.hasPermission(permissions.p1)) {
    // a quest ira funcionar;
}else if(player.hasPermission(permissions.p2)){

}else if(player.hasPermission(permissions.p3)){

}else if(player.hasPermission(permissions.p4)){

}else if(player.hasPermission(permissions.p5)){
    //Colocar a quest permitida
    //Colocar um bloqueador na ação

}
}
//Oque ainda falta a fazer: Adicionar um "bloqueador nas permissions", pois o cargo viplus que possui a permissão de donor também, não pode fazer a quest do cargo donor
//, e fazer um limitador fazendo com que o player so consiga fazer a quest uma vez somente, não podendo repetir
