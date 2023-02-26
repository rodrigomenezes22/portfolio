import './App.css';

import {useState, useEffect} from 'react';
import Header from './Components/Header';
import linkedin  from "./images/linkedin.svg"
import github  from "./images/github.svg"
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import MyWork from './Components/MyWork';
import Languages from './Components/Languages';
import Contact from './Components/Contact'

function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [value, setValue] = useState(null);
  const [ city, setCity ] = useState('Wandlitz');
  const [weatherMain, setWeatherMain] = useState('')

  const fetchWeatherData = async () => {
    const API_KEY = '0d53df882698d933ae3b477ddb4be424';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const data = await response.json();
    setWeatherData(data);
    setWeatherMain(data.weather[0].main);
  };
  
  const temperatureCelsius = weatherData && weatherData.main ? Math.ceil((weatherData.main.temp - 273.15).toFixed(2)) : null;

  useEffect(() => {
    fetchWeatherData();
  }, []);


  useEffect(() => {
    console.log(weatherMain);
    weatherData && determineValue(weatherMain);
  }, [weatherData]);


    const determineValue = weatherMain => {

        switch (weatherMain) {
          case 'Clear':
            return'sunny';
          case 'Clouds':
            return 'cloud';
          case 'Rain':
            return 'rainy';
          case 'Snow':
            return 'cloudy_snowing';
          case 'Mist':
            return 'cloud';
          case 'Haze':
            return 'cloud';
          case 'Thunderstorm':
            return 'thunderstorm';
          case 'Drizzle':
            return 'rainy';
          default:
            return 'unknow';

      }


    }

    const [workPortfolio, setWorkPortfolio] = useState([{ name: "Chomp",
                                                          description: "Bootcamp project using React, Bootstrap and Contentful",
                                                          image: "images/chomp.jpg",
                                                          url: "https://genuine-khapse-443a51.netlify.app/"
                                                        },
                                                        { name: "Tekvisual",
                                                        description: "CSS Maintenance on Wordpress and PHP",
                                                        image: "images/tekvisual.jpg",
                                                        url: "https://www.tekvisual.com/"
                                                        },
                                                        { name: "95 Towing",
                                                        description: "Simple PHP Website, Logo Design and Web Design.",
                                                        image: "images/95towing.jpg",
                                                        url: "https://www.95towing.com/"
                                                        },
                                                        { name: "B2C Data",
                                                        description: "Simple PHP Website, Logo Design and Web Design.",
                                                        image: "images/b2cdata.jpg",
                                                        url: "https://www.b2cdata.com/"
                                                        },
                                                        { name: "Project Gewerbe",
                                                        description: "Design and some front end work symfony.",
                                                        image: "images/projectgewerbe.jpg",
                                                        url: "https://www.project-gewerbe.com/"
                                                        },
                                                        { name: "Tajam",
                                                        description: "HTML5 and CSS Challenge during bootcamp",
                                                        image: "images/tajam.jpg",
                                                        url: "https://rodrigomenezes22.github.io/creative-agency/"
                                                        },
                                                      ]);


    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };


  return (
    <div className="App">
      <Header linkedin={linkedin} github={github} scrollToTop={scrollToTop} />
      <Hero temperatureCelsius={temperatureCelsius} city={city} determineValue={determineValue} weatherMain={weatherMain} />
      <About />
      <Skills />
      <MyWork workPortfolio={workPortfolio} />
      <Languages />
      <Contact />
    </div>
  );
}

export default App;