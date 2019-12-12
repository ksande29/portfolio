<template>
<section class="section">
        <nav class="navbar is-white">
            <div class="navbar-start">
                <router-link 
                    tag="div"
                    exact
                    to="/"
                    class="navbar-item"><a class="has-text-dark">Kate Sanders</a>
                </router-link>
            </div>
            <div class="navbar-end">
                <router-link 
                    tag="div"
                    exact
                    to="/projects"
                    class="navbar-item"><a class="has-text-dark">Projects</a>
                </router-link>
                <router-link 
                    tag="div"
                    exact
                    to="/resume"
                    class="navbar-item"><a class="has-text-dark">Resume</a>
                </router-link>
                <router-link 
                    tag="div"
                    exact
                    to="/contact"
                    class="navbar-item"><a class="has-text-dark">Contact</a>
                </router-link>
            </div>
        </nav>
</section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.section {
    padding-top: 0; padding-bottom: 0;
    
    /*background-image: url("techy.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;*/
    background-color: white;
}
</style>