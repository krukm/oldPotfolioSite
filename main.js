'use strict';

const main = {
    template: `
        <nav></nav>
        <section class="section__container">
            <h1 class="h1__name">Matthew Kruk</h1>
            <section class="section__line"></section>
            <p class="p__main">I'm a builder of things, my favorite of which are beautiful apps</p>
        </section>
    `,
    controller: function () {
        
    }
}

angular.module('app').component('main', main);