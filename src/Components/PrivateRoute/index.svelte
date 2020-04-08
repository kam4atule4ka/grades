<script>
    import { navigate } from "svelte-routing";

    if (!localStorage.getItem('token')) {
        navigate("/login", { replace: true });
    }
</script>

<slot />
