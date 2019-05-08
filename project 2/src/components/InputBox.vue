<template>
    <div class="input">
        <label for="quote-input">New Quote</label>
        <textarea type="text" name="quote-input" id="quote-input" placeholder="Insert quote text here"></textarea>
        <button>Add Quote</button>
    </div>
</template>

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

