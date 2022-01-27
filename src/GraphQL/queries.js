import { gql } from "@apollo/client";

export const CHARACTERS = gql`
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