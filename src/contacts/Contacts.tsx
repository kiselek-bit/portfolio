import React from "react";
import style from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <div className={style.formContainer}>
                    <form className={style.form}>
                        <input/>
                        <input/>
                        <textarea/>
                    </form>
                </div>
                <div className={style.button}>Sent</div>
            </div>
        </div>
    )
}