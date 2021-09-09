<template>
  <div class="container mx-auto py-20">
    <div class="max-w-4xl mx-auto">

      <div class="pb-16">
        <h1 class="font-serif text-5xl pb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor.</h1>
        <img src="../assets/two.jpg" alt="one" class="mx-auto pb-5">
        <h2 class="font-serif text-2xl">John Magamba</h2>
        <p class="font-sans text-lg text-gray-600 pb-10">10 August 2021</p>

        <p class="font-serif text-xl leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, officiis? Labore, dolores nostrum
          , ipsa possimus facilis quos voluptatem perferendis, necessitatibus libero dolorum tempora excepturi! Incidunt esse voluptate provident ipsam perferendis nam delectus cum corrupti! Quia modi laboriosam
           accusantium suscipit ipsam laborum? Debitis doloribus delectus perspiciatis iusto laborum in
           ue eius perferendis iste suscipit nisi reiciendis exercitationem minus qui consectetur dolores beatae, saepe
            eveniet deleniti tempora eligendi. Molestias id quos rem voluptatem voluptatibus autem cumque ullam commodi!
             Expedita quidem est at et repellat illo harum cupiditate reprehenderit dolore exercitationem odio distinctio minus, ipsam dolorem incidunt perferendis illum ut architecto voluptas. Itaque?
        </p>
      </div>


      <div class="pb-16">
        <div class="" v-if="commentstotal > 0">
          <p class="font-serif text-3xl underline">{{commentstotal}} comments</p>
        </div>
        <div class="" v-else>
          <p class="font-sans text-3xl text-red-700">Oops, no comments yet</p>
        </div>
      </div>


      <!-- comments list -->
      <div class="pb-20">
        <div class="max-w-2xl">

          <div class="pb-16">
            <!-- top -->
            <div class="flex items-center pb-2">
              <div class="">
                <img src="../assets/user.jpg" alt="user" class="h-16 w-16 rounded-full">
              </div>
              <div class="pl-6">
                <h1 class="font-sans text-lg">John Morgan</h1>
              </div>
            </div>
            <hr>
            <!-- bottom -->
              <div class="pl-10 pt-2">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio incidunt voluptates qui totam quaerat, saepe quos, voluptatum eius, dolore repudiandae magnam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia deleniti, officiis recusandae aspernatur id aliquid molestias commodi maxime nostrum. Modi! ex accusamus repellat quibusdam dolor explicabo animi numquam enim!
                </p>
              </div>
          </div>

          <div class="">
            <!-- top -->
            <div class="flex items-center pb-2">
              <div class="">
                <img src="../assets/user.jpg" alt="user" class="h-16 w-16 rounded-full">
              </div>
              <div class="pl-6">
                <h1 class="font-sans text-lg">John Morgan</h1>
              </div>
            </div>
            <hr>
            <!-- bottom -->
              <div class="pl-10 pt-2">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio incidunt voluptates qui totam quaerat, saepe quos, voluptatum eius, dolore repudiandae magnam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia deleniti, officiis recusandae aspernatur id aliquid molestias commodi maxime nostrum. Modi! ex accusamus repellat quibusdam dolor explicabo animi numquam enim!
                </p>
              </div>
          </div>

        </div>
      </div>


      <div class="pb-8">
        <div class="max-w-xl mx-auto">
          <h1 class="font-sans text-3xl">Create a comment</h1>
          <form action="">
              <div class="py-2 flex flex-col">
                  <label class="font-serif text-lg tracking-wide pb-2">Name</label>
                  <input type="text" class="font-sans py-2 px-4 w-full outline-none border-2 border-gray-600">
              </div>
              <div class="py-2 flex flex-col">
                  <label class="font-serif text-lg tracking-wide pb-2">Message-body</label>
                  <textarea name="" id="" cols="30" rows="6" class="font-sans py-2 px-4 w-full outline-none border-2 border-gray-600"></textarea>
              </div>
              <button class="font-serif text-white text-lg bg-green-500 py-2 w-full transition ease-linear duration-100 hover:bg-green-600">Submit</button>
          </form>
        </div>
      </div>

    </div>  
  </div>
</template>

<script>
export default {
    name: "PostDetail",
    data: () => {
      return {
        commentstotal: 3,
        comments: []
      }
    }
}
</script>

<style>

</style>