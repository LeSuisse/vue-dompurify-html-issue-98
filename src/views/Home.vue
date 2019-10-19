<template>
<div>
    <h2>Home</h2>
    <div v-html="rawHtml"></div>
    <div v-dompurify-html="rawHtml"></div>
</div>
</template>
<script>
export default {
    name: 'home',
    data: function () {
        return {
            rawHtml: ''
        }
    },
    created: function () {
        this.rawHtml = '<span style="color: blue">This should be blue.</span>'
    }
}
</script>
