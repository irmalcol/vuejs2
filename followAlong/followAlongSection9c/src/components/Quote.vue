<template>
    <div>
        <div>
            <slot name="title"></slot>
            <span><slot name="subtitle">Default Subtitle</slot></span>
        </div>
        <div>
            <slot name="content"></slot>
            <p>This text is from the child</p>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {

}
</script>


