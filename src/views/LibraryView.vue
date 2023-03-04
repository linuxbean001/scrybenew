<template>
  <DashboardContainer pageTitle="Library">
  <!-- Main content -->
      <div class="flex flex-1 items-stretch overflow-hidden">
        <main class="flex-1 overflow-y-auto">
          <div class="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
            <div class="flex">
              <h1 class="flex-1 text-2xl font-bold text-gray-900">Library</h1>
              <div class="ml-6 flex items-center rounded-lg bg-gray-100 p-0.5 sm:hidden">
                <button type="button" class="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <Bars4Icon class="h-5 w-5" aria-hidden="true" />
                  <span class="sr-only">Use list view</span>
                </button>
                <button type="button" class="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <Squares2X2IconMini class="h-5 w-5" aria-hidden="true" />
                  <span class="sr-only">Use grid view</span>
                </button>
              </div>
            </div>

            <!-- Tabs -->
            <div class="mt-3 sm:mt-2">
              <div class="sm:hidden">
                <label for="tabs" class="sr-only">Select a tab</label>
                <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
                <select id="tabs" name="tabs" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                  <option selected="">Recently Viewed</option>
                  <option>Recently Added</option>
                  <option>Favorited</option>
                </select>
              </div>

              <div class="hidden sm:block">
                <div class="flex items-center border-b border-gray-200">
                  <nav class="-mb-px flex flex-1 space-x-6 xl:space-x-8" aria-label="Tabs">
                    <a v-for="tab in tabs" :key="tab.name" :href="tab.href" :aria-current="tab.current ? 'page' : undefined" :class="[tab.current ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium']">{{ tab.name }}</a>
                  </nav>
                  <div class="ml-6 hidden items-center rounded-lg p-0.5 sm:flex">
                  	<router-link to="/upload">
                     <button type="button" class="flex-1 rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Upload</button>
                     </router-link>
                  </div>
                </div>
              </div>
            </div>

            <!-- Gallery -->
            <section class="mt-8 pb-16" aria-labelledby="gallery-heading">
              <h2 id="gallery-heading" class="sr-only">Recently viewed</h2>
              <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <li v-for="file in files" :key="file.name" class="relative">
                  <div :class="[file.current ? 'ring-2 ring-indigo-500 ring-offset-2' : 'focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100', 'aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100']">
                    <img :src="file.source" alt="" :class="[file.current ? '' : 'group-hover:opacity-75', 'pointer-events-none object-cover']" />
                    <button type="button" class="absolute inset-0 focus:outline-none">
                      <span class="sr-only">View details for {{ file.name }}</span>
                    </button>
                  </div>
                  <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{{ file.name }}</p>
                  <p class="pointer-events-none block text-sm font-medium text-gray-500">{{ file.type }}</p>
                </li>
              </ul>
            </section>
          </div>
        </main>

        <!-- Details sidebar -->
        <aside class="hidden w-96 overflow-y-auto border-l border-gray-200 bg-white p-8 lg:block">
          <div class="space-y-6 pb-16">
            <div>
              <div class="aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg">
                <img :src="currentFile.source" alt="" class="object-cover" />
              </div>
              <div class="mt-4 flex items-start justify-between">
                <div>
                  <h2 class="text-lg font-medium text-gray-900"><span class="sr-only">Details for </span>{{ currentFile.name }}</h2>
                </div>

                <button type="button" class="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <HeartIcon class="h-6 w-6" aria-hidden="true" />
                  <span class="sr-only">Favorite</span>
                </button>
              </div>
            <div>
              <div class="mt-2 flex items-center justify-between">
                <p class="text-sm">White paper on the Jewish Imperative to Protect and Strengthen American Democracy. </p>
              </div>
            </div>
            </div>
            <div>
              <h3 class="font-medium text-gray-900">Information</h3>
              <dl class="mt-2 divide-y divide-gray-200 border-t border-b border-gray-200">
                <div v-for="key in Object.keys(currentFile.information)" :key="key" class="flex justify-between py-3 text-sm font-medium">
                  <dt class="text-gray-500">{{ key }}</dt>
                  <dd class="whitespace-nowrap text-gray-900">{{ currentFile.information[key] }}</dd>
                </div>
              </dl>
            </div>



            <div class="flex gap-x-3">
              <button type="button" class="flex-1 rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">View</button>
              <button type="button" class="flex-1 rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Delete</button>
            </div>
          </div>
        </aside>
      </div>
  
</DashboardContainer>
</template>

<script setup>
import DashboardContainer from '../components/DashboardContainer.vue'  

const tabs = [
  { name: 'All', href: '#', current: true },
]
const files = [
  {
    name: 'AMPU Whitepaper',
    type: 'PDF',
    source:
      'https://images.squarespace-cdn.com/content/v1/6213e61a8233fb2ef763a789/bd3decf7-bb9c-40ed-a7cc-813c20079bd6/1650314626.png?format=750w',
    current: true,
  },
  {
    name: 'AMPU Website',
    type: 'Website',
    source:
      'https://images.squarespace-cdn.com/content/v1/6213e61a8233fb2ef763a789/85348405-950d-4f2f-ac5a-579f90ff72e7/favicon.ico?format=100w',
    current: false,
  },
  
]
const currentFile = {
   name: 'AMPU Whitepaper',
  type: 'PDF',
  source:
    'https://images.squarespace-cdn.com/content/v1/6213e61a8233fb2ef763a789/bd3decf7-bb9c-40ed-a7cc-813c20079bd6/1650314626.png?format=750w',
  information: {
    'Uploaded by': 'Sofi Hersher',
    Uploaded: 'June 8, 2020',
    'Last modified': 'May 2, 2022',
    Type: 'PDF',
  },
}
  
</script>
