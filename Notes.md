# Next js 

1. Everything you work will go inside the src directory. Inside Src there is app directory. App directory will have backend and frontend.
2. It is not just everything is goes inside the app directory. There are other files which are created outside the app directory. For examples models and helpers etc.
3. We will see that the backend portion is actually written inside the API folder. Whenever you are writing most of the part of the apis in the backend you are using file name as "route" 
4. In case of the frontend part the file name is "page"
5. The naming convention is super super important in the next js. Slightest wrong in the naming convention will just create a havoc in the folder. Nextjs is a framework and we have to follow the rule and regulation.
6. There is also a directory inside the src but does not need to be inside the app directory, which is middleware. 
7. So inside the app directory there will be backend, frontend, login, signup folder.
8. If the file is used for frontend then we have to call it page, otherwise everything will be crashed
9. The layout file is the wrapper.
10. In nextjs we don't need express.
11. In the recent version of next js every thing is a serer component and server component does not have access that is on the frontend side. Frontend part is on the client side anything on the page and you have to explicitly make your application as a client side.
12. Most of the thing in the API folder thats on the backend side, default server component but anything thats usually outside, not always, is usually a client component. In our case the signup form, we want to take some data from the user and send it on the backend so it is going to be on the frontend side
13. "use client"; now it is will become the client component, you can use all the frontend features, now can use all of our window object, hooks etc.
14. If the console.log is in the "use client" then it will log in the browser. If it is in the api without use client then it will log in the terminal.


# Token Works

1. verifyToken holds some string value, these string values are encrypted. How it works is in your API call if somebody makes a user/verify call so you simply generate a verify token and this verify token is a long gibberish string.This is generated by api also it is also updated into the users database of that user and it is also sent to the user as well.
2. When somebody verify that this token actually comes back to you. Might come up into a URL we can extract it from a URL or come up into a request body as well. 
3. Once this token comes back to you in the database we have to find that where this token is. 
4. Lets say you have found this then the user information comes to your API based on this token and if token is expired then it wont work.
5. Forget password token - theory before 1.18
6. Ones the everything is verified that user exists password is correct then we actually create a token this token is json web token, it is encrypted and we send this token into users cookies not in the user local storage because then the user can manipulate the token there but we can send the secure cookie to the user and then later on whenever we wish we can access those cookies as well. So it helps as a bridger to verify whenever the user we want to verify it just has the id of the user but it can have a lot of payload into that, you can send a user ID, email, admin type etc can send all this data as a payload.





Framework vs Library - In framework rules are tight you have to use framework with the defined rule but in library it is free flow no strict rules are follow.