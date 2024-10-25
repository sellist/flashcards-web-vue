<script setup lang="ts">
import { ref } from "vue";

function toggleNavbar() {
    isNavbarVisible.value = !isNavbarVisible.value;
}

function beforeEnter(el) {
    el.style.opacity = 0;
    el.style.transform = "translate(0, -100px)";
}

function enter(el, done) {
    console.log("enter");
    el.offsetHeight;
    el.style.opacity = 1;
    el.style.transform = "translate(0, 0)";
    console.log("enter done");
    done();
}

function afterEnter(el) {
    el.style.transition = "";
}

function beforeLeave(el) {
    console.log("beforeLeave");
    el.style.transition = "all 0.5s";
    el.style.opacity = 1;
    el.style.transform = "translate(0, 0)";
}

function leave(el, done) {
    el.offsetHeight;
    el.style.transition = "all 0.5s";
    el.style.transform = "translate(0, -100px)";
    el.style.opacity = 0;
    done();
}

function afterLeave(el) {
    console.log("afterLeave");
    el.style.transition = "all 0.5s";
}

function fadeInShowButton(el, done) {
    el.style.transition = "opacity 0.5s";
    el.style.opacity = 1;
    done();
}

function fadeOutShowButton(el, done) {
    el.style.transition = "opacity 0.5s";
    el.style.opacity = 0;
    done();
}

const isNavbarVisible = ref(true);

</script>

<template>
    <div class="nav-container" >
        <transition
            :css="false"
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
            >
        <nav v-if="isNavbarVisible" class="navbar">
            <ul>
                <Button @click="$router.push('/')" label="Home"  rounded />
                <Button @click="$router.push('/about')" label="About" rounded />
                <Button @click="$router.push('/create')" label="Create"  rounded />
                <Button @click="$router.push('/play')" label="Play Deck" rounded />
                <Button @click="$router.push('/choose')" label="Choose Deck" rounded />
                <Button @click="toggleNavbar" label="Toggle Navbar" rounded />
            </ul>
        </nav>
        </transition>
        <transition @enter="fadeInShowButton" @leave="fadeOutShowButton">
            <Button v-if="!isNavbarVisible" @click="toggleNavbar" class="show-navbar-button">Show Navbar</Button>
        </transition>
    </div>
    <div :class="{ 'navbar-offset': isNavbarVisible }">
        <slot></slot>
    </div>
</template>

<style>

.nav-container {
    height: var(--navbar-height);
}

.navbar {
    min-width: var(--minimum-width);
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    background-color: var(--navbar-background);
    padding: 0 0 0 0;
    margin: 0 0 0 0;
    height: var(--navbar-height);
    max-height: var(--navbar-height);
    transition: all 0.5s;
}

ul {
    display: flex;
    margin: 0;
    padding: 0;
}

.show-navbar-button {
    position: relative;
    z-index: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    transition: all 0.5s;
}

template {
    padding: 0;
    margin: 0;
}

Button {
    margin: 0;
    white-space: nowrap;
    text-align: center;
    text-decoration: none;
}
</style>