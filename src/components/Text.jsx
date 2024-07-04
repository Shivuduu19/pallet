import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

const Text = ({ text, indexed, totalWords }) => {
    const [transformValue, setTransform] = useState(0)
    const [opacityvalue, setOpacityvalue] = useState(0.4)
    const [specificprop, setSpecificProp] = useState(false)
    const wordRef = useRef(null)

    useEffect(() => {
        const key = setInterval(() => {
            wordRef.current.style.transitionDuration = '1000ms'

            setTransform(prev => --prev)
            setSpecificProp(true)

        }, 2000);
        return () => clearInterval(key)
    }, [])
    // console.log(indexed);

    useLayoutEffect(() => {

        if (transformValue === -indexed + 1) {
            setOpacityvalue(1)

        } else if (transformValue === -indexed - 1) {
            setOpacityvalue(0)
        } else if (transformValue === -indexed) {
            setOpacityvalue(0.2)
        } else if (transformValue === -indexed + 2) {
            setOpacityvalue(0.4)
        } else if (transformValue === -indexed + 3) {
            setOpacityvalue(0.2)
        } else if (transformValue === -indexed + 4) {
            setOpacityvalue(0.1)
        } else if (transformValue === -indexed + 5) {
            setOpacityvalue(0.05)
        }
        else {
            setOpacityvalue(0)
        }
        const transitionEnd = () => {
            wordRef.current.style.transitionDuration = '0ms'

            // console.log(-indexed);
            // console.log(transformValue);
            if (transformValue === -indexed - 1) {
                setTransform(totalWords - 1 - indexed)
            }
        }
        document.addEventListener('transitionend', transitionEnd)
        // console.log(document);
        return () => document.removeEventListener('transitionend', transitionEnd)
    }, [transformValue])

    return (
        <div ref={wordRef} style={{ transform: `translate3d(0,${transformValue * 100}%,0)`, opacity: `${opacityvalue}` }} className={`text-[10.4em] transition-[transform,opacity]`}>
            {text}
        </div>
    )
}

export default Text