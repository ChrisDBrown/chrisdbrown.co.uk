---
layout: post
title:  "Validating AngularJS forms on submission"
date:   2015-10-14 20:22:00
categories: angularjs javascript
metadescription: "I've recently been working on a mobile app built with AppGyver and AngularJs that's fairly form-heavy, and wanted to implement some more user-friendly validation than Angular's default."
comments: true
---

I've recently been working on a mobile app built with [AppGyver][appgyver] and [AngularJs][angularjs] that's fairly form-heavy, and wanted to implement some more user-friendly validation than Angular's default. I've never been a fan of showing error messages as soon as the user types a character - it's far too close to shouting at them, and I'd rather be guiding my users after a mistake than assuming they're about to make one.

To this end I wanted to show validation messages only when the user attempts to submit the form the first time, and guide them more after a mistake was made. Unfortunately Angular doesn't support this natively, so here's how it's done.

###Set up your form

First, I'll set up a simple login form:
{% codeblock html %}
<div ng-controller="IndexController as ctrl">

    <form name="loginForm">

        <input type="email" name="email" placeholder="Email address" ng-model="ctrl.user.email" required>
        <p ng-show="loginForm.email.$error.required">Please enter your email</p>
        <p ng-show="loginForm.email.$error.email">Please enter a valid email</p>

        <input type="password" name="password" placeholder="Password" ng-model="ctrl.user.password" required>
        <p ng-show="loginForm.password.$error.required">Please enter your password</p>

        <button type="submit">Log in</button>

    </form>

</div>
{% endcodeblock %}

[Demo][demo1]

Here I'm using the standard AngularJS validation - errors will show as soon as the page loads, and vanish once the inputs are valid. Normally the `ng-show` rules on the error messages would be something like `loginForm.email.$error.required && loginForm.email.$dirty` so that the errors don't appear until the user interacts with the field. This is what causes that 'immediate error' issue I was talking about. Nasty.

###Handle form submission

Let's start fixing this. I'll add a submission handler to the form:

{% codeblock html %}
...
    <form name="loginForm" ng-submit="ctrl.submit(loginForm)">
        ...
    </form>
...
{% endcodeblock %}

...and implement a controller to match:

{% codeblock javascript %}
angular
    .module('demo', [])
        .controller('IndexController', [function() {
            var self = this;

            self.submit = function(form) {
                if (form.$valid) {
                    console.log(self.user);
                }
            };
}]);
{% endcodeblock %}

This `console.log` call will be replaced by whatever data handling is needed after a successful submission.

At this point it's almost there, just one final step. In order to only show errors after an attempted submission we need a way of tracking this, so add a variable for this:

{% codeblock javascript %}
...
    self.submitted = false;
    self.submit = function(form) {
        self.submitted = true;
        if (form.$valid) {
            console.log(self.user);
        }
    };
...
{% endcodeblock %}

...and the last part of the puzzle is extending the `ng-show` logic on the errors:


{% codeblock html %}
...
    <p ng-show="ctrl.submitted && loginForm.email.$error.required">Please enter your email</p>
...
{% endcodeblock %}

[Demo][demo2]


Now the user won't be shown any validation messages until they've submitted something with an error. Much more user friendly!

[View the completed version on GitHub][github].


[demo1]:       https://rawgit.com/ChrisDBrown/demos/5b25bd24c49531c4ae7545589d199d1b6f8bb4fc/angularjs-validate-on-submit/index.html
[demo2]:       https://rawgit.com/ChrisDBrown/demos/master/angularjs-validate-on-submit/index.html
[appgyver]:    http://www.appgyver.com
[angularjs]:   https://angularjs.org/
[github]:      https://github.com/ChrisDBrown/demos/tree/master/angularjs-validate-on-submit
