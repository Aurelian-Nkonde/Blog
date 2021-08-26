<template>
  <div class="container mx-auto py-20">
     <div class="max-w-4xl mx-auto">
       <h1 class="font-serif text-3xl text-gray-600 tracking-wide pb-8">Latest posts..</h1>
       <div class="pb-20">
         <button class="py-3 px-10 bg-black text-white transition ease-linear duration-100 hover:bg-gray-500">
           <router-link to="/posts">View all articles</router-link>
         </button>
       </div>
       <div class="" v-if="posts.length > 0">
          <div class="grid grid-cols-3 gap-4">
            <div class="" v-for="post in posts" :key="post.id">
               <div class="flex flex-col justify-center">
               <img :src="post.cover" alt="">
               <div class="py-5">
                 <h1 class="font-serif text-2xl text-black tracking-wide pb-4">{{post.title}}</h1>
                 <h2 class="font-serif text-xl text-gray-400">{{post.paragraphy}}</h2>
               </div>
             </div>
            </div>
           </div>
       </div>
       <div class="" v-else>
         <h1 class="font-sans text-red-500 text-2xl tracking-wide">No posts at the moment!</h1>
       </div>
     </div>
  </div>
</template>




<script>
export default {
    name: "LastestPosts",
    data: () => {
      return {
        posts: [
          {
            id: 0,
            title: "Lorem ipsum dolor sit, amet consectetur",
            paragraphy: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur distinctio excepturi suscipit doloremque tempore, ab laboriosam at modi porro non assumenda, reprehenderit saepe deserunt minus praesentium explicabo dicta illo amet!",
            cover: "../assets/oops.jpg",
          },
                    {
            id: 0,
            title: "Lorem ipsum dolor sit, amet consectetur",
            paragraphy: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur distinctio excepturi suscipit doloremque tempore, ab laboriosam at modi porro non assumenda, reprehenderit saepe deserunt minus praesentium explicabo dicta illo amet!",
            cover: "../assets/oops.jpg",
          },
                    {
            id: 0,
            title: "Lorem ipsum dolor sit, amet consectetur",
            paragraphy: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur distinctio excepturi suscipit doloremque tempore, ab laboriosam at modi porro non assumenda, reprehenderit saepe deserunt minus praesentium explicabo dicta illo amet!",
            cover: "../assets/oops.jpg",
          },
        ]
      }
    }
}
</script>

<style>

</style>