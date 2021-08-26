<template>
  <div class="">
     <div class="container mx-auto py-20">
       <div class="max-w-xl mx-auto">

        <h1 class="font-sarif text-lg pb-2 underline">Ooh you got somethin to post ayt?</h1>
        <h1 class="font-sarif text-lg pb-5 underline">cool do your thing below!</h1>

          <form action="">
              <div class="py-2 flex flex-col">
                  <label class="font-serif text-lg tracking-wide pb-2">Title</label>
                  <input type="text" class="font-sans py-2 px-4 w-full outline-none border-2 border-gray-600">
              </div>
              <div class="py-2 flex flex-col">
                  <label class="font-serif text-lg tracking-wide pb-2">Message-body</label>
                  <textarea name="" id="" cols="30" rows="6" class="font-sans py-2 px-4 w-full outline-none border-2 border-gray-600"></textarea>
              </div>
              <div class="py-2 flex flex-col">
                  <label class="font-serif text-lg tracking-wide pb-2">Image</label>
                  <input type="file" class="font-sans py-2 px-4 w-full outline-none border-2 border-gray-600">
              </div>
              <button class="font-serif text-white text-lg bg-green-500 py-2 w-full transition ease-linear duration-100 hover:bg-green-600">Submit</button>
          </form>

       </div>
     </div>
  </div>
</template>

<script>
export default {
    name: "CreatePost",
}
</script>

<style>

</style>