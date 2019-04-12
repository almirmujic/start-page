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

function Bookmarks() {
  return (
    <div className="bookmarks">
      <Bookmark icon={<GmailIcon />} title={'Gmail'} />
      <Bookmark icon={<GithubIcon />} title={'Github'} />
      <Bookmark icon={<YoutubeIcon />} title={'Youtube'} />
      <Bookmark icon={<RedditIcon />} title={'Reddit'} />
    </div>
  );
}

export default Bookmarks;
