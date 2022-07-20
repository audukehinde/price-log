<template>
 <div class="hidden overflow-x-auto relative w-[80vw] md:flex justify-center">
    <table class="w-[90%] text-left">
      <thead class="border-b border-tertiary text-left">
        <tr >
          <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">
            NAME
          </th>
          <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">
            ROLE
          </th>
          <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4">
            AUTHORISATION
          </th>
        </tr>
      </thead>
      <tbody class="text-left">
        <tr class="border-b border-tertiary bg-[#C5D9DB]">
          <td
            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
          >
            Audu Kehinde
          </td>
          <td
            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
          >
            Admin
          </td>          
          <td
            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
          >
            <div class=""> Granted </div>
          </td>

             <td
            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
          >
            <div class="flex justify-center cursor-pointer gap-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z" fill="rgba(191,5,5,1)"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0H24V24H0z"/><path d="M20 3c.552 0 1 .448 1 1v1.757l-2 2V5H5v8.1l4-4 4.328 4.329-1.327 1.327-.006 4.239 4.246.006 1.33-1.33L18.899 19H19v-2.758l2-2V20c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h16zm1.778 4.808l1.414 1.414L15.414 17l-1.416-.002.002-1.412 7.778-7.778zM15.5 7c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5S14 9.328 14 8.5 14.672 7 15.5 7z" fill="rgba(198,3,3,1)"/></svg>
            </div>
          </td>
        </tr>
          
      </tbody>
    </table>
  </div>
   <i class="fa-solid fa-trash-can text-red-600 z-10"></i>
</template>

<script>
export default {
  name: 'Users'
}
</script>

<style>

</style>