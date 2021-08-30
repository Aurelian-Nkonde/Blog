<template>
  <div class="container mx-auto py-20">
     <div class="max-w-xl mx-auto">
       <h1 class="font-serif text-xl tracking-wide pb-4 underline">Got anything to say?</h1>
       <p class="font-serif text-xl tracking-wide pb-10 underline">please use the below form</p>

        <form action="">
              <div class="py-2 flex flex-col">
                  <label class="font-serif text-lg tracking-wide pb-2">Name</label>
                  <input type="text" class="font-sans py-2 px-4 w-full outline-none border-2 border-gray-600">
              </div>
              <div class="py-2 flex flex-col">
                  <label class="font-serif text-lg tracking-wide pb-2">Email</label>
                  <input type="email" class="font-sans py-2 px-4 w-full outline-none border-2 border-gray-600">
              </div>
              <div class="py-2 flex flex-col">
                  <label class="font-serif text-lg tracking-wide pb-2">Message-body</label>
                  <textarea name="" id="" cols="30" rows="6" class="font-sans py-2 px-4 w-full outline-none border-2 border-gray-600"></textarea>
              </div>
              <button class="font-serif text-white text-lg bg-yellow-500 py-2 w-full transition ease-linear duration-100 hover:bg-yellow-600">Submit</button>
          </form>

     </div>
  </div>
</template>

<script>
export default {
    name: "Contacts",
}
</script>

<style>

</style>