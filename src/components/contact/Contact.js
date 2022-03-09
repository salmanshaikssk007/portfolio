import Styles from './Contact.module.css'
import Address from './../../assets/img/address.png'
import Email from './../../assets/img/email.png'
import emailjs from '@emailjs/browser';
import { useRef , useState } from 'react' ;



function Contact() {

     const formRef = useRef();
     const [ done , setDone] = useState(false)
    

     const submitHandler = (e) =>{
         e.preventDefault();
        
         emailjs
         .sendForm
         ('service_r1kuy9i',
          'template_1vvanp9',
           formRef.current,
            '7b_u-VInbWVRAoyof')
        .then(
            (result) => {
                setDone(true);
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
        );
     }

    return (
        <div className={Styles.contact}>
            <div className={Styles.c_bg}></div>
                <div className={Styles.c_wrapper}>
                    <div className={Styles.c_left}>
                    <h1 className={Styles.c_title}>Let's get in touch </h1>
                        <div className={Styles.c_info}>
                            <div className={Styles.c_info_item}>
                            <img className={Styles.c_icon} src={Email} alt="" />
                            salmanshaikssk007@gmail.com
                            </div>
                            <div className={Styles.c_info_item}>
                            <img className={Styles.c_icon} src={Address} alt="" />
                            Guntur , Andhra pradesh , India
                            </div>
                        </div>    
                    </div>    
                    <div className={Styles.c_right}>
                         <p className={Styles.c_desc}>
                            Looking forward for good Opportunity !!! . Let me help to introduce myself . seen you soon . Have a nice day . 
                        </p>
                        {/* <form ref={formRef} onSubmit={handleSubmit}>
                            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                            <button>Submit</button>
                            {done && "Thank you..."}
                        </form>     */}

                        <form action="" ref={formRef} onSubmit={submitHandler}>
                            <input type="text"  placeholder='Name' name='user_name'/>    
                            <input type="text" id='subject' placeholder='Subject'  />
                            <input type="text" id='email' placeholder='Email' name='user_email'/>
                            <textarea name="user_message"  placeholder='message' rows = '10'  cols="30" ></textarea>
                            <button type='submit'>Submit</button>
                            <br />
                            { done && <p className={Styles.stateText}>Thank you !</p>}
                        </form>
                    </div>
                </div>
                <p className={Styles.footer}>Designed by salman &copy; 2022</p>
        </div>
    )
}

export default Contact ;
