# vue-extra
Ready to add extra components for VueJS.
## Overview

### Installation
`npm install --save vue-extra`

### How to use
- Currently the module supports vue-extra/Navbar only. However I will be adding some more elements in future.

### Inside your template tag
```html
...
<Navbar :navbar="navbar" :style={fontFamily:'arial'}></Navbar>
...
```
:style attribute is optional that lets you change the style of outer navbar element.
variable "navbar" is defined below in javascript code


### Inside your script tag
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


## REFERRENCE

### Coloring Navbar
```javascript
navbar:{
    backgroundColor:'#222',
    color:'#ddd',
    hoverColor:'#fff',
    activeLinkColor:'#09f'
}
```

### Brand Name
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

### Drop shadow
```javascript
navbar:{
    shadow:true // false
}
```

### Right aligned navigation bar
```javascript
navbar:{
    defaultAlign:'right' // 'left'
}
```

## Screenshot
![vue-extra/Navbar](https://res.cloudinary.com/saurabhdaware/image/upload/v1557839367/npm/vue-extra/vueextra.png)