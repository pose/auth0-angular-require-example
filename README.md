
# Auth0 Angular Require Example

Using Auth0 Login Widget.

### Running the example
In order to run the example, install `serve` to host static assets:

```sh
npm -g install serve
```

Then execute on the example folder:
```sh
serve
```
and point your browser to [http://localhost:3000/](http://localhost:3000).

### The broken case
If you go to [http://localhost:3000/broken.html](http://localhost:3000/broken.html)
you should see the following stack trace

	Results in this stack trace:
	Error: [$injector:modulerr] Failed to instantiate module app due to:
	You need to add Auth0Widget or Auth0.js dependency this.
	init@http://localhost:3000/lib/auth0-angular.js:205
	@http://localhost:3000/app.js:36
	invoke@http://ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular.js:3762

