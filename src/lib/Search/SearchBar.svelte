
<script>
  import SearchPreview from "./SearchPreview.svelte";
  import { createEventDispatcher } from 'svelte';
  import { query } from "../../store/store"
  import users from '../../mock/users.json';

  export let allUsers = users
  const dispatch = createEventDispatcher();

  let showPreview = false;
  let filteredUsers = allUsers



  function closePreview (){
    showPreview = false
  }
   function displayPreview (){
    showPreview = true
  }

  function filterResults () {
    filteredUsers =  allUsers.filter((user) => {
          return user.first_name.toLowerCase().includes($query.toLowerCase())
          || user.last_name.toLowerCase().includes($query.toLowerCase())
          || user.id.toLowerCase().includes($query.toLowerCase())
          || user.email_address.toLowerCase().includes($query.toLowerCase())
        });
    if($query.length >2 ){
      displayPreview()
      setTimeout(getResults, 2000)

      return
    }
    closePreview()
  }
    function getResults(){
      dispatch('getResults')
      closePreview()

  }







</script>
<section>
<div class="relative my-16">
  <form
  on:submit|preventDefault={getResults}
		class="flex space-x-2 mt-16 mb-6 max-w-sm rounded-lg shadow-lg bg-white py-2 px-6"
	>
    <div class=" w-full">

        <label for="search-bar" hidden >Search</label>
      <input
        bind:value={$query}
        on:input={filterResults}
       id="search-bar"  type="search" aria-label="Search record" placeholder="Search name, ID or email" class=" w-full  py-2  focus:outline-none" />
    </div>
    <button disabled={$query.length <3} aria-label="search-button"  class=" p-2 text-gray-400 hover:text-gray-600 transition-colors">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
    </button>
	</form>
  {#if showPreview}
     <div data-testid="search-preview" class=" max-w-sm absolute z-50 h-52 w-full">
    <SearchPreview filteredPeople={filteredUsers} on:close={closePreview}/>
  </div>
  {/if}

</div>
</section>
