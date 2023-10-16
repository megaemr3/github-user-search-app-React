import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LaunchIcon from '@mui/icons-material/Launch';
import HomeWorkIcon from '@mui/icons-material/HomeWork';

function Card(props) {
    console.log("Card is rendered")
    return  <div className="info-container">

    <img src={props.userInfo.avatar_url}></img>
    
    <div className="info-head">
    <span>{props.userInfo.name ? props.userInfo.name : props.userInfo.login}</span>
    <span>{`Joined ${props.userInfo.created_at}`}</span>
    <a>@{props.userInfo.login}</a>
    </div>
    
    <span className="bio-text">{props.userInfo.bio ? props.userInfo.bio : "This profile has no bio"}</span>

    <div className="numbers">
     <span>Repos</span>
     <span>Followers</span>
     <span>Following</span>
     <span>{props.userInfo.public_repos}</span>
     <span>{props.userInfo.followers}</span>
     <span>{props.userInfo.following}</span>
    </div>

    <div className="link-section">
       <a><LocationOnIcon />{props.userInfo.location ? props.userInfo.location : "Not Available"}</a>
       <a><TwitterIcon />{props.userInfo.twitter_username ? props.userInfo.twitter_username : "Not Available"}</a>
       <a><LaunchIcon />{props.userInfo.blog ? props.userInfo.blog : "Not Available"}</a>
       <a><HomeWorkIcon />{props.userInfo.company ? props.userInfo.company : "Not Available"}</a>
    </div>

  </div>;
}

export default Card;