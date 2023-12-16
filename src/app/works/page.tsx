
import BackgroundGenerator from '../../../public/backgroundgenerator.png'
import ScientificCalculator from '../../../public/scientificcalc.png'
import Skuix from '../../../public/skuix.png'
import TempConverter from '../../../public/tempconverter.png'
import TextToSpeech from '../../../public/texttospeech.png'
import TicTacToe from '../../../public/tictactoe.png'
import ToDoList from '../../../public/todolist.png'
import VisioSearch from '../../../public/visiosearch.png'
import WeatherApp from '../../../public/weatherapp.png'
import WordRiddle from '../../../public/wordriddle.png'
import SIMS from '../../../public/sims.png'

const projects = [
  {
    id: 1,
    title: 'Student Information System Portal',
    detail: 'This is a multi-user Student LMS having portals for Student, Teachers and Admins',
    image: SIMS,
  },
  {
    id: 2,
    title: 'Scientific Calculator',
    detail: 'A digital calculator built with basic scientific calculator operations',
    image: ScientificCalculator,
  },
  {
    id: 3,
    title: 'Quiz Application',
    detail: 'General Knowldege multiple choice questions based Quiz app',
    image: Skuix
  },
  {
    id: 4,
    title: 'Temperature Converter',
    detail: 'Temperature converter between multiple different degrees of temperature',
    image: TempConverter
  },
  {
    id: 5,
    title: 'Text-to-Speech Converter',
    detail: 'Text written by the user will be converted into speech of their choice accents',
    image: TextToSpeech
  },
  {
    id: 6,
    title: 'Tic-Tac-Toe Game',
    detail: 'A simple tic-tac-toe game built to be played between multiple users',
    image: TicTacToe
  },
  {
    id: 7,
    title: 'To-Do-List Application',
    detail: 'A simple to do list application to manage the day to day tasks of anyone',
    image: ToDoList
  },
  {
    id: 8,
    title: 'Visio Search',
    detail: 'A search engine to find any image which are needed based on the keywords',
    image: VisioSearch
  },
  {
    id: 9,
    title: 'Weather Application',
    detail: 'An application built to know the temperature of any city or place in the world',
    image: WeatherApp
  },
  {
    id: 10,
    title: 'Word RIddle Game',
    detail: 'A word game built in order to guess the words based on the hints being provided',
    image: WordRiddle
  },
  {
    id: 11,
    title: 'Background Generator',
    detail: 'A small module to generate gradient colors',
    image: BackgroundGenerator 
  },
];

const MyWorks = () => {
  return (
    <section className="bg-gradient-to-r from-gray-700 to-black text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">
          My Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg">
              <img
                src={project.image.src}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.detail}</p>
              <button className="bg-gradient-to-r from-blue-200 to-blue-400 text-white rounded-full py-2 px-4 transition duration-300 hover:opacity-80 focus:outline-none">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
