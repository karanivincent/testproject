<script>
// @ts-nocheck

    import { focusedRecord } from "../../store/store"
    export let name = '';
    export let id = '';
    export let photo = '';
    export let membership ='';
    export let active =''

    function showDetailsPreview (id){
        focusedRecord.set(id)
    }
</script>
<article>
    <div  on:mouseenter={()=> showDetailsPreview(id)}   class=" relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
        <div class="relative flex-shrink-0">
        <img
        class="h-10 w-10 rounded-full ring-4 ring-green-500"
        class:ring-yellow-500={membership=='GOLD'}
        class:ring-gray-400={membership=='SILVER'}
        class:ring-purple-500={membership=='PLATIN'}
        class:ring-gray-100={membership==''}
        src={'/profile_pics/small/'+photo} alt={name+' image'}>
        <div class="absolute z-10 right-0 bottom-0 rounded-full h-3 w-3 bg-red-500 "
        class:bg-green-500={active=='TRUE'}></div>
        </div>
        <div class="flex-1 min-w-0">
        <div href="#" class="focus:outline-none">
            <p class=" font-semibold text-gray-900">{name}</p>
            <p class="text-sm text-gray-500 truncate">{id}</p>

        </div>
        </div>
    </div>

</article>