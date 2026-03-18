import { useState, useEffect, useRef } from 'react'
import HabitCard from './HabitCard'

function HabitList() {
  const [habits, setHabits] = useState(() => {
    const stored = localStorage.getItem('my-daily-habits')
    if (!stored) return [
      { id: 1, nome: 'Exercício',  descricao: 'Treino de força',   meta: 5, ativo: true,  diasFeitos: 5 },
      { id: 2, nome: 'Leitura',    descricao: 'Livro ou artigo',   meta: 7, ativo: true,  diasFeitos: 3 },
      { id: 3, nome: 'Meditação',  descricao: 'Respiração e foco', meta: 7, ativo: false, diasFeitos: 0 },
      { id: 4, nome: 'Hidratação', descricao: 'Beber 2L de água',  meta: 7, ativo: true,  diasFeitos: 6 },
    ]
    try { return JSON.parse(stored) } catch { return [] }
  })

  const [novoNome, setNovoNome] = useState('')
  const [novaDescricao, setNovaDescricao] = useState('')
  const [novaCategoria, setNovaCategoria] = useState('')
  const [erroNome, setErroNome] = useState('')
  const nomeInputRef = useRef(null)

  useEffect(() => {
    localStorage.setItem('my-daily-habits', JSON.stringify(habits))
  }, [habits])

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'novoNome') {
      setNovoNome(value)
      if (value.length > 0 && value.length < 3) {
        setErroNome('O nome deve ter pelo menos 3 caracteres.')
      } else {
        setErroNome('')
      }
    }
    if (name === 'novaDescricao') setNovaDescricao(value)
    if (name === 'novaCategoria') setNovaCategoria(value)
  }

  const removerHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id))
  }

  const adicionarHabit = (event) => {
    event.preventDefault()
    if (!novoNome.trim()) {
      alert('Informe um nome para o hábito.')
      return
    }
    if (erroNome) {
      nomeInputRef.current?.focus()
      return
    }
    const novoHabit = {
      id: Date.now(),
      nome: novoNome,
      descricao: novaDescricao,
      meta: 7,
      ativo: true,
      diasFeitos: 0,
      categoria: novaCategoria || 'Geral',
    }
    setHabits(prev => [...prev, novoHabit])
    setNovoNome('')
    setNovaDescricao('')
    setNovaCategoria('')
    nomeInputRef.current?.focus()
  }

  return (
    <section>
      <form onSubmit={adicionarHabit} className="habit-form">
        <div>
          <label htmlFor="nome">Nome do hábito *</label>
          <input
            id="nome"
            type="text"
            name="novoNome"
            value={novoNome}
            onChange={handleChange}
            ref={nomeInputRef}
          />
          {erroNome && <p style={{ color: 'red', fontSize: '0.8rem' }}>{erroNome}</p>}
        </div>
        <div>
          <label htmlFor="descricao">Descrição</label>
          <input
            id="descricao"
            type="text"
            name="novaDescricao"
            value={novaDescricao}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="categoria">Categoria</label>
          <input
            id="categoria"
            type="text"
            name="novaCategoria"
            value={novaCategoria}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Adicionar hábito</button>
      </form>

      <ul>
        {habits.length === 0 && <p>Nenhum hábito cadastrado ainda. Que tal começar?</p>}
        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            nome={habit.nome}
            descricao={habit.descricao}
            meta={habit.meta}
            ativo={habit.ativo}
            diasFeitos={habit.diasFeitos}
            onRemover={() => removerHabit(habit.id)}
          />
        ))}
      </ul>
    </section>
  )
}

export default HabitList