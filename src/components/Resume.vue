<template>
    <div>
    <app-header></app-header>
    <section class="hero is-medium is-dark main-color">
        <div class="hero-body">
            <div class="container">
            <h1 class="title has-text-centered">
                My Resume
            </h1>
            <br>
            <p class="subtitle has-text-centered">
                This is what I've been up to
            </p>
            </div>
        </div>
    </section>
    <section class="section is-medium remove-bottom-space">
        <div class="container">
            <h3 class="title accent-color-text">Education</h3>
                <h4><strong>Weber State University</strong> - (B.S. in progress) Web & UX </h4>
                <p class="heading">AUGUST 2019 - PRESENT</p>
                <p>I am currently studying web development and user experience design.</p>
                <br>
                <h4><Strong>Salt Lake Community College</Strong> - A.S. Computer Science</h4>
                <p class="heading">AUGUST 2017 - AUGUST  2019</p>
                <p>Graduated with high honors (4.0 gpa)</p>
                <p>Awarded certificates of proficiency in Programming Fundamentals and Web Programming & Development</p>
                <br>
                <h4><strong>University of Utah</strong> - B.S. Biology (Cell & Molecular Emphasis)</h4>
                <p class="heading">AUGUST 2012- MAY 2015</p>
                <p>Graduated Cum Laude (3.9 gpa)</p>
                <p>Awarded a minor in chemistry</p>
        </div>
    </section>

    <section class="section is-medium remove-bottom-space">
        <div class="container">
                <h3 class="title accent-color-text">Employment / Volunteer Work</h3>
                <h4><strong>Teleperformance (eHealth)</strong> - Licensing Coordinator</h4>
                <p class="heading">AUGUST 2019 - NOVEMBER 2019</p>
                <p>I coordinated state insurance license and carrier applications for over 150 sales agents for a new sales project. This included organizing and maintaining thousands of records.</p>  
                <br>
                <h4><strong>SLCC OpenSource Club</strong> - Graphic Designer</h4>
                <p class="heading">AUGUST 2018 - DECEMBER 2018</p>
                <p>I designed event flyers and posters for club events.</p>
                <br>
                <h4><strong>Ultradent Products Inc</strong> - Analytical Chemist</h4>
                <p class="heading">JUNE 2015 - JULY 2017</p>
                <p>I performed quality control testing of raw materials and manufactured products, requiring attention to detail, consistency, and problem solving skills.</p>
                <br>
                <h4><strong>University of Utah</strong> - Lab Tech</h4>
                <p class="heading">SEPTEMBER 2013 - JUNE 2015</p>
                <p>I conducted an individual research project, created a new genetic line, and maintained hundreds of fly stocks.</p>
                <br>
                <h4><strong>Johns Hopkins Hospital</strong> - Research Intern</h4>
                <p class="heading">MAY 2013 -AUGUST 2013</p>
                <p>I worked on a summer research project where I studied major mental illnesses and the parasite toxoplasma gondii, attended clinical rounds, and presented research findings.</p>
        </div>
    </section>

    <section class="section is-medium remove-bottom-space">
        <div class="container">
            <h3 class="title accent-color-text">Relevent Skills</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bulma</li>
                <li>Javascript</li>
                <li>Vue.js</li>
                <li>Java</li>
                <li>mySQL</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>InDesign</li>
                <li>XD</li>         
            </ul>
        </div>
    </section>

    <section class="section is-medium">
        <div class="container">
            <h3 class="title accent-color-text">Related Classes</h3>
            <ul>
                <li>Programming Fundamentals</li>
                <li>Object Oriented Programming</li>
                <li>Algorithms & Data Structures</li>
                <li>mySQL</li>
                <li>Web Programming</li>
                <li>Advanced CSS</li>
                <li>Javascript Frameworks</li>
                <li>Design Principles</li>
                <li>Adobe Photoshop</li>
                <li>Adobe InDesign</li>
                <li>UX Design</li>
            </ul>
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
.remove-bottom-space { padding-bottom: 0 !important;}
</style>