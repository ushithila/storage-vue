<template>
    <section class="table-container">
        <table id="storage-table">
        <thead>
        <tr>
            <th>
                <input
                    id="select-all-checkbox"
                    class="checkbox"
                    type="checkbox"
                >
            </th>
            <th
                v-for="({ name, keyName }, index) in schema"
                :key="`${index}-${keyName}`"
            >
                {{ name }}
            </th>
        </tr>
        </thead>
        <tbody 
            v-if="!data.length"
        >
            <tr class="table-row">
                <td class="checkbox-tr">
                    <input class="checkbox" type="checkbox">
                </td>
                <td>Folder name</td>
                <td>Jun 19, 2026</td>
                <td>--</td>
                <td class="action-td">
                    <div class="dropdown-btn">
                        <button class="action-button" type="button">
                            <!-- add dropdown icon -->
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
        <template v-else>
            <p> No items available </p>
        </template>
        </table>
    </section>
</template>
<script setup lang="ts">
import { StorageSchema } from '@/interfaces/StorageSchema';

const schema: Array<StorageSchema> = [
    {
        keyName: 'name',
        name: 'Name',
    },
    {
        keyName: 'date',
        name: 'Uploaded Date',
    },
    {
        keyName: 'size',
        name: 'Size',
    },
    {
        keyName: 'action',
        name: 'Actions',
    }
];
// turn into prop
const data: Array<string> = [];
</script> 
<style scoped lang="scss">
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

td {
    display: flex;
    gap: 0.5rem;
}

.checkbox-tr,
#storage-table th:has(input[type="checkbox"]) {
    padding: 0 1rem 0 1.5rem;
}

.checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-appearance: none;
    appearance: none;
    border-radius: .25rem;
    height: 1rem;
    width: 1rem;
    border: 1px solid var(--text-color);
    cursor: pointer;
}

.checkbox:hover {
    border-color: var(--button-color);
    outline-style: solid;
    outline-width: 2px;
    outline-color: var(--button-shadow-color);
}

.checkbox:active {
    border-color: var(--button-color);
    outline-width: .25rem;
    outline-color: var(--button-shadow-color);
}

.checkbox:checked {
    background-color: var(--button-color);
    border: 1px solid var(--button-color);
}

.checkbox:checked:active {
    background-color: var(--button-shadow-color);
    border: 1px solid var(--button-shadow-color);
}
</style>