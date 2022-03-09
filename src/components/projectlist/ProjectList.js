import Styles from './ProjectList.module.css'
import Project from '../project/Project';
import { projects } from './../../data'

function ProjectList() {
    return (
        <div className={Styles.pl}>
             <div className={Styles.pl_texts}>
                <h1 className={Styles.pl_title}>Learn & create . Let's look at my projects</h1>
                <p className={Styles.pl_desc}>
                 In Process of building projects , i Just learned a lot . so i love developing projects .
                </p>
            </div>
            <div className={Styles.pl_list}>
                {projects.map((item) => (
                <Project key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default ProjectList;
