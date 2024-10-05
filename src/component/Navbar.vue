<script setup lang="ts">

</script>

<template>
<nav>
    <ul>
        <Button @click="$router.push('/')">Home</Button>
        <Button @click="$router.push('/about')">About</Button>
        <Button @click="$router.push('/create')">Create Deck</Button>
        <Button @click="$router.push('/play')">Play</Button>
    </ul>
</nav>
</template>

<style scoped>
nav {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    background-color: var(--navbar-background);
}

ul {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    margin: 0 0 0 0;
}
</style>