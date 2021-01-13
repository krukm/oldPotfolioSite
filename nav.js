'use strict';


const nav = {
    template: `
    <section class="section__nav">
        <a class="nav__main" href="#!/main">matthew kruk</a>
        <a href="#!/about">about</a>
        <a href="#!/contact">contact</a>
        <a href="https://github.com/krukm/">github</a>
    </section>
    `
}

angular.module('app').component('nav', nav);