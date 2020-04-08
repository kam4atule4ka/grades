<script>
    import { Router, Link, Route } from "svelte-routing";
    import Layout from '@Components/Layout';
    import Login from '@Components/Login';
    import Home from '@Components/Home';
    import PrivateRoute from '@Components/PrivateRoute';

</script>


<style src="./style.scss">

</style>

<Router>
  <Layout>
      <div class="container">
          <Route path="/"><PrivateRoute><Home /></PrivateRoute></Route>
          <Route path="/login"><Login /></Route>
      </div>
  </Layout>

</Router>


