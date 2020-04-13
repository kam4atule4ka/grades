<script>
    import { navigate } from "svelte-routing";

    function logout() {
      localStorage.removeItem('token');
      navigate("/login", { replace: true });
    }
    let competitors = [];
    function getList () {
        fetch('/list', {method:'GET'}).then(function(data) {

            competitors = data.body;
            console.log(competitors);})
}
</script>

<style src="./style.scss">

</style>

<div class="list">


</div>
<div class="show">
<ul>
	{#each competitors as competitor}
		<li>
			{competitor.name}
			{competitor.cvUrl}
		</li>
	{/each}
</ul>
    <button on:click={getList} type="button">
         Показать
    </button>
</div>
<div class="home">
    <button on:click={logout} type="submit">
         Выйти
    </button>
</div>