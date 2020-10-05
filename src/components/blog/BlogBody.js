import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function BlogBody(props) {
  const classes = useStyles();
  const { posts} = props;

  return (
    <Grid item xs={12} md={8}>
      {posts.map((post) => (
      <>
      <Typography variant="h6" gutterBottom>
        {post.title}
      </Typography>
      <Divider />
          <section className={classes.markdown} key={post.id}>
            {post.content} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu nisi, accumsan ac ultrices a, rutrum vitae ligula. Fusce eros magna, iaculis eu ornare vel, tempor vitae diam. Vivamus et enim sodales, euismod felis at, tempor ligula. Fusce a libero massa. Morbi ac vehicula tellus. In sagittis consectetur vehicula. Nam hendrerit blandit elit, vel euismod nisi pellentesque eu. Curabitur vestibulum metus nec urna fringilla, sit amet iaculis nunc scelerisque. Pellentesque volutpat finibus sapien, sit amet dignissim metus convallis id. In sagittis varius ante id pellentesque. 
        </section>
          <Button size="small" color="secondary" href={`${post.id}/blog`} >
            Continue reading...
         </Button>
        </>
      ))}
    </Grid>
  );
}

BlogBody.propTypes = {
  posts: PropTypes.array,
};