<p align="center">
  <h1 align="center">Node + Mongo APIs</h1>

  <p align="center">
    <h3 align="center">Node + Mongo APIs to get, add, delete and update user database. Admin authentication is managed by JSON Web Tokens.</h3>
    <br />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#documentation">Documentation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is the backend code for a Node + Mongo backend with APIs to get, add, delete and update user database. Update, add and delete feature requires Admin authorisation which is managed by JSON Web Tokens.
<br />
<br />

### Built With
[<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white">](https://nodejs.org/en/)
[<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">](https://expressjs.com/)
<br />


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm

### Installation


1. Clone the repo

2. Install NPM packages
   ```sh
   npm install
   ```
3. Ceate a `.env` file and enter following values in it
   ```JS
   PORT = 'ENTER YOUR PREFERRED POST HERE'
   MONGO_DB_URI = 'YOUR MONGO DB URI'
   TOKEN_KEY = 'A STRING FOR ENCODING JSON WEB TOEKNS'
   ```
4. Start the server
   ```JS
   node app.js
   ```
   The server will listen on PORT `5000`.

## Documentation

The Documentation for the APIs can be found in `./apidoc/index.html`

<!-- USAGE EXAMPLES -->
## Usage

Feel free to use and modify it any way you want.

<!-- CONTACT -->
## Contact

[<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">](https://www.linkedin.com/in/siddhant-kumar-singh-/) [<img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></img>](mailto:singhsiddhantkumar@gmail.com)
