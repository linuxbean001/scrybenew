<template>
  <main class="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
    <div x-data="{ activeTab:  0 }">
      <div class="border-b border-b-gray-100">
        <ul class="-mb-px flex items-center gap-4 text-sm font-medium">
          <li>
            <a @click="activeTab = 0" :class="{ 'relative text-primary-700  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary-700': activeTab === 0 }" class="inline-flex cursor-pointer items-center gap-2 px-1 py-3 text-gray-500 hover:text-primary-900">
              <DocumentTextIcon class="h-5 w-5" aria-hidden="true" />
              Files</a
            >
          </li>
          <li>
            <a @click="activeTab = 1" :class="{ 'relative text-primary-700  after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary-700': activeTab === 1 }" class="inline-flex cursor-pointer items-center gap-2 px-1 py-3 text-gray-500 hover:text-primary-900">
              <ChatBubbleLeftEllipsisIcon class="h-5 w-5" aria-hidden="true" />
              Chat</a
            >
          </li>
        </ul>
      </div>
      <div class="py-6">
        <div :class="{ '!block': activeTab === 0 }" x-show.transition.in.opacity.duration.600="activeTab === 0" class="hidden">
          <div class="max-w-xs">
            <label for="example5" class="mb-1 block text-sm font-medium text-gray-700">Upload files</label>
            <label class="text-sm flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-gray-200 p-6 transition-all hover:border-primary-700">
              <div class="space-y-1 text-center">
                <div class="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                  <CloudArrowUpIcon class="h-6 w-6" aria-hidden="true" />
                </div>
                <div class="text-gray-600"><a href="#" class="font-medium text-primary-700 hover:text-primary-900">Click to upload</a> or drag and drop</div>
                <p class="text-sm text-gray-500">PDF, PNG, or JPG</p>
              </div>
              <input id="example5" type="file" class="sr-only" />
            </label>
          </div>
        </div>
        <div :class="{ '!block': activeTab === 1 }" x-show.transition.in.opacity.duration.600="activeTab === 1" class="hidden">
          <div class="max-w-3xl">
            <div class="relative overflow-hidden rounded-md border border-gray-300 shadow-sm focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50">
              <textarea id="example5" class="block w-full border-0 focus:border-0 focus:ring-0" rows="1" placeholder="e.g. Scrybe, write me a summary of the non-profit's mission."></textarea>
              <div class="flex w-full items-center justify-between bg-white p-2">
                <button type="button" class="ml-auto rounded border border-primary-700 bg-primary-700 px-2 py-1.5 text-center text-xs font-medium text-white shadow-sm transition-all hover:bg-primary-900 focus:ring focus:ring-primary-100">Send Chat</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 1
    }
  }
}
</script>
<script setup>
import { ChatBubbleLeftEllipsisIcon, DocumentTextIcon, CloudArrowUpIcon } from '@heroicons/vue/24/outline'
</script>
