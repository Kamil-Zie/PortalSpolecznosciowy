import React, { useState, useEffect, } from 'react';
import styles from '../static/css/popupManager.module.css'

const PopupManager = (props) =>
{
    return(
        <>
            <div className={styles.background} />
            <div className={styles.content}>
                {props.children}
            </div>
        </>
    )
}

export default PopupManager