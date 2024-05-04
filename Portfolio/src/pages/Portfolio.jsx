import ProjectCard from "../componets/Project";

const projects = [
    {
        name: 'Pizzateca Romana',
        repoUrl: 'https://github.com/SergMalyshka/Pizzoteca-Romana',
        deployedUrl: 'https://stormy-journey-39722-b2e17c23bcea.herokuapp.com/',
        img: 'assets/pizzatecca-romana.jpg',
        alt: 'A website with an italian flag background with the title "Welcome to Pizzateca Romana"',
        id: 1
    },
    {
        name: 'Rendered Recipies',
        repoUrl: 'https://github.com/Adpileggi/agile-avengers',
        deployedUrl: 'https://adpileggi.github.io/agile-avengers/',
        img: 'assets/rendered-recipes.png',
        alt: 'A blue background with the map of the USA with pins in different regions',
        id: 2
    },
    {
        name: 'CMS Style Blog',
        repoUrl: 'https://github.com/Adpileggi/blog-board',
        deployedUrl: 'https://warm-retreat-52419-3804ed1ee780.herokuapp.com/',
        img: 'assets/cms-blog.png',
        alt: 'A homepage of a blog displaying different post',
        id: 3
    },
    {
        name: 'Note Taker App',
        repoUrl: 'https://github.com/Adpileggi/note-taker',
        deployedUrl: 'https://immense-forest-43018-a605e302e7d2.herokuapp.com/',
        img: 'assets/note-taker-demo.gif',
        alt: 'A demo showing how one can use the webage to take notes',
        id: 4
    },
    {
        name: 'Weather Dashboard',
        repoUrl: 'https://github.com/Adpileggi/weather-dashboard',
        deployedUrl: 'https://adpileggi.github.io/weather-dashboard/',
        img: 'Portfolio/src/assets/weather-screenshot.png',
        alt: 'A webpage with displaing a five day forcast',
        id: 5
    },
    {
        name: 'Timed Quiz',
        repoUrl: 'https://github.com/Adpileggi/timed-quiz',
        deployedUrl: 'https://adpileggi.github.io/timed-quiz/',
        img: 'assets/timedquiz.png',
        alt: 'A webpage displaying the start of a quiz',
        id: 6
    }
]

function Portfolio() {
    return (
        <div>
            <ProjectCard projects={projects} />
        </div>
    )
}

export default Portfolio;