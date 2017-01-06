<template>
    <i-button type="primary" @click="open(false)">打开提醒</i-button>
    <i-button @click="open(true)">打开提醒（仅标题）</i-button>
</template>
<script>
    export default {
        methods: {
            open (nodesc) {
                this.$Notice.open({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            }
        }
    }
</script>