<script>
    import { navigate } from "svelte-routing";
    import { onMount } from 'svelte';

    let competitors = [];

    onMount(function () {
        fetch('/competitor/list', {method:'GET'}).then(function(data) {
            competitors = data.body;
        })
    });

    function logout() {
      localStorage.removeItem('token');
      navigate('/login/', { replace: true });
    }

    function getList () {
        fetch('/competitor/list', {method:'GET'}).then(function(data) {
            competitors = data.body;
        })
    }

    function reset() {
        competitors = [];
    }

    function goToCompetitorById(id) {
        navigate(`/competitor/${id}`);
    }

</script>

<style src="./style.scss">

</style>

<div class="home__list">
{#if competitors.length !== 0}
    <table>
        {#each competitors as competitor}
		  <tr on:click={()=> goToCompetitorById(competitor.id)}>
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
