<script>
    import { onMount } from 'svelte';
    import { navigate } from "svelte-routing";

    export let id = '';
    let competitor = null;
    let name = '';
    let phone = '';

    onMount(function () {
        fetch(`/competitor/${id}`, {method:'GET'}).then(function(data) {
            competitor = data.body;
            name = competitor.name;
            phone = competitor.phone;
            console.log(competitor);
        })
    });

    function change () {
        fetch('/change', {method:'POST', props:{id, name, phone}}).then(function(data) {
            console.log(id, name, phone);
        });
    }

    function back () {
        navigate('/');
    }

</script>

<style src="./style.scss">

</style>

<div class = "competitor">
{#if competitor != null}
    <form on:submit|preventDefault={change}>
        <input bind:value={name} type=text  required/>
        <input bind:value={phone} type=text required/>
        <p></p>
        <button class="competitor__button" type="submit">Сохранить</button>
    </form>
    <div>{competitor.cvUrl}</div>
    {#if competitor.comments  && competitor.comments.length >0}
        <table>
            {#each competitor.comments as comment}
                <tr>
                    <td>{comment.id}</td>
                    <td>{comment.text}</td>
                </tr>
            {/each}
        </table>
    {:else}
        <p>Нет комментов</p>
    {/if}
    <button on:click={back}>Назад</button>
{:else}
    <p> Loading </p>
{/if}
</div>

