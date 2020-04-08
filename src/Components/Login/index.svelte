<script>
    import ImageExample from '@Components/ImageExample';
</script>

<style src="./style.scss">

</style>


<div class="login">
    <div class="login__top" ><ImageExample /></div>
    <div class="login__main">

       <input class="login__input" type=text placeholder="Логин" required="{true}">
       <input class="input" type=password placeholder="Пароль" required >
       <button class="login__button" type="submit">
         Войти
       </button>

    </div>
    <div class="login__back"></div>
</div>

