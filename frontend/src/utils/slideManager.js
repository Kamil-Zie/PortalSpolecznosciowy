import React, { useState, useEffect } from 'react';
import styles from '../static/css/slideManager.module.css'

const SlideManager = (props) =>
{
    return(
        <div className={styles.slideIn}>
            {props.children}
        </div>
    )
}

export default SlideManager