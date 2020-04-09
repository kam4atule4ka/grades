<script>
    import { navigate } from "svelte-routing";

    function logout() {
      localStorage.removeItem('token');
      navigate("/login", { replace: true });
    }
    function getList () {
        fetch('/list', {method:'GET'}).then(function(data) {

            const competitors = JSON.stringify(data.body);
            console.log(competitors);
            for (var i = 0; i < competitors.length; i++) {
                var name = competitors[i].name;
                var cvUrl = competitors[i].cvUrl;
//        let table = document.write('<tr className="mess-hide"><td className="name"><h4>' + name + '</h4></td><td className="song"><h4>' + cvUrl +  '</h4></td></tr>');
            }
//        document.write('</table></div>');
        });
    }

</script>

<style src="./style.scss">

</style>

<div class="list">


</div>
<div class="show">

    <button on:click={getList} type="button">
         Показать
    </button>
</div>
<div class="home">
    <button on:click={logout} type="submit">
         Выйти
    </button>
</div>