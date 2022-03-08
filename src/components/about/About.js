import Styles from './About.module.css'
import Card from '../ui_componets/Card';
import about_me_img from './../../assets/images/about_me.jpg'

function About() {
   
    return (
        <div className={Styles.about}>
            <div className={Styles.a_left}>
                <Card className={Styles.info_card}>
                    <h2 className={Styles.info_h2}>About me</h2>
                    <p className={Styles.info_p}>
                        Learning to code has been a diffucult and intresting journey . In each step of the journey they are a lot of   diffucult task where i failed . Being patience and overcomming each faliure with a innovative thought process made be a good developer . Now i feel that i can deliver good UI to the product using HTML ,  CSS , Javascript . 
                        After having a deep knowledge at most commonly used WEB API's , funtional programming and Object oriented programming . Started next phase in my journey ....
                        
                    </p>   
                    <br />
                    <p className={Styles.info_p}>
                        I'm aware this is a fast growing modern Industry . So My journey continuted towards Framework react and i started building few projects over react framework where i learned how we can deliver a product from clent side but in developing process when we need to add server side to the product started learning server side programming with node js and came across database like mongo db , postgreSql , mysql and my Journey continues ......
                    </p> 
                    <br />
                    <p className={Styles.info_p}>
                        I'm a developer because i'm inspired to create a better world for people where we can make their tasks easier , to make them more productive and i love to learn about tech and process ideas into products using tech . Here these projects are a great example of that .    
                    </p>
                </Card>
            </div>
            <div className={Styles.a_right}>
                
                    <Card className = {Styles.a_card_bg}></Card>
                    <Card className = {Styles.a_card_img}>
                        <img src={about_me_img} className={Styles.a_img} alt="background" />
                    </Card>
            </div>
        </div>
    );
};

export default About;
