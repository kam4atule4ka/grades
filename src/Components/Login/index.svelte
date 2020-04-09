<script>
    import ImageExample from '@Components/ImageExample';
    import { navigate } from "svelte-routing";

    if (localStorage.getItem('token')) {
        navigate("/", { replace: true });
    }

    let login = '';
    let password = '';

    function submit () {
        fetch('/login', {method:'POST', props:{login, password}}).then(function(data) {
            localStorage.setItem('token', data.body.token);
            navigate('/');
        });
    }
</script>

<style src="./style.scss">

</style>


<div class="login">
    <div class="login__top"><ImageExample /></div>
    <form class="login__main" on:submit|preventDefault={submit}>

       <input class="login__input" bind:value={login} type=text placeholder="Логин" required/>
       <input class="login__input" bind:value={password} type=password placeholder="Пароль" required />
       <button class="login__button" type="submit">
         Войти
       </button>

    </form>
    <div class="login__back"></div>
</div>

