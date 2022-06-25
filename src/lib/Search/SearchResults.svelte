<script>
// @ts-nocheck

import ResultItem from "./ResultItem.svelte";
import users from '../../mock/users.json';
import { query } from "../../store/store";

var searchResults = [];

export const getsearchResults =() => {
    searchResults = users.filter((user) => {
        return user.first_name.toLowerCase().includes($query.toLowerCase())
        || user.last_name.toLowerCase().includes($query.toLowerCase())
        || user.id.toLowerCase().includes($query.toLowerCase())
        || user.email_address.toLowerCase().includes($query.toLowerCase())
    });
}
  $: membersGroup =  searchResults.filter((user) => user.relationship==='member');
  $: staffGroup =  searchResults.filter((user) => user.relationship==='staff');
  $: prospectGroup =  searchResults.filter((user) => user.relationship==='prospect');
</script>
<section>
    <div class="grid grid-cols-1 gap-4 ">

        {#if membersGroup.length}

            <h2 class="font-semibold text-gray-700 text-lg"> Members</h2>
            {#each membersGroup as result }
                <ResultItem bind:photo={result.avatar} bind:id={result.id} bind:membership={result.membership} bind:active={result.active} bind:name={result.first_name}/>
            {/each}
        {/if}

        {#if staffGroup.length}

            <h2 class="font-semibold text-gray-700 text-lg"> Staff</h2>
            {#each staffGroup as result }
                <ResultItem bind:photo={result.avatar} bind:id={result.id} bind:membership={result.membership} bind:active={result.active} bind:name={result.first_name}/>
            {/each}
        {/if}

        {#if prospectGroup.length}

            <h2 class="font-semibold text-gray-700 text-lg"> Prospect</h2>
            {#each prospectGroup as result }
                <ResultItem bind:photo={result.avatar} bind:id={result.id} bind:membership={result.membership} bind:active={result.active} bind:name={result.first_name}/>
            {/each}
        {/if}

    </div>
</section>