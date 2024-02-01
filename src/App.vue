<script setup lang="ts">
import {ref, computed} from "vue"
import Cards from './components/Cards.vue'
import {GENDER, type Initee} from "./types"


const name = ref("")
const gender = ref(GENDER.MALE)
const invitees = ref<Initee []>([])

const addInvitee = (): void => {
  if (name.value) {
    invitees.value.push({
      id: Math.floor(Math.random() * 1000000),
      name: name.value,
      gender: gender.value
    })
    name.value = "";
    gender.value = GENDER.MALE
  }
}

const count = computed<{
  female: number,
  male: number
}>(() => {
  return invitees.value.reduce((countObj, invitee ) => {
      if (invitee.gender === GENDER.MALE) {
        return {
          ...countObj,
          male: countObj.male + 1
        }
      }
      return {
        ...countObj,
          female: countObj.male + 1
      }
    }, {male: 0, female: 0})
  })
  


// let name:string = "marski";
// let age:number = 25;
// let sex:boolean = false;

// sex = "male";
// age: 26;
// enum GENDER {
//   FEMALE,
//   MALE,
//   BULLSHIT
// }
// const employee: Employee = {
//   name: "marski",
//   age: 25,
//   sex: GENDER.FEMALE
// }

// interface Employee {
//    name: string,
//    age: number | Float32Array,
//    sex: GENDER,
//    occupation?: string 
// }

// employee.name = "littlemarski"
// employee.sex = GENDER.MALE


</script>

<template>
  <main>
    <div>
    <h1>People Invited to A Party</h1>
    <div class="input-container">
      <input type="text" v-model="name" placeholder="Name..." @keypress.enter="addInvitee">
      <select v-model="gender" @keypress.enter="addInvitee">
        <Option :value="GENDER.MALE" key="">Male</Option>
        <Option :value="GENDER.FEMALE" key="">Female</Option>
        <Option :value="GENDER.BULLSHITE" key="">Bullshite</Option>
      </select>
      
    </div>
    <div class="cards-container">
      <Cards v-for="invitee in invitees" 
      key="invitee.id" 
      :invitee="invitee"/>
    </div>
 <div>
  <p>Females - {{ count.female }}</p>
  <p>Males - {{ count.male }}</p>
</div>
</div>
  </main>
</template>

<style scoped>

 main {
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;
 }

 input, select {
  width: 100%;
  padding: 5px;
  margin-bottom: 2px;
 }
</style>
