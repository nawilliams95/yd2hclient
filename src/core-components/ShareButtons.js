import React from 'react';
import PropTypes from 'prop-types';
import { Facebook, Twitter, Tumblr, Pinterest } from 'react-sharingbuttons';
import ShareIcon from '@material-ui/icons/Share';

export default function ShareButtons(props) {
    const { post } = props;
    const url = `http://localhost:3000/${post.id}/blog`
    const shareText = 'Check out this great post I saw on Young Dumb 20Sumthin\'/ Hopeful.com!'
    const tumblr = {
        title: `${post.title}`,
        caption: 'Check out this great post I saw on Young Dumb 20Sumthin\'/ Hopeful.com!',
        content: url,
    }

    const buttonsWrapperStyles = {
        marginTop: 10,
    }

    return (
        <>
            <div style={buttonsWrapperStyles}>
                <ShareIcon fontSize="small" />
                <Facebook url={url} />
                <Pinterest url={url} shareText={shareText} mediaSrc={url} />
                <Tumblr
                    url={url}
                    title={tumblr.title}
                    caption={tumblr.caption}
                    content={tumblr.content}
                />
                <Twitter url={url} shareText={shareText} />

            </div>
        </>
    )

}

ShareButtons.propTypes = {
    posts: PropTypes.object,
};