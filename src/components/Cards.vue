<script setup lang="ts">
import { defineProps } from 'vue';
import {GENDER, type Initee} from "../types"

// const props = defineProps(['invitee'])


defineProps<{
    invitee: Initee
}>()

</script>

<template>
    <div :style="{backgroundColor: invitee.gender === GENDER.MALE ? 'rgb(8,111,111)' : 'rgb(111, 18,8)'}">
        {{ invitee.name}}
    </div>
</template>

<style scoped>
div {
    background-color: aquamarine;
    border-radius: 5px;
    margin-top: 5px;
    text-align: center;
    padding: 3px;
    color: white;
}
</style>