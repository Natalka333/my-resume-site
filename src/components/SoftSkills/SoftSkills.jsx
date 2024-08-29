import css from './SoftSkills.module.css'

const SoftSkills = () => {
    return (
        <div>
            <h2>SOFT SKILLS</h2>

            <ul className={css.soft_container}>
                <li>Teamwork</li>
                <li>Responsibility</li>
                <li>Communicative</li>
                <li>Attention to detail</li>
            </ul>

        </div>
    )
}

export default SoftSkills
