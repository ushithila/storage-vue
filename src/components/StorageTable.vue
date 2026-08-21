<template>
    <section class="table-container">
        <table>
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
            <tbody>
                <tr class="table-row">
                    <td>
                        <input
                            class="checkbox" 
                            type="checkbox"
                        />
                    </td>
                    <td>
                        <FontAwesomeIcon 
                            :icon="faFolder"
                            size="lg"
                            class="directory-icon"
                        />
                        Folder name
                    </td>
                    <td>Jun 19, 2026</td>
                    <td>--</td>
                    <td>
                        <BaseButton
                            variant="neutral"
                            class="action-button"
                            @click="console.log('Dropdown button clicked')"                         
                        >
                            <template #icon>
                                <FontAwesomeIcon :icon="faEllipsisVertical"/>
                            </template>
                        </BaseButton>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
<script setup lang="ts">
import { StorageSchema } from '@/interfaces/StorageSchema';
import BaseButton from '@/components/BaseButton.vue';
import { faEllipsisVertical, faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

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
</script> 

<style scoped lang="scss">
table {
    font-size: 16px;
    width: 100%;

    thead {
        z-index: 1;
        position: sticky;
        top: 0;
        background-color: var(--secondary-background);
    }

    tr {
        display: grid;
        grid-template-columns: auto 1fr 12.5rem 8rem 7rem;
        align-items: center;
        text-align: left;
        height: 3rem;
        border-bottom: 1px solid var(--section-border);

        td {
            display: flex;
            gap: 0.5rem;
        }
    }

    thead>tr>th:last-child {
        padding: 0 2rem;
    }

    tbody>tr>td:last-child {
        display: flex;
        justify-content: center;
    }

    td:has(input[type="checkbox"]),
    th:has(input[type="checkbox"]) {
        padding: 0 1rem 0 1.5rem;
    }
}

.table-row {
    &:has(.checkbox:checked) {
        background-color: var(--row-checked);
    }

    &:hover {
        cursor: pointer;
        background-color: var(--primary-background);
    }
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
    border: 1px solid var(--text);
    cursor: pointer;

    &:not(:disabled):hover {
        border-color: var(--button-primary);
        outline-style: solid;
        outline-width: 2px;
        outline-color: var(--button-shadow);
    }

    &:not(:disabled):active {
        border-color: var(--button-primary);
        outline-width: .25rem;
        outline-color: var(--button-shadow);
    }

    &:checked {
        background-color: var(--button-primary);
        border: 1px solid var(--button-primary);
    }

    &:checked::after {
        content: url('../../public/assets/check.svg');
    }

    &:checked:active {
        background-color: var(--button-primary-active);
        border: 1px solid var(--button-primary-active);
    }

    &:disabled {
        cursor: not-allowed;
        background-color: var(--checkbox-disabled);
        border-color: var(--checkbox-border-disabled);
    }
}

.directory-icon {
    color: var(--directory-icon);
}
</style>