'use strict';

const contact = {
    template: `
        <nav></nav>
        <section class="section__contact">
            <p class="contact__p">Want to ask me a question or just shoot the breeze?</p>
            <form ng-submit="$ctrl.sendMail(mail);">
                <input ng-model="mail.name" type="text" placeholder="name" required>
                <input ng-model="mail.subject" type="text" placeholder="subject" required>
                <textarea ng-model="mail.message" type="text" placeholder="your meassage here..." required></textarea>
                <button class="form__button">email</button>
            </form>
        </section>
    `,
    controller: ['$window', function ($window) {
        const vm = this;

        vm.sendMail = (mail) => {
            console.log(mail);
            $window.open(`mailto:matthew.kruk@gmail.com?subject=${mail.subject}&body=${mail.message}%0d%0dFrom:%20${mail.name}`);
        }
    }]
}

angular.module('app').component('contact', contact);