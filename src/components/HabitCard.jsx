function HabitCard ({ titulo, meta, ativo = true, diasFeitos = 0,
categoria = 'Geral' }) {
  const metaAtingida = diasFeitos >= meta

  const mensagemMeta = metaAtingida
    ? 'Meta da semana atingida!'
    : `${diasFeitos} de ${meta} dias concluidos`

  return (
    <div className="habit-card">
      <h3>{titulo} </h3>
      <p>{mensagemMeta}</p>
      <p><small>Categoria: {categoria}</small></p>

      {/* Ternario: dois resultados possiveis */}
      <p>{ativo ? 'Status: Ativo' : 'Status: Pausado'}</p>
      {/* &&: um resultado ou nada */}
      {metaAtingida && (
          <p>Parabéns! Você manteve a sequência essa semana!</p>
      )}
    </div>
   )  
}

export default HabitCard