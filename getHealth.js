var vida = e.npc.getHealth();
var maxvida = e.npc.getMaxHealth();

function damaged(e) {
  e.source.message(vida);
  if (e.source.type === 1) {
    if (vida < maxvida * 0.8) {
      e.source.message("Ai ! que dor é esta?");
    }
  }
}
