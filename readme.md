# resize-img-cli [![Build Status](https://travis-ci.org/kevva/resize-img-cli.svg?branch=master)](https://travis-ci.org/kevva/resize-img-cli)

> Resize images in memory


## Install

```
$ npm install --save resize-img-cli
```


## Usage

```
$ resize-img --help

  Usage
    $ resize-img <image>
    $ cat <image> | resize-img

  Options
    --width   Desired width of target image
    --height  Desired height of target image

  Examples
    $ resize-img unicorn.png --width 200 > unicorn-200x200.png
    $ cat unicorn.png | resize-img --width 200 > unicorn-200x200.png
```


## Related

* [resize-img](https://github.com/kevva/resize-img) - API for this module.


## License

MIT © [Kevin Martensson](http://github.com/kevva)
