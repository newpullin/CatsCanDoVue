new Vue({
    el: '#app',
    data: {
        width: 800,
        temp_width: 800,
        temp_halfWidth: 400,
    },
    computed: {
        halfWidth: {
            get:function() { return this.width /2},
            set:function(val) { this.width =val * 2},
        }
    },
    methods: {
        btn1: function() {
            this.width = this.temp_width
            console.log(this.width)
        }
    }
})