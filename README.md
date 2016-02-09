# API Dashboard Angular
In this lab we will explore promise patterns in Angular, using `$q` and `$http` requests.

Your goal is build a user-friendly dashboard that can fetch and display the raw JSON any given API endpoint.

> A random delay of up to 9 seconds is in place on all $http request!

## Setup Instructions
Clone this repo.

Install the budo development server:
```bash
npm install budo -g
```

To run the server, make sure you're inside the application directory, then run:

```bash
budo --open
```

The homepage is broken. Your goal is to get the dasboard API interface working!

You may code in:
* `js/api_dashboard_controller.js`
* `index.html`

## Randomized Request Failures
In `js/api_dashboard_controller.js` you can modify the global variable `FAIL_RATE` to be `50`, for a 50% chance that your http requests will fail / be rejected.

```js
FAIL_RATE = 50 // 50% percent chance requests will fail
```

## Api Dashboard Goals

User Interface Improvements:
* Can you clear the input field
* Can you submit on `enter`?
* Don't make me wait for API calls!
    * Display "pending...", a load bar, or a spinny-wheel so that I know the app still works.
* Make sure the user never sees `{{ ... }}` rendered anywhere in the html.

## Promise Reference
* [Promises in Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* Promises in jQuery
    - [jQuery.Deferred](http://api.jquery.com/jQuery.Deferred/)
    - [deferred object](http://api.jquery.com/category/deferred-object/)
* Promises in Angular
    - [$q](https://docs.angularjs.org/api/ng/service/$q)
* Angular [$http module reference](https://docs.angularjs.org/api/ng/service/$http)

## Screen Shot
<img width="400" alt="screen shot 2016-02-09 at 2 44 48 pm" src="https://cloud.githubusercontent.com/assets/1489337/12933219/df607300-cf3b-11e5-9552-c1fd8ab0bb7e.png">
