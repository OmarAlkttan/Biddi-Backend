# NestJS Backend Test - API Documentation

Welcome to the NestJS Backend Test project! This repository contains the model, API documentation and authentication solution for the backend test.

# Authentication Documentation

This document provides an overview of the authentication solution implemented in the backend project. The authentication system uses JSON Web Tokens (JWT) for access control, refresh tokens for seamless token renewal, and social providers for user convenience.

## Authentication Flow

The authentication flow in the backend project follows these steps:

1. **User Registration:**
   - Users can register with the system using their email and password.
   - Upon successful registration, the backend creates a user account and stores the hashed password in the database.

2. **User Login with Email and Password:**
   - Users can log in with their registered email and password.
   - The backend validates the credentials and issues an access token (JWT) and a refresh token.
   - The access token contains user information, such as user ID and role, and is short-lived.
   - The refresh token is long-lived and used to obtain a new access token when it expires.

3. **Token Rotation and Refresh:**
   - When the access token expires, the client can send the refresh token to the backend to get a new access token.
   - The backend verifies the refresh token's validity and, if valid, issues a new access token with a new expiration time.
   - The old refresh token is invalidated, and a new one is issued to rotate the tokens.

4. **Social Authentication Providers:**
   - Users can log in using social authentication providers like Google, Facebook, or Twitter.
   - The client-side application initiates the authentication flow with the respective social provider.
   - On successful authentication, the backend receives user information from the social provider and either links it to an existing user account or creates a new user account.
