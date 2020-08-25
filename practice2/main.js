new Vue({
    el: '#app',
    data: {
        message : 'Hello Vue',
        val: [],
        val_radio: '',
        preview: '',
        scrollY: 0,
        timer: null,
    },
    methods: {
        handler(event) {
            console.dir(event);
        },
        handlerInput: function(event) {
            this.message = event.target.value
        },
        rck_handler: function(comment) {
            console.log(comment)
        },
        change_value: function() {
            console.log(this.val)
        },
        handleChange:function(event) {
            var file = event.target.files[0]
            if (file && file.type.match(/^image\/(png|jpeg)$/)) {
                this.preview = window.URL.createObjectURL(file)
            }
        },
        handleScroll: function() {
            if(this.timer === null) {
                this.timer = setTimeout(function(){
                    this.scrollY = window.scrollY
                    console.log(this.scrollY)
                    clearTimeout(this.timer)
                    this.timer= null
                }.bind(this), 200)
            }
        }
    },
    created: function() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy: function() {
        window.removeEventListener('scroll', this.handleScroll)
    },
})