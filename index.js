var app;

$(function () {
    app = Vue.createApp({
        data() {
            return {
                counts: { 'red': 0, 'yellow': 0, 'white': 0, 'blue': 0 }
            }
        },
        computed: {
            isRedMax() {
                return this.counts.red > this.counts.yellow && this.counts.red > this.counts.white && this.counts.red > this.counts.blue;
            },
            isYellowMax() {
                return this.counts.yellow > this.counts.red && this.counts.yellow > this.counts.white && this.counts.yellow > this.counts.blue;
            },
            isWhiteMax() {
                return this.counts.white > this.counts.red && this.counts.white > this.counts.yellow && this.counts.white > this.counts.blue;
            },
            isBlueMax() {
                return this.counts.blue > this.counts.red && this.counts.blue > this.counts.yellow && this.counts.blue > this.counts.white;
            },
        },
        methods: {
            reset() {
                this.counts = { 'red': 0, 'yellow': 0, 'white': 0, 'blue': 0 }
            }
        }
    }).mount('#app');
});