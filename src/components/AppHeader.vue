<template>
    <div class="ui secondary pointing menu">
        <router-link to="/" class="active item">Image Storage</router-link>
        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
                <router-link to="/" class="ui item">Gallary</router-link>
                <router-link to="/upload" class="ui item">Upload</router-link>
                <a href="#" class="ui item" @click="logout">Logout</a>
            </div>
            <div v-else>
                <a href="#" class="ui item" @click="login">Login</a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "AppHeader",
    methods: { ...mapActions(["login", "logout"]) },
    computed: { ...mapGetters(["isLoggedIn"]) }
};
</script>

<style scoped>
.horizontal {
    display: flex;
    flex-direction: flow;
}
</style>