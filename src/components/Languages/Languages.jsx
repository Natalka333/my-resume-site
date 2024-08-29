import css from './Languages.module.css'

const Languages = () => {
    return (
        <div>
            <h2>LANGUAGES</h2>
            <ul className={css.languages}>
                <li>English - Upper-Intermediate</li>
                <li>Ukrainian-Native</li>
                <li>Russian-Native</li>
            </ul>

        </div>
    )
}

export default Languages
