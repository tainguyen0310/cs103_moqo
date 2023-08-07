import { gql } from '@apollo/client';
export type RegisterData = {
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
  
  export type RegisterVariables = {
    email: string
    password: string
    phone: string
    name: string
  }
  export const REGISTER_USER = gql`
  mutation ($email: String!, $password: String!, $name: String!) {
    createUser(user: { email: $email, password: $password, name: $name }) {
      user {
        _id
        name
        email
        phone
        }
    }
  }
`