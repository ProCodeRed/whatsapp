import React from 'react';
import './ChatFooter.css';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';

const ChatFooter = () => {
    return (
        <div className="chat__footer">
             <EmojiEmotionsOutlinedIcon />
             <form>
                 <input
                    placeholder="Type a message"
                    type="text"
                 />
                 <button type="submit">Send a message</button>
            </form>  
            <MicOutlinedIcon /> 
        </div>
    )
}

export default ChatFooter;
