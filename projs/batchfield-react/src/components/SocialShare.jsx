import React, { Component } from 'react';


import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';



const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');
const OKIcon = generateShareIcon('ok');
const RedditIcon = generateShareIcon('reddit');


const shareUrl = "https://www.facebook.com/batchfield";



 



class SocialShare extends Component {
  render() {
    return (
     <div>
         <FacebookShareCount url={shareUrl} />
  	     <TwitterIcon size={32} round={true} />
     </div>
    );
  }
}

export default SocialShare;