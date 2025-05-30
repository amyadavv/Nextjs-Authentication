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
