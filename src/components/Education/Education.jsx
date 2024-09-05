import css from './Education.module.css'

const Education = () => {
    return (
        <>
            <h3>IT School GoIT</h3>
            <div>
                <p className={css.education}>2023-2024</p>
                <p className={css.education}>Fullstack Developer</p>
            </div>
        </>

    )
}

export default Education