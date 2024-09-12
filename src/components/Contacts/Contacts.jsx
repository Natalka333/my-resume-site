import { FaGithub, FaTelegram, FaLinkedin } from 'react-icons/fa';
import css from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={css.contacts_conteiner}>
            <h2>CONTACTS</h2>
            <p><b>Natalia Trehubenko</b></p>
            <p>(098)-752-80-50</p>
            <p>nataly.111.0479@gmail.com</p>
            <p>Kharkiv, Ukraine</p>
            <a href="https://github.com/Natalka333" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>

            <a href="https://t.me/Nata04666" target="_blank" rel="noopener noreferrer"><FaTelegram /> Telegram</a>
            <a href="https://www.linkedin.com/in/nataly-trehubenko-266520287/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
        </div>
    )
}

export default Contacts