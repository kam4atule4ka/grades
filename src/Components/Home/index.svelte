<script>
    import { navigate } from "svelte-routing";

    function logout() {
      localStorage.removeItem('token');
      navigate("/login", { replace: true });
    }

</script>

<style src="./style.scss">

</style>

<div class="home">
    <button on:click={logout} type="submit">
         Выйти
    </button>
</div>