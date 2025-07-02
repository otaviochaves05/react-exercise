import CounterButton from './components/button'
import './app.css'
import Frame from './components/frame'
import Header from './components/header'


function App() {

  return (
    <>

      <Header></Header>
      <main>
        <section className='frame'>
          <Frame></Frame>
        </section>
        <section className='counter'>
          <p>Quanto você gostou desse filme?</p>
          <CounterButton></CounterButton>
        </section>
      </main>

    </>
  )
}

export default App
