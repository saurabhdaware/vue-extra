<template>
    <nav :class="(navbar.shadow == false)?'vue-extra-navbar':'vue-extra-navbar card'" :style="{backgroundColor:navbar.backgroundColor || '#222'}">
        <ul>
            <li class="brand" v-if="navbar.brand">
                <img v-if="(/\.(gif|jpg|jpeg|tiff|png|webp)$/i).test(navbar.brand)" :src="navbar.brand" height="40" style="padding:5px 15px;">
                <router-link v-else class="nav-a" to="/" style="font-weight:bold;font-size:14pt;color:#fff;" v-html="navbar.brand" replace></router-link>
            </li>
            <li v-for="(item,index) in getNavItems" :key="index" :style="(item.align == 'right')?{float:'right'}:{}">
                <a v-if="item.router == false" :style="item.style" class="nav-a" :class="item.class" :href="item.href" v-html="item.name"></a>
                <router-link v-else :style="item.style" class="nav-a" :class="item.class" :to="item.href" v-html="item.name"></router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name:'Navbar',
    data(){
        return {
            defaultOptions:{
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
    methods:{
        
    },
    mounted(){
        this.navbar = {...this.defaultOptions,...this.navbar}
        let nav = document.querySelector('nav').style
        nav.setProperty('--color', this.navbar.color || '#aaa');
        nav.setProperty('--hoverColor', this.navbar.hoverColor || '#fff');
        nav.setProperty('--activeLinkColor', this.navbar.activeLinkColor || '#09f');
    },
    props:{
        navbar:{
            default: {}
        }
    },
    computed:{
        getNavItems:function(){
            let align = this.navbar.defaultAlign;
            if(align == 'left'){
                return this.navbar.navItems
            }else{
                return this.navbar.navItems.map(item=>{
                    return {...item,align:'right'}
                }).reverse()
            }
        }
    }
}
</script>
<style scoped>
nav{
    --hoverColor:#fff;
    --color:#aaa;
    --activeLinkColor:#09f;
}
.vue-extra-navbar{
    position:fixed;
    width:100%;
    top:0;left:0;
}
.card{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.vue-extra-navbar > ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  transition:all .5s ease;
}

.vue-extra-navbar > ul > li{
  float: left;
}

.vue-extra-navbar > ul > li > .nav-a{
  display: block;
  color:var(--color);
  text-align: center;
  padding: 17px 24px;
  font-size:13pt;
  text-decoration: none;
  transition:all .5s ease;
}

.vue-extra-navbar > ul > li:not(.brand) > .nav-a:hover{
    color:var(--hoverColor);
    transition:all .5s ease;
}
.vue-extra-navbar > ul > li > .nav-a.active {
    color:var(--activeLinkColor);
    transition:all .5s ease;
}
</style>
