<template>
<div>
    <app-header></app-header>
    <section class="hero is-medium is-dark main-color">
        <div class="hero-body">
            <div class="container">
            <h1 class="title has-text-centered">
                Contact Me
            </h1>
            <br>
            <p class="subtitle has-text-centered">
                I would love to hear from you <br> Send me a message or give me a call
            </p>
            </div>
        </div>
    </section>
    <section class="section is-medium notFullWidth has-text-centered centered-container">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                <span class="icon is-large"> 
                                <i class="fa fa-envelope"></i></span>
                                </figure>
                            </div>
                            <div class="media-content is-text-overflow">
                                <p class="title is-4 has-text-black">Email</p>
                                <p class="subtitle is-6 has-text-black">ke.sanders4404@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                <span class="icon is-large"> 
                                <i class="fas fa-phone"></i></span>
                                </figure>
                            </div>
                            <div class="media-content is-text-overflow">
                                <p class="title is-4 has-text-black">Phone</p>
                                <p class="subtitle is-6 has-text-black">801-673-1704</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                <span class="icon is-large"> 
                                <i class="fab fa-linkedin"></i></span>
                                </figure>
                            </div>
                            <div class="media-content is-text-overflow">
                                <p class="title is-4 has-text-black">LinkedIn</p>
                                <p class="subtitle is-6 has-text-black"><a href="https://www.linkedin.com/in/kathryn-sanders-ba5b08176/">visit my linkedin profile </a></p>
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
    h2 {
        
    }

    .icon {
        font-size: 24px;
    }

    .is-text-overflow {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>