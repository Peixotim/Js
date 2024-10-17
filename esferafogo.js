var fireballDistance = 10;
var fireballSpeed = 0.8; // Velocidade da bola de fogo
var maxDistance = 20;    // Distância percorida da esfera 
var yaw, pitch;

function interact(event) {
    fireballDistance = 0; // Reseta a distância ao começar
    yaw = event.npc.getRotation(); // Yaw do NPC
    pitch = event.npc.getPitch();  // Pitch do NPC

    // Tempo entre uma esfera e outra
    event.npc.timers.forceStart(1, 14 , true); 
}

// Função para gerar partículas em um formato esférico
function spawnFireballSphere(world, centerX, centerY, centerZ, radius) {
    var density = 10; // Quantidade de partículas por camada
    for (var i = 0; i <= Math.PI; i += Math.PI / density) { // Para cada camada vertical
        var r = radius * Math.sin(i); // Raio da camada atual
        var y = radius * Math.cos(i); // Altura da camada atual
        for (var j = 0; j < 2 * Math.PI; j += Math.PI / density) { // Para cada ponto na camada
            var x = r * Math.cos(j);
            var z = r * Math.sin(j);
            // Spawn da partícula de chama na posição calculada
            world.spawnParticle("end_rod", centerX + x, centerY + y, centerZ + z, 0, 0, 0, 0, 0);  // Quantidade de Particula Spawnada
        }
    }
}

function timer(event) {
    if (event.id == 1) {
        if (fireballDistance > maxDistance) {
            event.npc.timers.stop(1); // Para a bola de fogo após atingir a distância máxima
        } else {
            var x = event.npc.x;
            var y = event.npc.y + 1.5; // Lançar da altura da cabeça do NPC (ajuste se necessário)
            var z = event.npc.z;

            // Converter yaw e pitch para radianos
            var radYaw = (yaw + 90) * Math.PI / 180;  // Ajuste para alinhar com o Minecraft
            var radPitch = -pitch * Math.PI / 180;    // Pitch ajustado corretamente

            // Calcular deslocamento da bola de fogo
            var dx = Math.cos(radYaw) * Math.cos(radPitch) * fireballSpeed; // Deslocamento X
            var dz = Math.sin(radYaw) * Math.cos(radPitch) * fireballSpeed; // Deslocamento Z
            var dy = Math.sin(radPitch) * fireballSpeed;                    // Deslocamento Y

            // Atualizar a posição da bola de fogo
            var fireballX = x + (dx * fireballDistance);
            var fireballY = y + (dy * fireballDistance);
            var fireballZ = z + (dz * fireballDistance);

            // Gerar a bola de fogo como uma esfera de partículas
            spawnFireballSphere(event.npc.world, fireballX, fireballY, fireballZ, 1.5); // Tamanho da esfera

            // Detectar entidades no caminho da bola de fogo
            var hitEntities = event.npc.world.getNearbyEntities(fireballX, fireballY, fireballZ, 1, 1);
            for (var i = 0; i < hitEntities.length; i++) {
                hitEntities[i].damage(10); // Aplicar dano às entidades atingidas
            }

            // Aumentar a distância percorrida
            fireballDistance += fireballSpeed;
        }
    }
}