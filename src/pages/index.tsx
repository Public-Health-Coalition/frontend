import React, { FC } from 'react';
import { graphql } from 'gatsby';
import ActivitiesMap from '../containers/home/ActivitiesMap';
import Contributors from '../containers/home/Contributors';
import GetInvolved from '../containers/home/GetInvolved';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Welcome from '../containers/home/Welcome';
import thumbnailPng from '../../content/assets/thumbnail.png'
import {
  HomeQuery,
  DirectusSchool,
  DirectusContributor,
} from '../../generated/types';

type SchoolEdge = HomeQuery['allDirectusSchool']['edges'][0];

export interface HomeProps {
  data: HomeQuery;
}

const Home: FC<HomeProps> = (props: HomeProps) => {
  const { data } = props;
  const schools = data.allDirectusSchool.edges.map(
    (schoolEdge: SchoolEdge) => schoolEdge.node
  ) as DirectusSchool[];
  const contributors = data.allDirectusContributor
    .nodes as DirectusContributor[];
  return (
    <Layout>
      <SEO
        title="Home"
        description={data.site?.siteMetadata?.description || ''}
        thumbnail={thumbnailPng}
      />
      <ActivitiesMap schools={schools} />
      <Welcome />
      <GetInvolved />
      <Contributors contributors={contributors} />
    </Layout>
  );
};

export default Home;

export const pageQuery = graphql`
  query Home {
    allDirectusSchool {
      edges {
        node {
          name
          state
          activities_info {
            details
            status
            id
            created_on
            activity {
              name
              id
              created_on
            }
          }
          status
          id
          created_on
        }
      }
    }
    allDirectusContributor {
      nodes {
        bio
        created_on
        id
        homepage
        name
        photo
        title
        status
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
