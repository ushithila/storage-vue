<template>
    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th>
                        <input
                            id="select-all-checkbox"
                            class="checkbox"
                            type="checkbox"
                            :indeterminate="1 <= selected.length && selected.length < items.length"
                            :checked="items.length === selected.length"
                        />
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
                <tr 
                    v-for="(item, index) in items"
                    :key="`${index}-${item.id}`"
                    class="table-row"
                    @click="emit('select', index + 1)"
                >
                    <td>
                        <input
                            class="checkbox" 
                            type="checkbox"
                            :checked="selected.includes(index + 1)"
                        />
                    </td>
                    <td>
                        <font-awesome-icon 
                            v-if="item.type==='directory'"
                            :icon="faFolder"
                            size="lg"
                            class="directory-icon"
                        />
                        <font-awesome-icon 
                            v-else
                            :icon="faFile"
                            size="lg"
                            class="file-icon"
                        />
                        {{ item.name }}
                    </td>
                    <td>{{ ConvertDateFormat(item.createdAt) }}</td>
                    <td>{{ item.size || "--" }}</td>
                    <td>
                        <base-button
                            variant="neutral"
                            class="action-button"
                        >
                            <template #icon>
                                <font-awesome-icon :icon="faEllipsisVertical"/>
                            </template>
                        </base-button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import { ConvertDateFormat } from '@/utils/Date';
import { StorageSchema } from '@/interfaces/StorageSchema';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { FileEntry } from '@/interfaces/FileEntry';
import { faEllipsisVertical, faFolder } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';

defineProps<{
    items : Array<FileEntry>;
    selected: Array<number>;
}>();

const emit = defineEmits<{
    (e: 'select', value: number): void,
}>();

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
.table-container {
    display: flex;
    overflow-y: auto;

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

    &:indeterminate {
        background-color: var(--button-primary);
        border: 1px solid var(--button-primary);
       content: url('../../public/assets/minus.svg');
    }
}

.directory-icon {
    color: var(--directory-icon);
}

.file-icon {
    color: var(--file-icon);
}
</style>