import Cell2 from './Cell2'
import Cell from './Cell'
import { CellState, SelectedBeat } from '../../models/beats'

interface Props {
  trackNumber: number
  steps: number
  reset: boolean
  handleCellStateChange: (cellID: string, newIsActive: boolean) => void
  cellStates: CellState[] // Use CellState[] to define it as an array of objects
}

export default function Track({
  trackNumber,
  steps,
  reset,
  handleCellStateChange,
  cellStates,
}: Props) {
  const cells = [...Array(steps).keys()]

  return (
    <div id={`track-${trackNumber}`} className="track">
      <button
        className="track-instrument-text"
        style={{ minWidth: '60px', textAlign: 'left' }}
      >
        {['', '808', 'Clap', 'Tap', 'Hihat', 'Snare', 'Kick'][trackNumber]}
      </button>
      {cells.map((cell) => {
        if (trackNumber === 0) {
          return (
            <Cell2 key={cell} trackNumber={trackNumber} cellNumber={cell} />
          )
        } else {
          return (
            <Cell
              key={`cell-${trackNumber}-${cell}`}
              trackNumber={trackNumber}
              cellNumber={cell}
              reset={reset}
              handleCellStateChange={handleCellStateChange}
              cellStates={cellStates}
            />
          )
        }
      })}
    </div>
  )
}
