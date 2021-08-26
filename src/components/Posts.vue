<template>
  <div class="container mx-auto py-14">
     <div class="max-w-4xl mx-auto">
       
        <div class="" v-if="isAdmin">
            <p class="text-xl tracking-wide pb-5 font-serif">have anything to share?</p>
            <router-link to="/create">
                <button class="text-lg bg-black text-white py-3 px-10 transition ease-in duration-100 hover:bg-gray-800">create an article</button>
            </router-link>
        </div>
        <div class="" v-else>
            <p class="text-xl tracking-wide pb-5 font-serif">to create articles you gotta sign up!</p>
            <router-link to="/signup">
                <button class="text-lg bg-black text-white py-3 px-10 transition ease-in duration-100 hover:bg-gray-800">Signup</button>
            </router-link>
         </div>


         <!-- search and filter here mybe -->

        <div class="grid grid-cols-3 gap-6 my-20">
            <div v-for="post in posts" :key="post.id">
                <div class="mb-5">
                    <img src="../assets/one.jpg" alt="awl" class="h-56 mx-auto">
                    <div class="py-6 px-3">
                        <h1 class="font-serif text-lg pb-3">19 August 2021</h1>
                        <h1 class="font-serif text-xl tracking-wide pb-6">Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</h1>
                        <a href="#" class="border-2 text-black border-gray-500 py-2 px-10 transition ease-linear duration-100 hover:bg-black hover:text-white">Read more</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- pagination down here -->

     </div>
  </div>
</template>



<script>

export default {
    name: "Posts",
    data: () => {
        return {
            isAdmin: true,
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