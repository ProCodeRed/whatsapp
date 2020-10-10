import React from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import './Sidebar.css'
import { IconButton, Avatar } from '@material-ui/core';
import SidebarChat from './SidebarChat';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__headerLeft">
                    <Avatar src="https://scontent.fluh1-1.fna.fbcdn.net/v/t1.0-1/cp0/p50x50/87343060_616082552290469_3568868500124467200_o.jpg?_nc_cat=100&_nc_sid=7206a8&_nc_ohc=JFqGVIYXVdcAX9gF78O&_nc_ht=scontent.fluh1-1.fna&_nc_tp=27&oh=24887f4b2fcd4749f898045151dc859b&oe=5FA39CDA" />
                </div>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
