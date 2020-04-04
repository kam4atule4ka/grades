<style src="./style.scss">

</style>


<script>
      	const initialNumbers = [1, 2, 3, 4];
        let numbers = initialNumbers;


        function addNumber() {
          numbers = [...numbers, numbers.length + 1];
        }
        function reset() {
           numbers = initialNumbers;
        }

        $: sum = numbers.reduce((t, n) => t + n, 0);
      </script>

<div class="title">
    <span class="title__top"> </span>
    <span class="title__main">

    <input type=text placeholder="Логин" required="{true}">
    <input type=text placeholder="Пароль" required="true">
      <button class="login" on:click={addNumber} type="submit">
        Войти
      </button>

    </span>
    <span class="title__back"></span>
</div>

