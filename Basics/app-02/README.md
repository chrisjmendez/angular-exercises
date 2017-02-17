# Heros

Based on this [Angular Tutorial](https://angular.io/docs/ts/latest/tutorial/toh-pt4.html)


This examples shows you how to:

1. Create a simple angular app
2. Create a component for your app including an html template and css template
3. Create a forLoop within the Angular framework
4. Create models
5. Create a service that simulates a request to a server
6. 


---

## UIX

We install Bootstrap 4 using a single command line:

### Step 1
```language-powerbash
npm install --save @ng-bootstrap/ng-bootstrap
```
*[Source](https://ng-bootstrap.github.io/#/getting-started)*

### Step 2

```language-javascript
@NgModule({
  declarations: [
    AppComponent, ...
  ],
  imports: [
	NgbModule,
    BrowserModule, ...
  ]
  ...
```

### Step 3

Add this CSS tag to ```index.html```

```language-javascript
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
```

### Step 4

Get going!

* [Bootstrap 4 Examples](https://v4-alpha.getbootstrap.com/components/buttons/)


## Models

You can create a class using the command-line generator:
```language-javascript
ng g class classes/hero
```


## Components

* You can create components using the command-line generator:

```language-javascript
ng g component hero-detail/hero-detail
```

## Services

You can create a service using the command-line generator:

```language-javascript
ng g service services/hero
```


## Routing

* 



---


# Resources

* [Anatomy of an Angular 2 App](http://www.chrisjmendez.com/2016/12/21/anatomy-of-an-angular-2-app/)
* [Angular 2 Command Line](https://cli.angular.io/)
* [Bootstrap 4 Examples](https://v4-alpha.getbootstrap.com/components/buttons/)