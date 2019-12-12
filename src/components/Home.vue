<template>
    <section class="hero is-fullheight is-white">
        <div class="hero-body">
            <div class="container">
                <h1 class="is-size-1 has-text-white animated fadeIn">Hi I'm Kate</h1>
                <p class="subtitle has-text-light animated slideInLeft delay-1s">I design and build websites for fun.<br>Check out some of my work, see my resume, or send me a message.</p>
                <div class="container">
                    <div class="columns">
                        <div class="column is-2 is-full-tablet">
                            <div class="article animated bounceIn delay-3s">
                                <router-link 
                                tag="div"
                                exact
                                to="/projects"
                                class="has-text-centered"><a class="has-text-white">Projects</a>
                                </router-link>
                            </div>
                        </div>
                        <div class="column is-2 is-full-tablet">
                            <div class="article animated bounceIn delay-4s">
                                <router-link 
                                tag="div"
                                exact
                                to="/resume"
                                class="has-text-centered"><a class="has-text-white">Resume</a>
                                </router-link>
                            </div>
                        </div>
                        <div class="column is-2 is-full-tablet">
                            <div class="article animated bounceIn delay-5s">
                                <router-link 
                                tag="div"
                                exact
                                to="/contact"
                                class="has-text-centered"><a class="has-text-white">Contact Me</a>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
</template>

<script>
export default {
    
}
</script>

<style scoped>

.columns {
    justify-content: flex-end;
    margin-top: 10%;
}


.column .article{
    /*background-color: rgba(5, 5, 10, .5);*/
    background-color: rgba(255, 255, 255, 0.2);
    padding-top: 25px; padding-bottom: 25px;
}
.column .article:hover{
    /*background-color: rgba(5, 5, 10, .7);*/
    background-color: rgba(255, 255, 255, 0.5)
}
a:hover {
    color: white !important;
}




</style>