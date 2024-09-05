import css from './ProjectExperience.module.css'

const ProjectExperience = () => {
    return (
        <>
            <h2>PROJECT EXPERIENCE</h2>
            <div className={css.project}>
                <a href="https://natalka333.github.io/goit-markup-hw-07/" target="_blank" rel="noopener noreferrer">
                    WebStudio
                </a>
                <p>
                    [HTML, CSS]</p>
                <p>
                    Проект представляет собой верстку с использованием HTML и CSS, выполненную с учетом лучших практик. При разработке стилей используется подход Mobile First.
                    Этот подход обеспечивает оптимальное отображение контента на всех устройствах и улучшает производительность на мобильных устройствах.
                </p>

                <a href="https://natalka333.github.io/goit-js-hw-11/" target="_blank" rel="noopener noreferrer">
                    Gallery images
                </a>
                <p>
                    [ Java Script, HTML, CSS, Parcel, Pixabay API, Notiflix, SimpleLightbox]
                </p>
                <p>
                    Приложение для поиска и просмотра изображений разработано с использованием JavaScript, HTML, CSS и собирается с помощью Parcel. Приложение использует публичный API сервиса Pixabay для получения изображений по ключевому слову.
                    Это фронтенд-приложение позволяет пользователям легко искать и просматривать изображения с удобным интерфейсом и функциональностью отображения больших версий картинок.
                </p>

                <a href="https://goit-react-hw-05-gamma-beryl.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Filmoteka
                </a>
                <p>
                    [ React, React Router,REST API, VITE, React.lazy, Suspense,CSS Modules]
                </p>
                <p className={css.project_p}>
                    Приложение для поиска фильмов создано с использованием React, React Hooks и React Router с помощью Vite и развернуто на Vercel. Оно позволяет пользователям искать фильмы по названию, используя данные с сервиса TMDB через HTTP-запросы.Приложение наглядно демонстрирует возможности поиска фильмов с детализированными страницами для каждого фильма и информации о нем
                </p>

                <a href="https://goit-react-hw-08-beta-umber.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Phonebook
                </a>
                <p>
                    [ React, React Router,REST API, VITE, React.lazy, Suspense,CSS Modules]
                </p>
                <p>
                    Приложение для поиска фильмов создано с использованием React, React Hooks и React Router с помощью Vite и развернуто на Vercel. Оно позволяет пользователям искать фильмы по названию, используя данные с сервиса TMDB через HTTP-запросы.Приложение наглядно демонстрирует возможности поиска фильмов с детализированными страницами для каждого фильма и информации о нем
                </p>
            </div>

        </>
    )
}

export default ProjectExperience
