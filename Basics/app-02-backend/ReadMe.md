# Angular 2 Back-end


This is not an Angular 2 app, this is a NodeJS app that's used to simulate an API service for Angular. 


---

## Getting Started

I use nodemon for serving nodejs app on my local machine. 
```
sudo npm install -g nodemon
```

Install dependencies. 
```
npm install
```

Start app.
```
nodemon app.js
```


---

## CORS

When building an Angular app, it's important to configure CORS on the back-end service. This allows Angular to make requests from port 4200 to 8080. This stackoverflow answer is easiest way to configure CORS on ExpressJS.

- [http://stackoverflow.com/a/21622564](http://stackoverflow.com/a/21622564)