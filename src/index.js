/**
 * @api {post} /signup Register new admins
 *
 * @apiName Register new admins
 *
 * @apiGroup non-admins
 *
 * @apiSuccess  {json} message Admin registered successfully
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *        message: "Successfully signed up.",
 *    }
 *
 *@apiPermission none
 *
 *@apiBody {String} username Admin's username
 *@apiBody {String} password Admin's password
 *
 *@apiSampleRequest localhost:3000/signup
 *
 *@apiError {json} incomplete_input All inputs are required.
 * @apiErrorExample {json} incomplete_input:
 *     HTTP/1.1 400 All inputs are required.
 *    {
 *      message: 'All inputs are required.',
 *    }
 *
 *@apiError (Error 5xx) {json} error Sign up unsuccessful
 * @apiErrorExample {json} error:
 *    HTTP/1.1 500 Sign up unsuccessful.
 *   {
 *     message: 'Sign up unsuccessful.',
 *     error: error
 *   }
 *
 *@apiError {json} username_unavailable Username already exists
 * @apiErrorExample {json} username_unavailable:
 *     HTTP/1.1 409 Username already exists
 *    {
 *      message: 'Username already exists',
 *    }
 **/

/**
 * @api {post} /login Admin login
 *
 * @apiName login new admins
 *
 * @apiGroup non-admins
 *
 * @apiSuccess  {json} message Successfully signed in
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *        message: "Successfully signed up.",
 *        token: bearer-token,
 *    }
 *
 *@apiPermission none
 *
 *@apiBody {String} username Admin's username
 *@apiBody {String} password Admin's password
 *
 *@apiSampleRequest localhost:3000/login
 *
 *@apiError {json} incomplete_input All inputs are required.
 * @apiErrorExample {json} incomplete_input
 *     HTTP/1.1 400 All inputs are required.
 *    {
 *      message: 'All inputs are required.',
 *    }
 *
 *@apiError (Error 5xx) {json} error Login unsuccessful
 * @apiErrorExample {json} error:
 *    HTTP/1.1 500 Login unsuccessful.
 *   {
 *     message: 'Login unsuccessful.',
 *     error: error
 *   }
 *
 *@apiError {json} username_unavailable Username not found
 * @apiErrorExample {json} username_unavailable
 *     HTTP/1.1 404 Username not found
 *    {
 *      message: 'Username not found',
 *    }
 *
 *@apiError {json} incorrect_password Password is incorrect
 * @apiErrorExample {json} incorrect_password
 *     HTTP/1.1 403 Password is incorrect
 *    {
 *      message: 'Password is incorrect',
 *    }
 **/

/**
 * @api {get} /getUser Get all users
 *
 * @apiName Get all users
 *
 * @apiGroup non-admins
 *
 * @apiSuccess  {json} foundUsers An array of found users
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *        "foundUsers": [
 *           {
 *               "_id": "623f7dc6fc8a3320445b6073",
 *               "firstName": "Geralt",
 *               "lastName": "of Rivia",
 *               "age": 20,
 *               "createdAt": "2022-03-26T20:55:34.897Z",
 *               "__v": 0
 *           },
 *           {
 *               "_id": "623f7dd4fc8a3320445b6075",
 *               "firstName": "Adarsh",
 *               "lastName": "Singh",
 *               "age": 15,
 *               "createdAt": "2022-03-26T20:55:48.920Z",
 *               "__v": 0
 *           },
 *           {
 *               "_id": "623f7ddefc8a3320445b6077",
 *               "firstName": "Shivam",
 *               "lastName": "Sharma",
 *               "age": 16,
 *               "createdAt": "2022-03-26T20:55:58.389Z",
 *               "__v": 0
 *           },
 *           {
 *               "_id": "623f7de6fc8a3320445b6079",
 *               "firstName": "Cirilla",
 *               "lastName": "",
 *               "age": 25,
 *               "createdAt": "2022-03-26T20:56:06.695Z",
 *               "__v": 0
 *           }
 *       ]
 *    }
 *
 *@apiPermission none
 *
 *@apiQuery {String} sort=alpha Sort users in alphabetical order
 *@apiQuery {String} sort=age Sort users in increasing order of age
 *
 *@apiQuery {Number} ageFilter Get all user of specified age
 *
 *@apiSampleRequest localhost:3000/getUser
 *
 *@apiError (Error 5xx) {json} error Some error occured
 * @apiErrorExample {json} error
 *     HTTP/1.1 500 Some error occured
 *    {
 *      message: 'Some error occured',
 *      error: error,
 *    }
 **/

/**
 * @api {post} /updateUser Update user info
 *
 * @apiName Update user info
 *
 * @apiGroup admins
 *
 * @apiHeader {String} token Admins unique token generated during login.
 *
 *@apiHeaderExample {key-value} Header-Example:
 *Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiR2VyYWx0IiwiaWF0IjoxNjQ4MzgxMDU3LCJleHAiOjE2NDgzODQ2NTd9.R67iWBnRpO6JQIuXqB1rv8VeBdE2C1qHYOkyrVkhrWw
 *Content-Type: application/json
 *
 * @apiSuccess  {json} message User updated successfully
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *        "message": "User updated successfully"
 *    }
 *
 *@apiPermission Admin
 *
 *@apiBody {String} userId User ID of user whose info needs to be updated
 *@apiBody {String} firstName New first name of user
 *@apiBody {String} lastName New last name of user
 *@apiBody {Number} age New age of user
 *
 *@apiSampleRequest localhost:3000/updateUser
 *
 *@apiError {json} incomplete_input All fields are required.
 * @apiErrorExample {json} incomplete_input:
 *     HTTP/1.1 400 All fields are required.
 *    {
 *      message: 'All fields are required.',
 *    }
 *
 *@apiError (Error 5xx) {json} error some error occured
 * @apiErrorExample {json} error:
 *     HTTP/1.1 500 Some error occured
 *    {
 *      message: 'Some error occured',
 *      error: error,
 *    }
 *
 *@apiError {json} unauthorised Not authorised to perform this action
 * @apiErrorExample {json} unauthorised:
 *     HTTP/1.1 401 Not authorised to perform this action
 *    {
 *      message: 'Not authorised to perform this action',
 *    }
 **/

/**
 * @api {post} /addUser Add new user
 *
 * @apiName Add new user
 *
 * @apiGroup admins
 *
 * @apiHeader {String} token Admins unique token generated during login.
 *
 *@apiHeaderExample {key-value} Header-Example:
 *Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiR2VyYWx0IiwiaWF0IjoxNjQ4MzgxMDU3LCJleHAiOjE2NDgzODQ2NTd9.R67iWBnRpO6JQIuXqB1rv8VeBdE2C1qHYOkyrVkhrWw
 *Content-Type: application/json
 *
 * @apiSuccess  {json} message User added successfully
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *        "message": "User added successfully"
 *    }
 *
 *@apiPermission Admin
 *
 *@apiBody {String} firstName First name of user
 *@apiBody {String} lastName Last name of user
 *@apiBody {Number} age Age of user
 *
 *@apiSampleRequest localhost:3000/addUser
 *
 *@apiError {json} incomplete_input All fields are required.
 * @apiErrorExample {json} incomplete_input
 *     HTTP/1.1 400 All fields are required.
 *    {
 *      message: 'All fields are required.',
 *    }
 *
 *@apiError (Error 5xx) {json} error some error occured
 * @apiErrorExample {json} error:
 *     HTTP/1.1 500 Some error occured
 *    {
 *      message: 'Some error occured',
 *      error: error,
 *    }
 *
 *@apiError {json} unauthorised Not authorised to perform this action
 * @apiErrorExample {json} unauthorised:
 *     HTTP/1.1 401 Not authorised to perform this action
 *    {
 *      message: 'Not authorised to perform this action',
 *    }
 **/

/**
 * @api {post} /deleteUser Delete user
 *
 * @apiName Delete user
 *
 * @apiGroup admins
 *
 * @apiHeader {String} token Admins unique token generated during login.
 *
 *@apiHeaderExample {key-value} Header-Example:
 *Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiR2VyYWx0IiwiaWF0IjoxNjQ4MzgxMDU3LCJleHAiOjE2NDgzODQ2NTd9.R67iWBnRpO6JQIuXqB1rv8VeBdE2C1qHYOkyrVkhrWw
 *Content-Type: application/json
 *
 * @apiSuccess  {json} message User deleted successfully
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *        "message": "User deleted successfully"
 *    }
 *
 *@apiPermission Admin
 *
 *@apiBody {String} userId User ID of user who needs to be deleted
 *
 *@apiSampleRequest localhost:3000/deleteUser
 *
 *@apiError {json} userId_unavailable userId is required
 * @apiErrorExample {json} userId_unavailable:
 *     HTTP/1.1 400 userId is required
 *    {
 *      message: 'userId is required.',
 *    }
 *
 *@apiError (Error 5xx) {json} error some error occured
 * @apiErrorExample {json} error:
 *     HTTP/1.1 500 Some error occured
 *    {
 *      message: 'Some error occured',
 *      error: error,
 *    }
 *
 *@apiError {json} unauthorised Not authorised to perform this action
 * @apiErrorExample {json} unauthorised:
 *     HTTP/1.1 401 Not authorised to perform this action
 *    {
 *      message: 'Not authorised to perform this action',
 *    }
 **/
