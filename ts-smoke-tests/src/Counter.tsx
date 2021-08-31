import React from 'react'
function Counter() {
  const [val, set] = React.useState(0);
  return (<div>
    <button onClick={() => set(val+1)}>Increment</button>
    <button onClick={() => set(val-1)}>Decrement</button>
    <p>Value {val}</p>
  </div>)
}
export default Counter