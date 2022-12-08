import React, { useState, useEffect } from 'react';
import styles from '../static/css/slideManager.module.css'

const SlideManager = (props) =>
{
    const [slide, setSlide] = useState(false)
    const [fade, setFade] = useState(false)

    useEffect(() => {
        setSlide(false);
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
            <div>
                <div className={styles.background} onClick={() => setFade(true)} onAnimationEnd={() => onClose()}/>
                <div className={styles.slide}>
                    {props.children}
                </div>
            </div>
            // <div className={fade ? styles.fadeOut : styles.fadeIn} onAnimationEnd={() => onClose()}>
            //     <div className={styles.content}>
            //         {props.children}
            //     </div>
            // </div>
        )
    }
    else
    {
        return(<></>)
    }
}

export default SlideManager