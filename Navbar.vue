<template>
    <nav :class="(navbar.shadow == false)?'vue-extra-navbar':'vue-extra-navbar card'">
        <ul>
            <li class="brand" v-if="navbar.brand">
                <img v-if="navbar.brand.includes('http') && navbar.brand.includes('//') && navbar.brand.includes('.')" :src="navbar.brand" height="100%">
                <router-link v-else class="nav-a" to="/" style="font-weight:bold;font-size:14pt;" v-html="navbar.brand" replace></router-link>
            </li>
            <li v-for="(item,index) in getNavItems(navbar.defaultAlign)" :key="index" :style="(item.align == 'right')?{float:'right'}:{}">
                <a class="nav-a" v-if="item.router == false" :class="item.class" :href="item.href" v-html="item.name"></a>
                <router-link :to="item.href" v-else :style="item.style" class="nav-a" :class="item.class" v-html="item.name"></router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name:'Navbar',
    data(){
        return {
        }
    },
    methods:{
        getNavItems:function(align){
            if(align == 'left'){
                return this.navbar.navItems
            }else{
                return this.navbar.navItems.map(item=>{
                    return {...item,align:'right'}
                }).reverse()
            }
        }
    },
    props:{
        navbar:{
            default:{
                defaultAlign:'left',
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
    }
}
</script>
<style scoped>
.vue-extra-navbar{
    position:fixed;
    width:100%;
    top:0;left:0;
    background-color:#1c1e30;
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

.vue-extra-navbar > ul > li > .nav-a {
  display: block;
  color: white;
  text-align: center;
  padding: 17px 24px;
  font-size:13pt;
  text-decoration: none;
  transition:all .5s ease;
}

.vue-extra-navbar > ul > li:not(.brand) > .nav-a:hover{
    color:#4CAF50;
    transition:all .5s ease;
}
.vue-extra-navbar > ul > li > .nav-a.active {
  color: #4CAF50;
  transition:all .5s ease;
}
</style>
