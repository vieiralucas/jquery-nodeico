> A jQuery plugin to display your Node Modules on NPM.

## Getting started

Three quick start options are available:

* [Download latest release](https://github.com/vieiralucas/jquery-nodeico/releases)
* Clone the repo: `git@github.com:vieiralucas/jquery-nodeico.git`
* Install with [Bower](http://bower.io): `bower install jquery-nodeico`

## Setup

Use [Bower](http://bower.io) to fetch all dependencies:

```sh
$ bower install
```

Now you're ready to go!

## Usage

HTML

```html
<div id="example"></div>
```

Include jQuery:

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
```

Include plugin's JS:

```html
<script src="jquery.nodeico.min.js"></script>
```

Call the plugin:

```javascript
$("#example").nodeico();
```


[Check full example's source code](https://github.com/vieiralucas/jquery-nodeico/blob/master/demo/index.html).

## Options

Here's a list of available settings.

```javascript
$("#example").nodeico({
    name: 'some-node-module',
    type:  'standard',
    downloads:  true,
    rank: true,
    stars: true
});
```

| Attribute | Type      | Default             | Description                                           |
|-----------|-----------|---------------------|-------------------------------------------------------|
| name      | *String*  | `jquery-nodeico` | The name of the node module.                          |
| type      | *String*  | `standard`          | How is the badge ('standard', 'mini', 'compact', 'histogram').     |
| downloads | *Boolean* | `false`             | Displays the number of downloads that the module has. |
| rank      | *Boolean* | `false`             | Displays the download rank of the module.             |
| stars     | *Boolean* | `false`             | Displays the number of stars that the module has.     |
| months    | *Number*  | `1`                 | How many months ago should display ('12', '9', '6', '3', '1').                  |
| height    | *Number*  | `1`                 | The height of the histograms, there are 3 heights ('1', '2', '3') |


## Credits


Built on top of [nodei.co](https://github.com/rvagg/nodei.co).

Used [jQuery Boilerplate](http://jqueryboilerplate.com) to generate the structure.


## License

[MIT License](http://vieiralucas.mit-license.org/) © Lucas Vieira