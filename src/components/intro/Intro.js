import Styles from './Intro.module.css'
import me from './../../assets/images/myPic.png'
import Typewritting from '../ui_componets/Typewritting';

function Intro() {
    return (
        <div className={Styles.intro}>
           <div className={Styles.introLeft}>
               <div className={Styles.iLeftWrapper}>
                   <h2 className={Styles.iIntro}>Hey there i'm</h2>
                   <h2 className={Styles.iName}>Salman Shaik</h2>
                <div className={Styles.title}>
                        <div className={Styles.titleWrapper}>
                            <div className={Styles.titleItem}>          
                            <Typewritting />
                            </div>
                        </div>
                </div>
                <p className={Styles.desc}>
                    UI plays a main role in developing product . Product with good UI stand out to their competitors . I , as a frontend developer can develop modular and scalable solutions for your product . 
                </p>
            </div>
          
           </div>
           <div className={Styles.introRight}>
             <div className={Styles.bg}></div>
             <img src={me} alt="" className={Styles.img} />
           </div>
        </div>
    )
}

export default Intro;
