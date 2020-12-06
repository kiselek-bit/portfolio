import React from "react";
import style from './Work.module.css'

export const Work = () => {
    return (
        <div className={style.work}>
                <div className={style.image}>
                    <div className={style.button}>Watch</div>
                </div>
                <div className={style.descriptionBlock}>
                    <h4>Project name</h4>
                    <span className={style.description}>
                        Lorem ipsum dortn affn afx efasvjdle vsdvssi jhvkew fsergrgt brnty
                    </span>
                </div>
        </div>
    )
}