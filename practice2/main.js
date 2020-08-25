var app = new Vue({
    el: '#app',
    data: {
        message : 'Hello Vue',
        val: [],
        val_radio: '',
        preview: ''
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
        }
    }
})