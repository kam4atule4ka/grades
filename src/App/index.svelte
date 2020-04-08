<script>

    import { Router, Link, Route } from "svelte-routing";
    import Layout from '@Components/Layout';
    import Login from '@Components/Login';
    import Home from '@Components/Home';


</script>


<style src="./style.scss">

</style>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
  </nav>
  <Layout>
      <div class="container">
          <Route path="/"><Home /></Route>
          <Route path="/login"><Login /></Route>
      </div>
  </Layout>

</Router>


