# vue-extra
Ready to add extra components for VueJS.

### Installation
`npm install --save vue-extra`

### How to use
- Currently the module supports vue-extra/Navbar only. However I will be adding some more elements in future.

## Inside your <template></template>
```html
...
<Navbar :navbar="navbar" :style={fontFamily:'arial'}></Navbar>
...
```
:style attribute is optional that lets you change the style of outer navbar element.
variable "navbar" is defined below in javascript code


## Inside <script></script> tag
Example :
```javascript
import Navbar from 'vue-extra/Navbar'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      navbar:{
        defaultAlign:'right',
        brand:'Vue<span style="color:#ccc">Extra</span>',
        shadow:true,
        navItems:[
            {
                name:'Home',
                href:"home",
                class:'active',
            },
            {
                name:'News',
                href:"https://github.com/saurabhdaware",
                router:false,
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