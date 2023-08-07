import { gql } from '@apollo/client';
export type LoginData = {
    createUser: {
      user: {
        _id: string
        name: string
        phone: string
        email: string
        password: string
      }
    }
  }
  
  export type LoginVariables = {
    email: string
    password: string
  }
  export const LOGIN_USER = gql`
  mutation ($email: String!, $password: String!, $name: String!) {
    createUser(user: { email: $email, password: $password}) {
      user {
        _id
        name
        email
        phone
        }
    }
  }
`