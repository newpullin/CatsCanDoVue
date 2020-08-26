Vue.component('comp1', {
    props: ['prop1'],
    template: '<h1>{{ prop1 }}</h1>',
    data: function(){
        return {
            message: 'comp1'
        }
    }
})
new Vue({
    el: '#app',
    data: {
        message : 'Hello Vue'
    }
})