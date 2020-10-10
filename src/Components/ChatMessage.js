import React from 'react'
import './Chat.css'

const ChatMessage = () => {
    return (
        <p className="chat__message">
                    <span className="chat__name">Vipin</span>
                    This is a msg
                    <span className="chat__timestamp">
                        {new Date().toTimeString()}
                    </span>
        </p>
    )
}

export default ChatMessage
