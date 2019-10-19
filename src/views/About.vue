<template>
<div>
    <h2>About</h2>
    <div v-html="rawHtml"></div>
    <div v-dompurify-html="rawHtml"></div>
</div>
</template>
<script>
export default {
    name: 'about',
    data: function () {
        return {
            rawHtml: ''
        }
    },
    created: function () {
        this.rawHtml = '<span style="color: green">This should be green.</span>'
    }
}
</script>