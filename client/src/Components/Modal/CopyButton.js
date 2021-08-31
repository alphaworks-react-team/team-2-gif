import React, {useState} from 'react'
import {MdCheckBox, MdContentCopy} from 'react-icons/md'


const CopyButton = (props) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        props.onClick()
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 7000);
    }

    const divStyles = {
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // flexWrap: 'no-wrap',
        
    }

    return (
        <div>
            {copied ? (
                <div style={divStyles}>
                        <MdCheckBox style={{color: 'green', fontSize: '30px'}}/>
                        <h3>Copied!</h3>
                </div>
            ) : (
                <div onClick={handleCopy} style={divStyles}>
                        <MdContentCopy onClick={handleCopy} style={{color: "violet", fontSize: '30px', }} />
                        <h3>Copy</h3>
                </div>
            )}
        </div>
    )
}

export default CopyButton
