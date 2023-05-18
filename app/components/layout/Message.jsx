import styles from './Message.module.css'
import React, { useState, useEffect } from 'react';


function Message({ msg, type, time }) {

    const [visible, setVisible] = useState(false)
    const [opacity, setOpacity] = useState(100)

    useEffect(() => {

        if (!msg) {
            setVisible(false)
            return
        }

        setVisible(true)
        setOpacity(100)

        const timer = setTimeout(() => {
            setVisible(false)
        }, time)

        const opacityTimer = setTimeout(() => {
            setOpacity(0)
        }, time-200)
        
        return () => {
            clearTimeout(opacityTimer)
            clearTimeout(timer)
        }
        
    }, [msg])

    return (
        <>
            {visible && (
                <div className={`${styles.message} ${styles[type]} transition-all`} style={{opacity:opacity}}><span style={{whiteSpace: 'pre-line'}}>{msg}</span></div>
            )}
        </>)
}


export default Message;