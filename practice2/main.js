var scroll = new SmoothScroll('a[href*="#"]', {
	// Function. Custom easing pattern
	// If this is set to anything other than null, will override the easing option above
	customEasing: function (time) {

		// return <your formulate with time as a multiplier>

		// Example: easeInOut Quad
		return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

	}
});
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
        },
        scrollTop: function() {
            scroll.animateScroll(0)
        }

    },
    created: function() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy: function() {
        window.removeEventListener('scroll', this.handleScroll)
    },
})