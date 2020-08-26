new Vue({
    el: '#app',
    data: {
        width: 800,
        temp_width: 800,
        temp_halfWidth: 400,
        budget: 300,
        limit: 2,
        list: [
            {id: 1,name: '사과', price: 100},
            {id: 2,name: '바나나', price: 200},
            {id: 3,name: '포도', price: 300},
            {id: 4,name: '두리안', price: 400},
            {id: 5,name: '수박', price: 500},
            {id: 6,name: '딸기', price: 600}
        ],
        list2: [],
        current: '',
        topics:[
            {value:'vue',name: 'vue.js'},
            {value:'jQuery', name: 'jQuery'}
        ],
        video1: false,
        list3: [],
    },
    directives: {
        video(el, binding) {
            if(binding.value !== binding.oldValue){
                binding.value ? el.play() :el.pause()
            }
        }
    },
    computed: {
        halfWidth: {
            get:function() { return this.width /2},
            set:function(val) { this.width =val * 2},
        },
        matched: function() {
            return this.list.filter(function(el){
                return el.price <= this.budget
            }, this)
        },
        limited: function(){
            return this.matched.slice(0, this.limit)
        }
    },
    methods: {
        btn1: function() {
            this.width = this.temp_width
            console.log(this.width)
        }
    },
    watch: {
        current: function(val) {
            axios.get('http://api.github.com/search/repositories', {
                params: {q: 'topic: ' + val}
            }).then(function(response){
                this.list2 = response.data.items
            }.bind(this))
        },
        list3:function() {
            console.log('기본출력:', this.$refs.list3.offsetHeight)

            this.$nextTick(function(){
                console.log('nextTick :', this.$refs.list3.offsetHeight)
            })
        }
    }
})