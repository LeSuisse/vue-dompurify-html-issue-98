<template>
<div>
    <h2>Home</h2>
    <div v-html="rawHtml"></div>
		<div style="border:2px solid black">
			<div v-dompurify-html="rawHtml"></div>
		</div>
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
