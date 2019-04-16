import React from 'react';
import Bookmark from '../Bookmark/Bookmark';
import styled from 'styled-components';
import { Reddit } from 'styled-icons/fa-brands/Reddit';
import { Youtube } from 'styled-icons/boxicons-logos/Youtube';
import { Email } from 'styled-icons/material/Email';
import { Github } from 'styled-icons/boxicons-logos/Github';
import './Bookmarks.css';

const RedditIcon = styled(Reddit)`
  height: 50px;
  width: 100%;
`;

const YoutubeIcon = styled(Youtube)`
  height: 50px;
  width: 100%;
`;

const GmailIcon = styled(Email)`
  height: 50px;
  width: 100%;
`;

const GithubIcon = styled(Github)`
  height: 50px;
  width: 100%;
`;

let urls = [
  {
    title: 'Gmail',
    url: 'https://www.google.com/gmail',
    icon: <GmailIcon />
  },
  {
    title: 'Github',
    url: 'https://www.github.com/',
    icon: <GithubIcon />
  },
  {
    title: 'Youtube',
    url: 'https://www.youtube.com/',
    icon: <YoutubeIcon />
  },
  {
    title: 'Reddit',
    url: 'https://www.reddit.com/',
    icon: <RedditIcon />
  }
];

let [gmail, github, youtube, reddit] = urls;

function Bookmarks() {
  return (
    <div className="bookmarks">
      <Bookmark href={gmail.url} icon={gmail.icon} title={gmail.title} />
      <Bookmark href={github.url} icon={github.icon} title={github.title} />
      <Bookmark href={youtube.url} icon={youtube.icon} title={youtube.title} />
      <Bookmark href={reddit.url} icon={reddit.icon} title={reddit.title} />
    </div>
  );
}

export default Bookmarks;
