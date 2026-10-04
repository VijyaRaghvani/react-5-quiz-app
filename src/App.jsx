import { useState } from 'react'
const questions = [
  { q: 'React is a ___ ?', options: ['Framework', 'Library', 'Database', 'Language'], a: 1 },
  { q: 'Which hook manages state?', options: ['useEffect', 'useRef', 'useState', 'useMemo'], a: 2 },
  { q: 'JSX stands for?', options: ['JavaScript XML', 'Java Syntax Extension', 'JSON XML', 'JavaScript Extra'], a: 0 },
  { q: 'Which command creates a Vite build?', options: ['npm start', 'npm run build', 'npm test', 'npm init'], a: 1 },
  { q: 'Props in React are?', options: ['Mutable', 'Read-only', 'Global state', 'CSS rules'], a: 1 },
]
export default function App() {
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const done = i >= questions.length
  const choose = n => { if (picked !== null) return; setPicked(n); if (n === questions[i].a) setScore(score + 1) }
  const next = () => { setPicked(null); setI(i + 1) }
  const restart = () => { setI(0); setPicked(null); setScore(0) }
  if (done) return (
    <div className="box"><h1>Quiz Finished</h1><h2>Score: {score} / {questions.length}</h2><button onClick={restart}>Restart</button></div>)
  const q = questions[i]
  return (
    <div className="box">
      <p>Question {i + 1} of {questions.length}</p>
      <h2>{q.q}</h2>
      {q.options.map((o, n) => (
        <button key={o} className={`opt ${picked !== null ? (n === q.a ? 'ok' : n === picked ? 'bad' : 'alt') : 'alt'}`} onClick={() => choose(n)}>{o}</button>))}
      {picked !== null && <button onClick={next}>{i + 1 === questions.length ? 'Finish' : 'Next'}</button>}
    </div>
  )
}
