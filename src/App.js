import './App.css';
import { TiFlash } from 'react-icons/ti'
import { BsSuitHeartFill } from 'react-icons/bs'
import { BsCalculator } from 'react-icons/bs'
import { FiLink } from 'react-icons/fi'
import { TiWeatherCloudy } from 'react-icons/ti'
import { IoMdCard } from 'react-icons/io'

function App() {
  return (
    <div className="container-home">
      <div className="main-home">
        <h1>Hi, I'm Lia!</h1>
        <h3>Front End developer</h3>
        <p>Experience in web development. Passionate about creativity and technology.</p>
        <p>Powered by high-impact web solutions.</p>
        <TiFlash color='gold' size={40} />
        <BsSuitHeartFill size={90} />
        </div>

        <div className='portfolio'>
          <div className='projects-intro'>
            <h2>Projects</h2>
          </div>

          <div className='projects'>
            <div className='calculator'>
              <span>Calculator App</span>
              <BsCalculator size={70}/>
              <a href="https://liafer.github.io/calculator-app" target="_blank" rel="external">View Project</a>
            </div>

            <div className='link'>
              <span>URL shortener</span>
              <FiLink size={70}/>
              <a href="https://liafer.github.io/" target="_blank" rel="external">View Project</a>
            </div>

            <div className='weather'>
              <span>Weather App</span>
              <TiWeatherCloudy size={70}/>
              <a href="https://liafer.github.io/weather-app" target="_blank" rel="external">View Project</a>
            </div>

            <div className='pricing'>
              <span>Pricing Cards</span>
              <IoMdCard size={70} />
              <a href="https://liafer.github.io/pricing-component" target="_blank" rel="external">View Project</a>
            </div>
          </div>

        </div>
        
    </div>
  );
}

export default App;
