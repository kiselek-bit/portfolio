import React from "react";
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return(
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"React"} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, '}/>
                    <Skill title={'JavaScript'} description={'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.'}/>
                    <Skill title={'Redux'} description={'amet, consectetur adipisicing elit'}/>
                </div>
            </div>
        </div>
    )
}