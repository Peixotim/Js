        var attacker = event.getSource()
        function damaged(event){
            ; // Obtém quem atacou o NPC (entidade de origem do dano)
            if (attacker.getType() == 1) {
                attacker.sendMessage("Voce inicou o combate com esse npc!")
                if (!npc.hasTempData('combatplayer')) {
                    npc.setTempData('combatplayer',attacker.getName())
                } else if (attacker.getName() != npc.getTempData('combatplayer')) {
                        attacker.sendMessage("&d&lVocê não é o &d&ljogador que &d&liniciou o combate com &d&leste &d&lNPC");
                        event.setCanceled(true);
                };
            };
        }

        setTimeout(() =>{
            attacker = event.getSource()
        },15000)