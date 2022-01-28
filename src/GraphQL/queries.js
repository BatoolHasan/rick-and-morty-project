import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
query Characters {
    characters{
        results{
          id,
          name,
          status,
          species,
          gender,
          origin{
            id,
            name
          },
          location{
            id,
            name
          },
          image,
          episode{
            id,
            name
          },
          created
        }
      }
}
`;
export const GET_CHARACTER= gql`
query Character($id:ID!) {
    character(id:$id){
          id,
          name,
          status,
          species,
          gender,
          origin{
            id,
            name
          },
          location{
            id,
            name
          },
          image,
          episode{
            id,
            name
          },
          created
      }
}
`;