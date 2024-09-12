import css from './WorkExperience.module.css'

const WorkExperience = () => {
    return (
        <div>
            <h2>WORK EXPERIENCE</h2>
            <h3>Client service manager</h3>
            <ul className={css.experience}>
                <li>Communication with clients</li>
                <li>Task planning and monitoring</li>
                <li></li>
            </ul>
            <p> <b>Achiement:</b> 100% positive feedback from our clients
            </p>

            <h3>Logistician</h3>
            <ul className={css.experience}>
                <li>Execution of documents</li>
                <li>Delivery support
                </li>
                <li>Compliance with delivery deadlines</li>
            </ul>
            <p> <b>Achiement:</b> Compliance with cargo delivery deadlines
                .</p>

        </div>
    )
}

export default WorkExperience
