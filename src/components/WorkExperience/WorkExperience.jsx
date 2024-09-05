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
            <p className={css.eperience_p}> <b>Achiement:</b> 100% положительные отзывы от наших клиентов</p>

            <h3>Logistician</h3>
            <ul className={css.experience}>
                <li>Оформление документов</li>
                <li>Сопровождение поставки</li>
                <li>Соблюдение сроков доставки</li>
            </ul>
            <p className={css.eperience_p}> <b>Achiement:</b> Соблюдение сроков доставки груза.</p>

        </div>
    )
}

export default WorkExperience
