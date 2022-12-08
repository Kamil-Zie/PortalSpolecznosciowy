import React, { useState, useEffect, } from 'react';
import styles from '../static/css/popupManager.module.css'

const PopupManager = (props) =>
{
    const [fade, setFade] = useState(false)

    useEffect(() => {
        setFade(false);
    }, [props.show])

    const onClose = () => {
        if(fade)
        {
            props.onClose();
        }
    }

    if(props.show)
    {
        return(
            <div className={fade ? styles.fadeOut : styles.fadeIn} onAnimationEnd={() => onClose()}>
                <div className={styles.background} onClick={() => setFade(true)}/>
                <div className={styles.content}>
                    {props.children}
                </div>
            </div>
        )
    }
    else
    {
        return(<></>)
    }
}

export default PopupManager