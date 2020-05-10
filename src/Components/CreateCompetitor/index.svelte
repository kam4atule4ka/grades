<script>
    import { onMount } from 'svelte';
    import { navigate } from "svelte-routing";

    let competitor = {
        name: '',
        cvUrl: '',
        phone: ''
    };

    function create () {
        fetch('/create', {method:'POST', props: competitor}).then(function(data) {
            navigate('/');
            console.log(data);
        });
    }

    function back () {
        navigate('/');
    }

</script>

<style src="./style.scss">

</style>

<div class = "create">
    <form on:submit|preventDefault={create}>
        <input bind:value={competitor.name} type=text required/>
        <input bind:value={competitor.cvUrl} type=text required/>
        <input bind:value={competitor.phone} type=text required/>
        <p></p>
        <button class="competitor__button" type="submit">Сохранить</button>
    </form>
    <button on:click={back}>Назад</button>
</div>

