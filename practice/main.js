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
        list: []
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
        },
        doRemove: function(index) {
            this.list.splice(index,1)
        },
        doAttack: function(index) {
            var target = this.list[index]
            this.$set(target, 'hp', target.hp - 10)
            if(target.hp <= 0) {
                this.list.splice(index,1)
            } 
            else if(target.hp < 50){
                this.$set(target, 'active', true)
            }
        }
        
    },
    created:function() {
        axios.get('list.json').then(function(response){
            this.list = response.data
        }.bind(this)).then(this.list.forEach(function(item){
            this.$set(item, 'active', false)
        }, this)).catch(function(e){
            console.error(e)
        })
        
        
    }

    

})