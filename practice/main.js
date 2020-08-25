var app = new Vue({
    el: '#app',
    data: {
        //객체 데이터
        count :0,
        classObject : {
            child:true,
            'is-active': false,
        },
        styleObject : {
            color: 'red',
            backgroundColor: "lightgray",
        },
        radius: 50,
        x_pos : 100,
    },
    methods: {
        increment: function() {
            this.count += 1
        }
    }
})