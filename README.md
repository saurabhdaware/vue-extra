# vue-extra
Ready to add extra components for VueJS.

[![npm Package](https://img.shields.io/npm/v/vue-extra.svg)](https://www.npmjs.org/package/vue-extra) [![downloads per month](http://img.shields.io/npm/dm/vue-extra.svg)](https://www.npmjs.org/package/vue-extra) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/saurabhdaware/vue-extra/issues) [![License](https://img.shields.io/npm/l/vue-extra.svg)](https://github.com/saurabhdaware/vue-extra/blob/master/LICENSE)


[![https://nodei.co/npm/vue-extra.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/vue-extra.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/vue-extra)



# Table of Contents
- [Overview](#overview)
  - [Installation](#installation)
  - [How to use](#how-to-use)
    - [Inside your template tag](#inside-your-template-tag)
    - [Inside your script tag](#inside-your-script-tag)
- [Referrence](#referrence)
  - [Navbar](#navbar)
    - [Color Navbar](#color-navbar)
    - [Change Brand Name](#change-brand-name)
    - [Drop Shadow](#drop-shadow)
    - [Right Aligned Items](#right-aligned-items)
    - [Change property after set](#change-property-after-set)
  - [Header](#header)
- [Contribution](#contribution)
- [Screenshot](#screenshot)


# Overview

### Installation
`npm install --save vue-extra`

### How to use
- Currently the module supports vue-extra/Navbar only. However I will be adding some more elements in future.

#### Paste inside your template tag
```html
...
<Navbar :navbar="navbar" :style={fontFamily:'arial'}></Navbar>
...
```
:style attribute is optional that lets you change the style of outer navbar element.
variable "navbar" is defined below in javascript code


#### Paste inside your script tag
Full Example :
```javascript
import Navbar from 'vue-extra/Navbar'
export default {
  data () {
    return {
      navbar:{
        defaultAlign:'right',  // Default alignment of items in navbar
        backgroundColor:'#222', // background color of navbar
        color:'#ddd', // color of items in navbar
        activeLinkColor:'#f90', // color of .active class link in navbar
        hoverColor:'#ff0', // color when hovered over item
        brand:'Vue<span style="color:#ccc">Extra</span>',
        shadow:true, // shadow effect on navbar
        navItems:[
            {
                name:'Home',
                href:"home",
                class:'active',
            },
            {
                name:'News',
                href:"https://github.com/saurabhdaware",
                router:false, // By default all navItems are rendered as <router-link> by setting router:false we tell code to render element as <a> instead.
            },
            {
                name:'Contact',
                href:"home",
            },
            {
                name:'Login',
                href:'#login',
                align:'right',
                style:{fontWeight:'bold'}
            }
            
        ]

      }
    }
  },
  components:{
    Navbar
  }
}

```


# REFERRENCE

## Navbar

#### Color Navbar
```javascript
navbar:{
    backgroundColor:'#222',
    color:'#ddd',
    hoverColor:'#fff',
    activeLinkColor:'#09f'
}
```

#### Change brand Name
```javascript
navbar:{
    brand:'CompanyName'
}
```
or
```javascript
navbar:{
    brand:'https://image.com/logo.png' // Link of image - This will be rendered as an image
}
```

#### Drop shadow
```javascript
navbar:{
    shadow:true // false
}
```

#### Right aligned items
```javascript
navbar:{
    defaultAlign:'right' // 'left'
}
```

#### Change property after set
To change the property that is once set, sadly you have to change the whole navbar object. You can do this like `this.navbar = {...this.navbar,color:'#f30'}`. Here's example to change color of links after 2 seconds.
```javascript
mounted(){
  setTimout(()=>{
    this.navbar = {...this.navbar,color:'#f30'}
  },2000)
}
```

## Header
Ummm I am still working on this.


## Contribution 

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/saurabhdaware/vue-extra/issues)

- This project is open for contributions you can pick up a task from [Issues](https://github.com/saurabhdaware/vue-extra/issues) or Work on a new feature.
- Read [CONTRIBUTING.md](http://github.com/saurabhdaware/vue-extra/blob/master/CONTRIBUTING.md) before contributing for complete guide of Contribution and Local Development.


## Screenshot
![vue-extra/Navbar](https://res.cloudinary.com/saurabhdaware/image/upload/v1557839367/npm/vue-extra/vueextra.png)