import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import docs from './README.md';
import { NewsCard, ProjectCard, ResourceCard } from '.';

const sharedProps = {
  imgSrc:
    'https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg',
  name: 'Foobar',
  title: 'Article title sits below',
  description:
    'Cards can have descriptions for context that only span a few lines',
  label: 'Topic',
  to: '/',
  buttonText: 'Read more',
};

const CardContainer = ({ children }) => (
  <Container style={{ marginTop: '1rem' }}>
    <Grid container spacing={5} justify="center">
      {children}
    </Grid>
  </Container>
);

CardContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

storiesOf('Components|Cards', module)
  .addParameters({
    jest: ['card'],
    readme: {
      sidebar: docs,
    },
  })
  .add('News', () => (
    <CardContainer>
      <NewsCard {...sharedProps} />
    </CardContainer>
  ))
  .add('News without img', () => (
    <CardContainer>
      <NewsCard {...{ ...sharedProps, imgSrc: null }} />
    </CardContainer>
  ))
  .add('Project', () => (
    <CardContainer>
      <ProjectCard
        {...sharedProps}
        imgSrc="http://www.hixle.co/wp-content/uploads/Gatsby-JS-min.jpg"
      />
    </CardContainer>
  ))
  .add('Project full-width', () => (
    <CardContainer>
      <ProjectCard
        {...sharedProps}
        imgSrc="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png"
        fullWidth
        square
      />
    </CardContainer>
  ))
  .add('Resource', () => (
    <CardContainer>
      <ResourceCard
        {...sharedProps}
        imgSrc="data:image/png;base64,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"
      />
    </CardContainer>
  ));
