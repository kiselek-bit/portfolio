import React from "react";
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Evgene Kisel</h2>
                <div className={style.socialContainer}>
                        <div className={style.image}></div>
                        <div className={style.image}></div>
                        <div className={style.image}></div>
                        <div className={style.image}></div>
                </div>
                <div>© Evgene Kisel 2020  All right reserved</div>
            </div>
        </div>
    )
}