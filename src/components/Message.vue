<template>
    <div>
        123456
        <p v-for="item in nameList">{{item.id}}===={{item.name}}</p>
        <button @click="sendMes">发送</button>
        <input type="text" v-model="search.id">编号
        <input type="number11" v-model="search.name">值
        <button @click="updateMes">改变</button>
    </div>
</template>

<script lang='ts'>
    import { ref } from 'vue'

    interface Course {
        id: number;
        name: string;
    }
    // 严格模式下的声明
    export default{
        setup() {
            const nameList = ref<Course[]>([]);
            nameList.value.push({ id: 1, name: "全栈架构师" });

            const search=ref({id:"",name:""});

            function sendMes(){
                console.log('123');
                fetch("/api/users")
                    .then(response => response.json())
                    .then(json => {
                        const {data} = json;
                        //proxy对整体具有响应式
                        nameList.value = [...nameList.value,...data];
                        console.log(nameList.value)
                    });
            }

            function updateMes(){
                const {id,name} = search.value;
                console.log(id,name);
                nameList.value[id]["id"] = name;
            }

            return {nameList,sendMes,updateMes,search}
        },
    };

</script>

<style scoped>

</style>
