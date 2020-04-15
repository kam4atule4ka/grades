<script>
    import { navigate } from "svelte-routing";
    let competitors = [];
    function logout() {
      localStorage.removeItem('token');
      navigate('/login/', { replace: true });
    }

    function getList () {
        fetch('/list', {method:'GET'}).then(function(data) {

            competitors = data.body;
            console.log(competitors);})
}
    function reset() {
        competitors = [];
        console.log(competitors);
    }

    function goToCompetitorById(id, phone) {
        navigate(`/competitor/${id}/${phone}`);
    }

</script>

<style src="./style.scss">

</style>

<div class="home__list">
{#if competitors.length !== 0}
    <table>
        {#each competitors as competitor}
		  <tr on:click={()=> goToCompetitorById(competitor.id, competitor.phone)}>
            <td>{competitor.name}</td>
            <td>{competitor.cvUrl}</td>
          </tr>
        {/each}
    </table>
{:else}
	<p>Ничегошеньки нет!</p>
{/if}
</div>
<div class="home__button">

    <button on:click={getList} type="button">
         Показать
    </button>
    <button on:click={reset} type="button">
         Очистить
    </button>
</div>
<div class="home__button">
    <button on:click={logout} type="submit">
         Выйти
    </button>
</div>
