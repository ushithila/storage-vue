<script lang="ts">
export default {
  data: () => {
    return {
      headers: [
        "Name", 
        "Uploaded Date", 
        "Sharing", 
        "Size",
        "Actions"
      ],
    }
  }
}
</script> 

<template>
    <section>
        <table id="storage-table">
        <thead>
        <tr>
            <th v-for="name in headers" :key="name">
                {{ name }}
            </th>
        </tr>
        </thead>
        </table>
    </section>
</template>

<style>
table {
    font-size: 16px;
    width: 100%;
}

thead {
    z-index: 1;
    position: sticky;
    top: 0;
    background-color: var(--secondary-background-color);
}

tr {
    display: grid;
    grid-template-columns: auto 1fr 12.5rem 8rem 7rem;
    align-items: center;
    text-align: left;
    height: 3rem;
    border-bottom: 1px solid var(--section-border);
}

#storage-table>thead>tr>th:last-child {
    padding: 0 2rem;
}
</style>