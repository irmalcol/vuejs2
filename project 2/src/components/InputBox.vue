<template>
    <div class="input">
        <label for="quote-input">New Quote</label>
        <textarea type="text" name="quote-input" id="quote-input" placeholder="Insert quote text here"></textarea>
        <button @click="processQuote">Add Quote</button>
    </div>
</template>

<script>
export default {
    props: {
        'addQuote': Function
    },
    methods: {
        processQuote() {
            const inputTextarea = document.querySelector('#quote-input');
            const text = inputTextarea.value;
            // const text = document.querySelector('#quote-input').value;
            if ( typeof text != 'string' || text == '') {
                return false;
            }
            console.log('Input is a non-empty string');
            this.addQuote(text);
            inputTextarea.value = '';
        }
    }
}
</script>


<style>
    .input {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
        margin: auto;
    }

    textarea {
        width: 100%;
        min-height: 100px;
        /* margin: 10px; */
    }

    label {
        align-self: flex-start;
    }

    button {
        padding: 5px 20px;
        margin: 20px;
        border-radius: 5px;
        box-shadow: none;
        background-color: #327AB7;
        color: white;
    }
</style>

