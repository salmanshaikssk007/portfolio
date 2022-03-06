import Styles from './Skills.module.css';
import Card from '../ui_componets/Card';
import about_bg from './../../assets/images/a_bg.jpeg'
import js_icon from './../../assets/images/ab_icons/lang_JS.png'
import java_icon from './../../assets/images/ab_icons/lang_java.png'
import c_icon from './../../assets/images/ab_icons/lang_c.png'
import py_icon from './../../assets/images/ab_icons/lang_py.png'
import sql_icon from './../../assets/images/ab_icons/lang_sql.jpg'
import react_icon from './../../assets/images/ab_icons/tech_react.jpg'
import redux_icon from './../../assets/images/ab_icons/tech-redux.jpg'
import node_icon from './../../assets/images/ab_icons/tech_node.png'
import express_icon from './../../assets/images/ab_icons/tech_express.jpg'
import mongo_db_icon from './../../assets/images/ab_icons/db_mongo.jpg'
import mysql_icon from './../../assets/images/ab_icons/db_mysql.jpg'
import postgresql_icon from './../../assets/images/ab_icons/db_postgre.jpg'
import firebase_icon from './../../assets/images/ab_icons/as_firebase.png'
import git_icon from './../../assets/images/ab_icons/as_git.jpg'
import jest_icon from './../../assets/images/ab_icons/as_jest.png'
import materialUI_icon from './../../assets/images/ab_icons/as_materail_UI.png'
import materialize_icon from './../../assets/images/ab_icons/as_materialize.png'
import bootstrap_icon from './../../assets/images/ab_icons/as_bootstrap.png'

function Skills() {
    return (
        <div className={Styles.about}>
            <div className={Styles.a_left}>
                <Card className = {Styles.a_card_bg}></Card>
                <Card className = {Styles.a_card_img}>
                    <img src={about_bg} className={Styles.a_img} alt="" />
                </Card>
            </div>
            <div className={Styles.a_right}>
                {/* start of card component */}
                <Card className={Styles.a_rt_card}>
                    <h1>Skills</h1>
                    {/* Langauge compartment */}
                    <div className={Styles.main_div}>
                        {/* Langauge title */}
                        <h2>Languages</h2>
                        <hr className={Styles.hr} />
                        {/* Langauges items */}
                        <div className={Styles.div_sub}>
                            <div className={Styles.a_items}>
                                <Card className={Styles.a_item}>
                                    <img className={Styles.a_img_item} src={js_icon} alt="" />
                                </Card>
                            </div>
                            <div className={Styles.a_items}>
                                <Card className={Styles.a_item}>
                                    <img className={Styles.a_img_item} src={java_icon} alt="" />
                                </Card>
                            </div>
                            <div className={Styles.a_items}>
                                <Card className={Styles.a_item}>
                                    <img className={Styles.a_img_item} src={c_icon} alt="" />
                                </Card>
                            </div>
                            <div  className={Styles.break}></div>
                            <div className={Styles.a_items}>
                                <Card className={Styles.a_item}>
                                    <img className={Styles.a_img_item} src={py_icon} alt="" />
                                </Card>
                            </div>
                            <div className={Styles.a_items}>
                                <Card className={Styles.a_item}>
                                    <img className={Styles.a_img_item} src={sql_icon} alt="" />
                                </Card>
                            </div>
                        </div>
                        {/* End of langauge Items */}
                    </div>
                    {/* End of the langauge Component */}
                    {/* ----------------------------------- */}
                    {/* Libraries and Frameworks compartment */}
                    <div className={Styles.main_div}>
                        {/* Libraries and Framework title */}
                        <h2>Frameworks & Libraries</h2>
                        <hr className={Styles.hr} />
                        {/* Libraries and Framework items */}
                        <div className={Styles.div_sub}>
                            <div className={Styles.a_items}>
                                <Card className={Styles.a_item}>
                                    <img className={Styles.a_img_item} src={react_icon} alt="" />
                                </Card>
                            </div>
                            <div className={Styles.a_items}>
                                <Card className={Styles.a_item}>
                                    <img className={Styles.a_img_item} src={redux_icon} alt="" />
                                </Card>
                            </div>
                            <div className={Styles.a_items}>
                                <Card className={Styles.a_item}>
                                    <img className={Styles.a_img_item} src={node_icon} alt="" />
                                </Card>
                            </div>
                            <div  className={Styles.break}></div>
                            <div className={Styles.a_items}>
                                <Card className={Styles.a_item}>
                                    <img className={Styles.a_img_item} src={express_icon} alt="" />
                                </Card>
                            </div>
                        </div>
                        {/* End of Libraries and Frameworks Items */}     
                    </div>
                    {/* End of the Libraries and framework Component */}
                    {/* ----------------------------------- */}
                    {/* Databases compartment */}
                    <div className={Styles.main_div}>
                        {/* Databases title */}
                        <h2>Databases</h2>
                        <hr className={Styles.hr} />
                        {/* database items */}
                        <div className={Styles.div_sub}>
                            <div className={Styles.a_items}>
                                <Card className={Styles.a_item}>
                                    <img className={Styles.a_img_item} src={postgresql_icon} alt="" />
                                </Card>
                            </div>
                            <div className={Styles.a_items}>
                                <Card className={Styles.a_item}>
                                    <img className={Styles.a_img_item} src={mysql_icon} alt="" />
                                </Card>
                            </div>
                            <div className={Styles.a_items}>
                                <Card className={Styles.a_item}>
                                    <img className={Styles.a_img_item} src={mongo_db_icon} alt="" />
                                </Card>
                            </div>
                        </div>
                        {/* End of Database Items */}     
                    </div>
                    {/* End of the Database Component */}
                     {/* ----------------------------------- */}
                    {/* Assessories compartment */}
                    <div className={Styles.main_div}>
                        {/* Orther title */}
                        <h2>Handy with</h2>
                        <hr className={Styles.hr} />
                        {/* Orther items */}
                        <div className={Styles.div_sub}>
                            <div className={Styles.a_items}>
                                <Card className={Styles.a_item}>
                                    <img className={Styles.a_img_item} src={firebase_icon} alt="" />
                                </Card>
                            </div>
                            <div className={Styles.a_items}>
                                <Card className={Styles.a_item}>
                                    <img className={Styles.a_img_item} src={git_icon} alt="" />
                                </Card>
                            </div>
                            <div className={Styles.a_items}>
                                <Card className={Styles.a_item}>
                                    <img className={Styles.a_img_item} src={jest_icon} alt="" />
                                </Card>
                            </div>
                            <div  className={Styles.break}></div>
                            <div className={Styles.a_items}>
                                <Card className={Styles.a_item}>
                                    <img className={Styles.a_img_item} src={materialUI_icon} alt="" />
                                </Card>
                            </div>
                            <div className={Styles.a_items}>
                                <Card className={Styles.a_item}>
                                    <img className={Styles.a_img_item} src={materialize_icon} alt="" />
                                </Card>
                            </div>
                            <div className={Styles.a_items}>
                                <Card className={Styles.a_item}>
                                    <img className={Styles.a_img_item} src={bootstrap_icon} alt="" />
                                </Card>
                            </div>
                        </div>
                        {/* End of Database Items */}     
                    </div>
                    {/* End of the Database Component */}
                </Card>
            </div>
        </div>
    )
}

export default Skills;
;