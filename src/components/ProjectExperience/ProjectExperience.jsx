import css from './ProjectExperience.module.css'

const ProjectExperience = () => {
    return (
        <>
            <h2>PROJECT EXPERIENCE</h2>
            <div className={css.project}>
                <a href="https://natalka333.github.io/goit-markup-hw-07/" target="_blank" rel="noopener noreferrer">
                    <b>WebStudio</b>
                </a>
                <p>
                    [HTML, CSS]</p>
                <p>

                    The project is a HTML and CSS-based design, built with best practices. The Mobile First approach is used in style development. This approach ensures optimal display of content on all devices and improves performance on mobile devices.

                </p>

                <a href="https://natalka333.github.io/goit-js-hw-11/" target="_blank" rel="noopener noreferrer">
                    <b>Gallery images</b>
                </a>
                <p>
                    [ Java Script, HTML, CSS, Parcel, Pixabay API, Notiflix, SimpleLightbox]
                </p>
                <p>

                    A search and view application developed using Javascript, HTML, CSS and built with Parcel. The application utilizes Pixabay’s public API to perform a keyword image search. This frontend application features a user-friendly interface and large version display functionality to make searching and viewing images easy for users.

                </p>

                <a href="https://goit-react-hw-05-gamma-beryl.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <b>Filmoteka</b>
                </a>
                <p>
                    [ React, React Router,REST API, VITE, React.lazy, Suspense,CSS Modules]
                </p>
                <p className={css.project_p}>

                    A movie-searching application created with React, React Hooks and React Router using Vite and deployed on Vercel. It allows users to search movies by title using data from TMDB service via HTTP-requests. The application clearly demonstrates an ability to search for movies and provides detailed pages with information about each movie.

                </p>

                <a href="https://goit-react-hw-08-beta-umber.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <b>Phonebook</b>
                </a>
                <p>
                    [ React, React Router, Redux , Redux Persist, JWT, API, VITE, React.lazy, Suspense,CSS Modules, Formik, React Hot Toast,]
                </p>
                <p>
                    Phonebook is a web application for managing a personal collection of contacts with support for user registration and authorization functions. The application allows users to register, log in, create, edit and delete their contacts. Other key features include JWT authentication, private routes for contact pages security, visual notifications to improve user experiences and a simple and easy-to-use interface for contact management.

                </p>
            </div>

        </>
    )
}

export default ProjectExperience
