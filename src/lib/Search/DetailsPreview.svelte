<script>

  import { focusedRecord } from "../../store/store"
  import users from '../../mock/users.json';

  $: selectedRecord = users.find(user => user.id === $focusedRecord);




</script>
<article class=" mx-auto max-w-sm col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
      <div class="flex-1 flex flex-col p-8">
      <div class="mx-auto w-fit relative">
        <img class="w-32 h-32 flex-shrink-0 mx-auto rounded-full ring-8 ring-green-500"
        class:ring-yellow-500={selectedRecord?.membership=='GOLD'}
        class:ring-gray-400={selectedRecord?.membership=='SILVER'}
        class:ring-purple-500={selectedRecord?.membership=='PLATIN'}
        class:ring-gray-100={selectedRecord?.membership==''} src={'/profile_pics/medium/'+selectedRecord?.avatar} alt="">
        <div class="absolute z-10 right-2 bottom-3 rounded-full h-6 w-6 bg-red-500 "
        class:bg-green-500={selectedRecord?.active=='TRUE'}></div>
      </div>
      <h3 class="mt-6 text-gray-900 text-sm font-medium"> {selectedRecord?.first_name ?? '' + selectedRecord?.last_name ?? ''}</h3>
        <dl class="mt-1 flex-grow flex flex-col justify-between">
        <dd class="text-gray-500 text-sm">{selectedRecord?.id}</dd>
        </dl>
        <dl class="mt-1 flex-grow flex flex-col justify-between">
        <dd class="text-gray-500 text-sm">{selectedRecord?.membership}</dd>
        </dl>
        <dl class="mt-1 flex-grow flex flex-col justify-between">
        <dd class="text-gray-500 text-sm">{selectedRecord?.phone}</dd>
        </dl>
        <dl class="mt-1 flex-grow flex flex-col justify-between">
        <dd class="text-gray-500 text-sm">{selectedRecord?.email_address}</dd>
        </dl>
      </div>
      <div>
        <div class="-mt-px flex divide-x divide-gray-200">
          <div class="w-0 flex-1 flex">
          <button  class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:bg-gray-100 transition-colors">
            <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span class="ml-3">message</span>
          </button>
          </div>
          <div class="-ml-px w-0 flex-1 flex">
            <button  class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:bg-gray-100 transition-colors">
            <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span class="ml-3">call</span>
          </button>
          </div>
          <div class="-ml-px w-0 flex-1 flex">
            <button  class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:bg-gray-100 transition-colors">
            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <span class="ml-3">check-in</span>
          </button>
          </div>
        </div>
      </div>
    </article>