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
            <>
                <div className={`${styles.background} ${fade ? styles.fadeOut : styles.fadeIn}`} onClick={() => setFade(true)} onAnimationEnd={() => onClose()} />
                <div className={styles.content}>
                    {props.children}
                </div>
            </>
        )
    }
    else
    {
        return(<></>)
    }
}

export default PopupManager