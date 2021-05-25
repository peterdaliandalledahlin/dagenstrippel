import Header from './components/Header'
import About from './components/About'
import User from './components/User'
// ${await User()}

async function App() {
  const template = document.createElement('template')
  template.innerHTML = `
    <div class="container-fluid p-0">
      ${Header()}
    </div>
    <div class="container">
      ${About()}
      ${await User()}
    </div>
  `
  // Return a new node from template
  return template.content.cloneNode(true)
}

export default App;