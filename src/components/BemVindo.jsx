const BemVindo = ({ nomeUsuario, totalHabitos}) => {
  const nomeFormatado = nomeUsuario.toUpperCase()

  const mensagem = totalHabitos > 0
    ? `Voce tem ${totalHabitos} hábito(s) cadastrados(s).`
    : 'Nenhum hábito cadastrado ainda. Que tal começar?'

  return (
    <>
      <h2>Olá, {nomeFormatado}!</h2>
      <p>{mensagem}</p>
    </>  
  ) 
}
export default BemVindo