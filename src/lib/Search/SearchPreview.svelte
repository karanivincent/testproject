<script>
// @ts-nocheck

    import { createEventDispatcher } from 'svelte';
    import { focusedRecord, query } from "../../store/store";

    export var filteredPeople = []
    const dispatch = createEventDispatcher();


    function hidePreview(){
        dispatch('close')

    }

    function selectUser(id, name){
        hidePreview()
        focusedRecord.set(id)
        query.set(name)
    }



</script>

<div class="flex flex-col space-y-2 rounded-lg bg-white shadow-lg w-full max-w-md p-4">
    {#if filteredPeople.length}
    {#each filteredPeople as user }
        <button on:click={()=> selectUser(user.id, user.first_name)} class=" w-full rounded-lg  hover:bg-gray-100 transition-colors  px-4 py-2">
            <h2 class=" font-semibold text-lg text-left "> {user.first_name+' '+user.last_name}</h2>
            <div class=" flex justify-start space-x-2 text-sm">
                <span>
                    {user.id}
                </span>
                <span>
                    {user.email_address}
                </span>
            </div>
        </button>
    {/each}
    {:else}
    <p>No results</p>

    {/if}
</div>

