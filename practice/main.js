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
        name: '키메라',
        list: [
            {id: 1, name: '슬라임', hp: 100},
            {id: 2, name: '슬라임2', hp: 200},
            {id: 3, name: '슬라임3', hp: 300}
        ]
    },
    methods: {
        increment: function() {
            this.count += 1
        },
        doAdd: function() {
            var max = this.list.reduce(function(a, b) {
                return a > b.id ? a : b.id
            }, 0)

            this.list.push({
                id: max + 1,
                name: this.name,
                hp: 500
            })
        }
    }
})