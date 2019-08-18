<template>
    <div class="ui secondary pointing menu">
        <a href="/" class="active item">Image Storage</a>
        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
                <a href="#" class="ui item">Gallary</a>
                <a href="#" class="ui item">Upload</a>
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