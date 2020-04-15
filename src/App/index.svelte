<script>
    import { Router, Link, Route } from "svelte-routing";
    import Layout from '@Components/Layout';
    import Login from '@Components/Login';
    import Home from '@Components/Home';
    import Competitor from '@Components/Competitor';
    import PrivateRoute from '@Components/PrivateRoute';

</script>


<style src="./style.scss">

</style>

<Router>
  <Layout>
      <div class="container">
          <Route path="/"><PrivateRoute><Home /></PrivateRoute></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/competitor/:id/:phone" let:params><Competitor id="{params.id}" phone="{params.phone}"/></Route>
      </div>
  </Layout>

</Router>


