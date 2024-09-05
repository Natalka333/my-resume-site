import css from './TechSkills.module.css'

const TechSkills = () => {
    return (
        <div>
            <h2>TECH SKILLS</h2>

            <ul className={css.tech_container}>
                <li>HTML5/CSS</li>
                <li>Responsive/Adaptive design</li>
                <li>GIT</li>
                <li>Java Script</li>
                <li>React</li>
                <li>Redux</li>
                <li>REST API</li>
                <li>VITE</li>
                <li>Vercel</li>
                <li>Webpack</li>
                <li>Parcel</li>
                <li>Node.js</li>
            </ul>
        </div>
    )
}

export default TechSkills
