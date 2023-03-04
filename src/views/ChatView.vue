<template>
  <DashboardContainer>
    <div class="flex flex-1 items-stretch overflow-hidden">
        <main class="flex-1 overflow-y-auto">
          
          <div class="mx-auto w-max px-4 pt-8 sm:px-6 lg:px-8">
            <div class="flex">
              <h1 class="flex-1 text-2xl font-bold text-gray-900 pb-4">Chat</h1>
            </div>
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


          </main>
        </div>

</DashboardContainer>
</template>

<script setup>
import DashboardContainer from '../components/DashboardContainer.vue'  

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue'
import { AtSymbolIcon, CodeBracketIcon, LinkIcon } from '@heroicons/vue/20/solid'

</script>
