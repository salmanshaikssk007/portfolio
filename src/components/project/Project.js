import Styles from './Project.module.css'

function Project(props) {
    return (
        <div className={Styles.p}>
            <div className={Styles.p_browser}>
                <div className={Styles.p_circle}></div>
                <div className={Styles.p_circle}></div>
                <div className={Styles.p_circle}></div>
            </div>
            <a href={props.link} target="_blank" rel="noreferrer">
                <img src={props.img} alt="" className={Styles.p_img} />
            </a>
        </div>
    )
}

export default Project
