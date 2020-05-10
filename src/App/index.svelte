<script>
    import { Router, Link, Route } from "svelte-routing";
    import Layout from '@Components/Layout';
    import Login from '@Components/Login';
    import Home from '@Components/Home';
    import Competitor from '@Components/Competitor';
    import CreateCompetitor from '@Components/CreateCompetitor';
    import PrivateRoute from '@Components/PrivateRoute';

</script>


<style src="./style.scss">

</style>

<Router>
  <Layout>
      <div class="container">
          <Route path="/"><PrivateRoute><Home /></PrivateRoute></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/competitor/new"><CreateCompetitor/></Route>
          <Route path="/competitor/:id" let:params><Competitor id="{params.id}"/></Route>
      </div>
  </Layout>

</Router>


