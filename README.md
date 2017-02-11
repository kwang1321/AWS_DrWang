# AWS_DrWang

Preparing
=====
* [install nodejs](http://www.hostingadvice.com/how-to/install-nodejs-ubuntu-14-04/)
* [install npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm)
* [install express](https://www.npmjs.com/package/express)
* [install body-parser](https://www.npmjs.com/package/body-parser)
* [install jsonfile](https://www.npmjs.com/package/jsonfile)

How it works?
=====
* **server.js** provides nodejs server code. we can use **node server** to start this server which is listening with the port 3000.
![alt text](https://github.com/jilianggqq/AWS_DrWang/blob/master/pictures/Screenshot%20from%202017-02-10%2017-17-20.png "Start Server")

* use the url [http://localhost:3000/submit-event.html](http://localhost:3000/submit-event.html) to visit the web page.

* fill **Login UserName** as **admin**, and then click submit button, this page will submit a request to **http://localhost:3000/formlogin** with the parameter **{username:admin}**. **formlogin** is the action of form in submit-event.html.

* in line 15 of server.js could catch the url end with **formlogin**. In the callback function, we can use **req.body** to get all the request parameters. In this example, I saved the requested parameters to a file named data.json.

* look at the file **data.json**, we can find the contents we just input in the Login UserName textbox.
