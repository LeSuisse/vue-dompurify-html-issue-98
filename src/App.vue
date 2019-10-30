<template>
<div id="app">
    <div v-html="rawHtml"></div>
    <div v-dompurify-html="rawHtml"></div>
    <div id="nav">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/about">About</router-link>
    </div>
		<transition name="fade" mode="out-in">
			<router-view/>
		</transition>
</div>
</template>
<script>
export default {
    name: 'App',
    data: function () {
        return {
            rawHtml: ''
        }
    },
    created: function () {
        this.rawHtml = '<span style="color: red">This should be red.</span>'
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {transition:opacity .2s}
.fade-enter, .fade-leave-to{opacity:0}
</style>
