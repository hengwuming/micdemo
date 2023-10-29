<template>
    <div>
        我是子应用
        <img :src="img" v-for="(item, index) in 1000" :key="index" />
    </div>
</template>
<script>
export default {
    name: 'child',
    data() {
        return {
            isShow: false,
            img: '',
        };
    },
    created() {
        // setTimeout(() => {
        //     this.isShow = true
        // }, 1000);
        this.img = this.ajaxImg();
        console.log(this.ajaxImg());
    },
    mounted() { },
    methods: {
        ajaxImg() {

            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    let ajaxData = JSON.parse(xhr.responseText);
                    console.log(ajaxData);
                    this.img = ajaxData.imgurl
                }
            };
            xhr.open('POST', 'https://api.uomg.com/api/rand.img1', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send('format=json&sort=二次元');

        },
    },
};
</script>
<style lang="less" scoped></style>
