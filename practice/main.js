var app = new Vue({
    el: '#app',
    data: {
        //객체 데이터
        count :0
    },
    methods: {
        increment: function() {
            this.count += 1
        }
    }
})