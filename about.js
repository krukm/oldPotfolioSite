'use strict';

const about = {
    template: `
        <nav></nav>
        <section class="section__about">
            <p class="p__about-intro">A little spiel about me:</p>
            <p class="p__about-content">I'm that kid that took apart his toys to see what they're all about. Then I put them back together (debatably better than before).
            Which led to a decade long stint as a "master builder" in the construction industry. Today, I take apart and build things in the virtual world.</p>
        </section>
    `
}

angular.module('app').component('about', about);