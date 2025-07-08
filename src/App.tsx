import Header from './component/Header';
import NavList from './component/NavList';
import CardSection from './component/CardSection'

function App() {

  return (
    <>
      <div className="project-container py-3 bg-Dark-Gradient">
        <Header />
        <NavList />
        <CardSection />
      </div>
    </>
  )
}

export default App;
