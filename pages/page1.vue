<script setup>
import { ref } from 'vue'

const highest = ref(0)
const lowest = ref(0)
const numberSearch= ref()
const modelTheme = ref()

const articleTableData = ref([{
    number: '1',
    articleID: '7601391',
    articleTitle: '「柯文哲走了最錯的一步！」 郭正亮揭硬傷：趙少康講對了',
    website: '新聞網',
    accessQtd: 455861,
},
{
    number: '2',
    articleID: '7602253',
    articleTitle: '鄭文燦被控開房影片鑑定結果出爐...她揪刑事局1句話 網：豁然開朗',
    website: '新聞網',
    accessQtd: 355861,
},
{
    number: '3',
    articleID: '7602648',
    articleTitle: 'Lulu癱倒後台畫面曝光！主持金馬前夕狂吐暴瘦',
    website: '噓星聞',
    accessQtd: 199941,
}])
</script>

<template>
    <div>
        <h1 class="mb-3"> 主題標籤廣告 </h1>
        <Card>
            <div class="flex gap-3 flex-wrap w-full">
                <Input label="主題名稱" :isRequired="true" placeholder="主題名稱" v-model:model="modelTheme"></Input>
                <Input label="編號查詢" :isRequired="true" placeholder="編號查詢" v-model:model="numberSearch"></Input>
                <div class="flex items-center  md:w-1/2">
                    <Input type="number" label="最大值" :isRequired="false" placeholder="最大值" v-model:model="highest"></Input>
                    <div class="mt-5 px-1">~</div>
                    <Input type="number" label="最小值" :isRequired="false" placeholder="最小值" v-model:model="lowest"></Input>
                </div>

            </div>
            <div class="flex justify-end mt-5">
                <div class="w-[6rem]">
                    <Button label="確定"></Button>
                </div>
            </div>
        </Card>
        <div class="flex gap-3 flex-wrap mt-4">
            <div class="bg-white p-3 border border-gray-200 w-full rounded-lg ">
                <table class="table table-auto  border-gray-200 w-full">
                    <thead>
                        <tr>
                            <th>文章 ID </th>
                            <th>文章標題 </th>
                            <th>網站 </th>
                            <th>瀏覽量 </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in articleTableData" :key="index">
                            <td>
                                {{ item.articleID }}
                            </td>
                            <td>
                                {{ item.articleTitle }}
                            </td>
                            <td>
                                {{ item.website }}
                            </td>
                            <td>
                                {{ item.accessQtd }}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex items-center justify-between  bg-white  py-3 sm:px-3  ">
                    <div class="flex flex-1 justify-between sm:hidden">
                        <a href="#"
                            class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                        <a href="#"
                            class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
                    </div>
                    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between mt-3">
                        <div>
                            <p class="text-sm text-gray-700">
                                Showing
                                <span class="font-medium">1</span>
                                to
                                <span class="font-medium">10</span>
                                of
                                <span class="font-medium">97</span>
                                results
                            </p>
                        </div>
                        <div>
                            <nav class="isolate inline-flex -space-x-px rounded-md shadow-xs" aria-label="Pagination">
                                <a href="#"
                                    class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                    <span class="sr-only">Previous</span>
                                    <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                        data-slot="icon">
                                        <path fill-rule="evenodd"
                                            d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </a>
                                <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
                                <a href="#" aria-current="page"
                                    class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                                <a href="#"
                                    class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>

                                <a href="#"
                                    class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                    <span class="sr-only">Next</span>
                                    <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                        data-slot="icon">
                                        <path fill-rule="evenodd"
                                            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>