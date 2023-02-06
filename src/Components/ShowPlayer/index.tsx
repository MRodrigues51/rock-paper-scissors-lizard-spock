import { ShowDivPlayer } from './styles'


interface ShowPlayersProps {
  valuePlayer: number | undefined
  valueMachine: number | undefined
}
export function ShowPlayer({ valuePlayer, valueMachine }: ShowPlayersProps) {
  return (
    <div>
      <span>Valor de Player: {valuePlayer}</span>
      <span>Valor de Player: {valueMachine}</span>
    </div>
  )
}
