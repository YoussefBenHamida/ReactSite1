import { AboutME } from './AbouteMe';
import './App.css';
import Navbar from './Navbar';
import { Projects } from './Projects';
import { ContactMe } from './ContactMe';
import { Footer } from './Footer';


function App() { 
  const cards = [
    { imageUrl : "https://uploads.codesandbox.io/uploads/user/c704fd90-013c-4269-94f5-c0fa2877a166/yX4I-proj.png",
    name : "Project 1",
    text : "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
    href : "#",
    ptohref : "Github Link"
},
    {imageUrl : "https://uploads.codesandbox.io/uploads/user/c704fd90-013c-4269-94f5-c0fa2877a166/yX4I-proj.png",
    name : "Project 2",
    text : "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
    href : "#",
    },
    {imageUrl : "https://uploads.codesandbox.io/uploads/user/c704fd90-013c-4269-94f5-c0fa2877a166/yX4I-proj.png",
    name : "Project 3",
    text : "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
    href : "#",
    },
    {imageUrl : "https://uploads.codesandbox.io/uploads/user/c704fd90-013c-4269-94f5-c0fa2877a166/yX4I-proj.png",
    name : "Project 4",
    text : "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatibus ex natus quis beatae perspiciatis repellat laudantium aliquam.",
    href : "#",
    }
]
  return (
    <>
       <Navbar />
       <AboutME />
      {cards.map((el)=>{
        return (
       <Projects el={el} />
       )})}
       <ContactMe />
       <Footer />
    </>
  );
}

export default App;
