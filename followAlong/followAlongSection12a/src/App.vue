<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'Some text'"></p>
                <p v-html="'<strong>Some strong text</strong>'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h2>Custom Directives</h2>
                <p v-highlight="'red'">Coloured with a custom directive</p>
                <p v-highlight:background="'pink'">Coloured with the same directive but with an argument</p>
                <p v-highlight:background.delayed="'pink'">Coloured with the same directive but with an argument and a modifier</p>
                <p v-local-highlight:background.delayed.blink="{ mainColor: 'red', secondColor: 'green', delay: 500 }">Coloured with the same directive but with an argument and a modifier</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind(el, binding, vnode) {
                    // el.style.backgroundColor = 'green';
                    // el.style.backgroundColor = binding.value;
                    let delay = 0;
                    if (binding.modifiers['delayed']) {
                        delay = binding.value.delay;
                    }
                    // console.log('test anything');
                    if (binding.modifiers['blink']) {
                        // console.log('test blink');
                        let mainColor = binding.value.mainColor;
                        let secondColor = binding.value.secondColor;
                        let currentColor = mainColor;
                        setTimeout(() => {
                            setInterval(() => {
                                // console.log('test');
                                currentColor = currentColor == secondColor ? mainColor : secondColor;
                                if (binding.arg == 'background') {
                                    el.style.backgroundColor = currentColor;
                                } else {
                                    el.style.color = currentColor;
                                }
                            }, delay);
                        }, delay);
                    } else {
                        setTimeout(() => {
                        if (binding.arg == 'background') {
                            el.style.backgroundColor = binding.value.mainColor;
                        } else {
                            el.style.color = binding.value.mainColor;
                        }
                        }, delay);
                    }
                }
            }
        }
    }
</script>

<style>

</style>
