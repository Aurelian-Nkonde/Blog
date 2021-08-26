<template>
  <div class="">
      <div class="container mx-auto py-6 flex items-center justify-around">
          <div class="font-sans text-4xl tracking-wider">{{title}}</div>
          <ul class="flex items-center">
            <li class="font-serif text-lg tracking-wide mr-9 cursor-pointer transition ease-linear duration-150 border-b-2 border-transparent hover:border-red-600">
                <router-link to="/">Home</router-link>
            </li>
            <li class="font-serif text-lg tracking-wide mr-9 cursor-pointer transition ease-linear duration-150 border-b-2 border-transparent hover:border-red-600">
                <router-link to="/posts">Posts</router-link>
            </li>
            <li class="font-serif text-lg tracking-wide mr-9 cursor-pointer transition ease-linear duration-150 border-b-2 border-transparent hover:border-red-600">
                <router-link to="/contact">Contact</router-link>
            </li>
            <li class="font-serif text-lg tracking-wide mr-9 cursor-pointer transition ease-linear duration-150 border-b-2 border-transparent hover:border-red-600">
                <router-link to="/login">Login</router-link>
            </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: "Navigation",
    computed: {
        title(){
            return this.$store.state.title
        }
    }
}
</script>

<style>

</style>