import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      companyName
      bio
      photoType
      location
      link
      reservationCost
      image
    }
  }
`;

export const QUERY_USER_LOCATION = gql`
  query user($location: String!) {
    user(location: $location) {
      _id
      username
      email
      companyName
      bio
      photoType
      location
      link
      reservationCost
      image
    }
  }
`;