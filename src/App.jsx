import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/contacts/contactUs'
import FrontPage2 from './components/home/FrontPage2'
import Services from './components/services/Services.jsx';
import Footer from './components/footers/Footer';
function App() {
  return (
    <>
      <FrontPage2 />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}
export default App
