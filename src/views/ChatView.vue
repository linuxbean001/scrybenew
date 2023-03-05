<template>
  <DashboardContainer>
    <!-- Main content -->
    <div class="flex flex-1 items-stretch overflow-hidden">
      <main class="flex-1 overflow-y-auto">
        <div class="mx-auto max-w-7xl px-4 pt-2">
          <div class="flex">
            <h1 class="flex-1 text-3xl font-bold text-gray-900">Chat</h1>
          </div>
          <div class="flex max-w-7xl pt-4">
            <div class="w-7/12">
              <form action="#">
                <label for="comment" class="sr-only">Comment</label>
                <div>
                  <textarea rows="5" name="comment" id="comment" class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6" placeholder="Ask your question..." />
                </div>
                <div class="mt-2 flex justify-end">
                  <button type="submit" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div class="flex pt-10">
            <div class="w-8/12"> <h2 class="flex-1 text-2xl text-gray-900 pb-4">Results</h2>

              <div class="max-w-2xl p-4 border border-grey-600 rounded-lg bg-gray-50">

        <p>Purus morbi dignissim senectus mattis adipiscing. Amet, massa quam varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc, congue erat ac. Cras fermentum convallis quam.</p>
        <p class="mt-6">Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.</p>
      </div> </div>
            <div class="w-3/12"> <h2 class="flex-1 text-2xl text-gray-900 pb-4">Sources</h2>

              <div class="overflow-hidden bg-white shadow sm:rounded-md">
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="position in positions" :key="position.id">
        <a href="#" class="block hover:bg-gray-50">
          <div class="flex items-center px-4 py-4 sm:px-6">
            <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
              <div class="truncate">
                <div class="flex text-sm">
                  {{ position.title }}
                  <p class="ml-1 flex-shrink-0 font-normal text-gray-500 pl-2">{{ position.department }}</p>
                </div>
              </div>
              <div class="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                <div class="flex -space-x-1 overflow-hidden">
                  <img v-for="applicant in position.applicants" :key="applicant.email" class="inline-block h-6 w-6 rounded-full ring-2 ring-white" :src="applicant.imageUrl" :alt="applicant.name" />
                </div>
              </div>
            </div>
            <div class="ml-5 flex-shrink-0">
              <ChevronRightIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div> </div>
          </div>
        </div>
      </main>
    </div>
  </DashboardContainer>
</template>

<script setup>
import DashboardContainer from '../components/DashboardContainer.vue'  

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue'
import { AtSymbolIcon, CodeBracketIcon, LinkIcon } from '@heroicons/vue/20/solid'

import { CalendarIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'

const positions = [
  {
    id: 1,
    title: '1',
    department: 'AMPU White Paper',
    closeDate: '2020-01-07',
    closeDateFull: 'AMPU White Paper',

  },
   {
    id: 1,
    title: '2',
    department: 'AMPU Website',
    closeDate: '2020-01-07',
    closeDateFull: 'AMPU White Paper',

  },
]

</script>
