import gql from 'graphql-tag';

const RepoInfo = gql`
    fragment RepoInfo on Entry {
      createdAt
      repository {
        description
        stargazers_count
        open_issues_count
      }
      postedBy {
         html_url
         login
      }
    }
`;
export default RepoInfo;
