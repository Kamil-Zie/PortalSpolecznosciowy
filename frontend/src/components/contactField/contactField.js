import React from 'react';
import styles from "./css/contactField.module.css"
const ContactField = (props) => {
    return (
        <>
        <div className={`${props.isBlured?(styles.blured):""}`}>
            <div className={`${styles.contactBlock}`}>
                <div className={`${styles.contactPic}`}></div>
                <div className={`${styles.contactNameMessage}`}>
                    <div className={`${styles.contactName}`}>
                        <p><strong>Julia Julianowska</strong></p>
                    </div>
                    <div className={`${styles.contactMessage}`}>
                        <p>Ty: Hej!</p>
                    </div>
                </div>
                <div className={`${styles.contactArrow}`}>

                </div>
            </div>
            <div className={`${styles.line}`}>
                
            </div>
        </div>
        </>
    );
}
export default ContactField;