export const appendMixin = {
    data() {
        return {
            input4: ''
        };
    },
    computed: {
        textWithCountMixin() {
            const count = this.input4.length;
            if ( count > 0 ) {
                return this.input4 + ' (' + count + ')';
            }
            return this.input4;
        }
    }
}