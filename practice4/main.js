var myComponent = {
    template: '<p>MyComponent</p>'
}
Vue.component('my-component2', {
    template: '<p>{{ message }}</p>',
    data: function() {
        return {
            message: 'Hello component'
        }
    },
    methods: {
        
    }
})
var bus = new Vue({
    data: {
        count: 0
    }
})
Vue.component('comp-child', {
    template: '<div><p>자식{{ val }}</p><button @click="handleClick">이벤트호출</button><button @click="busTest">버스테스트</button></div>',
    props: ['val'],
    methods: {
        handleClick: function() {
            console.log('자식 이벤트 발생')
            this.$emit('childs-event')
        },
        busTest: function() {
            console.log('버스 이벤트 발생')
            bus.$emit('bus-event')
        }
    }
})
Vue.component('comp-b', {
    template: '<p> {{ bus.count }} </p>',
    computed: {
        bus: function() { return bus.$data}
    },
    created: function() {
        bus.$on('bus-event', function() {
            this.count++
        })
    }
})

new Vue({
    el: '#app',
    data: {
      msg1 : 'A',
      msg2 : 'B',  
    },
    components: {
        'my-component':myComponent
    },
    methods: {
        change_child: function() {
            console.log("?")
            if (this.msg1 === 'A') {
                this.msg1 = 'B'
                this.msg2 = 'A'
            }
            else {
                this.msg1 = 'A'
                this.msg2 = 'B'
            }
        },
        parentsMethod: function() {
            console.log("이벤트를 받았습니다.")
        }
    }
})

