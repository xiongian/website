import './App.css'

function Button( {button_name} ) {
  return <button>{button_name}</button>
}

function Header() {
  return (
    <div>
      <Button button_name="mech"/>
      <Button button_name="home"/>
      <Button button_name="software"/>
    </div>
  )
}

function Footer() {
  return (
    <div>
      <p>2025 Ian Xiong</p>
      <Button button_name="github"/>
      <Button button_name="linkedin"/>
      <Button button_name="Twitter"/>
    </div>
  )
}

function App() {
  return (
    <>

    <div>
      <Header/>
    </div>

    <body>


    </body>

    <div> <Footer /> </div>
    


    <h1>Ian's Website</h1>
      
    </>
  )
}

export default App
