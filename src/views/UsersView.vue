<script setup>
import Header from '@/components/HeaderComponent.vue'
import { onMounted, computed } from 'vue' // Import onMounted and computed from vue
import { useStore } from 'vuex' // Import useStore from vuex

const store = useStore() // create a store instance

// the fetchUsers action is dispatched to fetch the users data from the API when the component is mounted
// the onMounted is a lifecycle hook that runs when the coomponent is mounted. Here, it dispatches the fetchUsers action to fetch the users
onMounted(async () => {
  await store.dispatch('fetchUsers')
})

// create a computed property to get the users data from the store
// the computed function is used to create a reactive computed property that returns the users data from the state in our store
const users = computed(() => store.state.users)
console.log(users)

// Get the total number of users from our totalUsers functionin our getters
// The totlUsers getter is used to calculate the total number of users in the users data array
const totalUsers = computed(() => store.getters.totalUsers)
</script>

<template>
  <div class="container mt-5 mb-5 vw-100">
    <Header title="Users View" description=" see list of users data!" />

    <div>
      <table class="table table-sm">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Maiden Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>phone</th>
            <th>UserName</th>
            <th>birthDate</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.maidenName }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.birthDate }}</td>
            <td>
              <button class="button">
                <RouterLink :to="`/employee?id=$(employee.id)`">View</RouterLink>
              </button>
            </td>
            <td><button @click="deleteUser(index)" class="btn btn-danger">x</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <p><strong>totalUsers:</strong> {{ totalUsers }}</p>
    </div>
  </div>
</template>
<style scoped>
.button {
  background-color: cyan;
  border-color: blue;
  border: radius 10px;
}
</style>
