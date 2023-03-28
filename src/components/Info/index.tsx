import { useStore } from '@nanostores/preact'

import { count, increment, decrement } from "../../store/count"

export default function Info() {
  const current_count = useStore(count)

  return <>
    <h1>Info</h1>
    <div>
      <button type="button" className="button" onClick={increment}>Increment</button>
      <span>&emsp;</span>
      <button type="button" className="button" onClick={decrement} disabled={current_count < 1}>Decrement</button>
    </div>
  </>
}
