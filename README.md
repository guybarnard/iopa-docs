[![IOPA](https://iopa.io/iopa.png)](https://iopa.io)

## This Repository

This is the official repository of the IOPA (Internet Open Protocols Alliance) Specification and is the 
source of all the documentation at [iopa.io](https://iopa.io).

## About

IOPA defines a platform-independent, protocol-independent standard framework for the Internet of Things (IOT).  

## Specification
[IOPA Specification](./docs/Specification.md)  (this repository)

We recommend reviewing the reference implementation, [iopa-io/iopa](https://github.com/iopa-io/iopa), in conjunction with this IOPA specification, so that you get a sense for the implementation possibilities.

## To Re-Build the Documentation

This repository uses [Next.JS](https://nextjs.org/) to generate the documentation, using the [Nextra](https://nextra.vercel.app/) plugin and themes.

Install dependencies:

``` bash
$ git clone https://github.com/iopa-io/iopa-docs.git
$ cd iopa-docs
$ yarn
```

Generate:

``` bash
$ yarn build
```

Run server:

``` bash
$ yarn start
```

## Development serer

Generate:

``` bash
$ yarn dev
```


## Release Notes

4.0 Updated documentation site builder from Hexo to Next.JS with Nextra by Vercel.


## License

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
Documentation under CC BY-SA 4.0 Copyright (c) 2016 Internet of Protocols Association
Documentation theme Copyright (c) 2013 Tommy Chen, Hexo Contributors (CC BY 4.0)