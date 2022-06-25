<script>
// @ts-nocheck

import SearchBar from '$lib/Search/SearchBar.svelte';
import SearchPreview from '$lib/Search/DetailsPreview.svelte';
import SearchResults from '$lib/Search/SearchResults.svelte';
import { focusedRecord } from "../store/store"
import { fade } from 'svelte/transition';

	let getSearchResults;

	function showResults () {
		getSearchResults();
	}

</script>

<svelte:head>
	<title>Search</title>
	<meta name="description" content="Database search" />
</svelte:head>

<section>
	<h1>
		Search
	</h1>
	<SearchBar on:getResults={showResults}/>
	<div class="flex">
		<div class="w-1/2">
			<SearchResults bind:getsearchResults={getSearchResults}/>
		</div>
		<div class=" px-6 w-1/2">
			{#if $focusedRecord !== ''}
				<div transition:fade>
					<SearchPreview/>
				</div>
			{/if}
		</div>
	</div>

</section>

<style>
</style>
