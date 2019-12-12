<template>
<div>
    <app-header></app-header>

    <section class="hero is-medium is-dark">
        <div class="hero-body">
            <div class="container">
            <h1 class="title has-text-centered">
                My Projects
            </h1>
            <br>
            <p class="subtitle has-text-centered">
                Here are some things that I've made
            </p>
            </div>
        </div>
    </section>
    <section class="section is-medium" id="projects">
        <div class="container">
            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <div class="card">
                        <div class="card-image">
                            <a href="http://kathrynesanders.com/GreekOlive/">
                                <figure class="image is-4by3 img-hover-zoom">
                                <img src="../components/GreekOlive.jpg" alt="Greek Olive">
                                </figure>
                            </a>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <p><strong>Who I made this project for: </strong>Greek Olive is a small family owned restaurant in Roy, Utah. They wanted a website that showed their menu, hours/location, and history.</p>
                                <p><strong>What I did: </strong>I gathered information about the company and the image they wanted to present. I worked with them to chose brand colors and a style for their restaurant and products and made a mood board for the website. I gathered data about customers and created a user persona. I planned out the website page layout and organized the content that they wanted to include on the site. I created a wireframe and then a prototype using Adobe XD. I conducted user tests and made adjustments to the design according to the results. Finally I began creating the site using Bulma. <br><br>*the site is still under construction. The photos, transitions, and timeline are still being worked on.  </p>
                                <p><strong>What I learned: </strong>I learned about the user design process while creating this project. I learned about the importance of planning and having a clear goal in mind when you are working on a project.</p>
                                <p><strong>What I would do differently: </strong>I would have created the CSS using Sass. I created more work for myself than I needed to because I did not know the tool. I have since learned that you can set variables such colors and max screen width which would have made the site easier to code.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tile is-parent">
                    <div class="card">
                        <div class="card-image">
                            <a href="http://kathrynesanders.com/BokJoy/">
                                <figure class="image is-4by3 img-hover-zoom">
                                <img src="../components/bokJoy.jpg" alt="Bok Joy">
                                </figure>
                            </a>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <p><strong>Who I made this project for: </strong>This is a project I started making for fun. Although it is not a real blog, it is designed to look like a vegan food blog which shares recipes, events, and links to other blogs.</p>
                                <p><strong>What I did:</strong> I created a prototype using Adobe XD and then coded the website using the Bulma framework and SASS. I added transitions using the AOS library.</p>
                                <p><strong>What I learned: </strong> I became more comfortable with the Bulma framework and learned about SASS and customizing variables. I had never tried that before. I started to learn about transitions and was able to practice using other's libraries.</p>
                                <p><strong>What I would do differently: </strong>Origionally I was planning on only including recipies on this site but later added the news/events and resources section. I feel like the main page is a little cluttered. If I could go back, I would have redesigned the prototype before building instead of adding the new material at the end.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tile is-parent">
                    <div class="tile is-parent">
                        <div class="card">
                            <a href="http://kathrynesanders.com/NeedsBeyondMedicine/">
                                <figure class="image is-4by3 img-hover-zoom">
                                <img src="../components/NeedsBeyondMedicine.jpg" alt="Placeholder image">
                                </figure>
                            </a>
                            <div class="card-content">
                                <div class="content">
                                    <p><strong>Who I made this project for: </strong>Needs Beyond Medicine is a non profit organization that provides financial support to cancer patients
                                    <p><strong>What I did: </strong>I worked with three other students to redsign and rebuild the organization's page. We built the majority of the page using custom CSS and javascript but we used Bootstrap for the navigation.</p>
                                    <p><strong>What I learned: </strong>Not everything went according to plan with this project, but I learned a lot. The largest lesson was how to work with a team. We learned how to play to each other's strengths, work through problems and communicate well together as well as with a client. At the time, none of us had any background in design and I saw how frustrating it is to work without a clear view of what you are creating. We also were not familiar with bootstrap so we learned how to troubleshoot while learning a new skill.  </p>
                                    <p><strong>What I would do differently: </strong>I would spend more time planning. Now that I have learned about the design process, I would have created a prototype before writing any code. I also would have bult the site differently. I did not understand Bootstrap and I would have used it to structure the pages instead of writing custom CSS because I was already using the library to make the navigation. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
    components: {
    'app-header': Header
  }
}
</script>

<style scoped>
.hero {
    background-image: url("orange.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>