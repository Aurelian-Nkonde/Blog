<template>
  <div class="container mx-auto py-16">
      <div class="max-w-lg mx-auto">
          <h1 class="font-serif text-3xl pb-4">Login here</h1>
          <form action="">
              <div class="py-2 flex flex-col">
                  <label class="font-serif text-lg tracking-wide pb-2">Username</label>
                  <input type="text" class="font-sans py-2 px-4 w-full outline-none border-2 border-gray-600">
              </div>
              <div class="py-2 mb-3 flex flex-col">
                  <label class="font-serif text-lg tracking-wide pb-2">Password</label>
                  <input type="password" class="font-sans py-2 px-4 w-full outline-none border-2 border-gray-600">
              </div>
              <button class="font-serif text-white text-lg bg-green-500 py-2 w-full transition ease-linear duration-100 hover:bg-green-600">Login</button>
              <p class="py-3 font-serif text-center text-lg">Or</p>
              <button class="font-serif text-white text-lg bg-blue-500 py-2 w-full transition ease-linear duration-100 hover:bg-blue-600">
                  <router-link to="/signup">Signup</router-link>
              </button>
          </form>
          <div class="border-b-2 border-gray-700 mt-6"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Logins"
}
</script>

<style>

</style>