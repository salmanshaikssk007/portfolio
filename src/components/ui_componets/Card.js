import Styles from './Card.module.css'

function Card(props) {
    const styles = `${Styles.card} ${props.className}`;
    return (
        <div className= {styles}>
            {props.children}
        </div>
    )
}

export default Card ;
