<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const props = defineProps({
  user: { type: Object, required: false, default: () => ({ _id: '' }) },
})

const emit = defineEmits(['update:user', 'kids-success'])

const { t } = useI18n()
const router = useRouter()
const ability = useAbility()

// --- Existing data for table
const searchQuery = ref('')
const selectedStatus = ref()
const selectedRows = ref([])

const itemsPerPage = ref(10)
const page = ref(1)
const sortBy = ref()
const orderBy = ref()

const isKidDialogVisible = ref(false)
const kidDetail = ref()
const selectedUserID = ref(props.user?._id)

// --- Temporary kids for first-login rows
const kidsCount = ref(0)
const tempKids = ref([])

// --- Headers for existing kids table
const headers = computed(() => [
  { title: t('שם פרטי'), key: 'firstName' },
  { title: t(' ת.ז'), key: 'IDNumber' },
  { title: t('Marital Status'), key: 'maritalStatus' },
  { title: t('Created At'), key: 'createdAt' },
  { title: t('Updated At'), key: 'updatedAt' },
  { title: t('Actions'), key: 'actions', sortable: false },
])

// --- Fetch existing kids (replace with your API hook)
const kids = ref([]) // array of existing kids
const totalKids = ref(0)

async function fetchKids() {
  const response = await $api(`/kids`, {
    query: { userID: props.user._id, itemsPerPage: itemsPerPage.value, page: page.value },
  })
  kids.value = response.kids || []
  totalKids.value = response.total || 0
}

// --- Generate rows based on kidsCount
function generateKids() {
  tempKids.value = []
  for (let i = 0; i < kidsCount.value; i++) {
    tempKids.value.push({
      firstName: '',
      IDNumber: '',
      dob: null,
      maritalStatus: '',
      status: 'Active',
    })
  }
}

// --- Save temporary kids to backend
async function saveKids() {
  try {
    if (tempKids.value.length === 0) return

    await $api('/kids/bulk-create', {
      method: 'POST',
      body: { kids: tempKids.value, userID: props.user._id },
    })

    tempKids.value = []
    kidsCount.value = 0
    await fetchKids()
    emit('kids-success')
  } catch (err) {
    console.error('Failed to save kids:', err)
    Swal.fire('Error', 'Failed to save kids', 'error')
  }
}

// --- Skip kids info
const skipKidsInfo = async () => {
  try {
    const response = await $api(`/users/skip-kids-update/${props.user._id}`, {
      method: 'POST',
    })
    emit('update:user', response)
    emit('kids-success', response)
  } catch (err) {
    console.error('Failed to skip kids info:', err)
  }
}

// --- Existing actions: edit/delete
function editKid(kid) {
  kidDetail.value = kid
  isKidDialogVisible.value = true
}

async function deleteKid(id) {
  const result = await Swal.fire({
    title: t('delete.Are You Sure?'),
    text: t('delete.confirmMessage'),
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: t('delete.Yes, Delete!'),
    cancelButtonText: t('delete.No, Cancel'),
  })
  if (result.isConfirmed) {
    await $api(`/kids/${id}`, { method: 'DELETE' })
    fetchKids()
  }
}

</script>

<template>
  <VCard>
    <VCardText class="d-flex justify-space-between align-center flex-wrap">
      <VRow>
        <VCol cols="12">
          <h5 class="text-h5 mb-1">
            מספר ילדים
          </h5>
        </VCol>
      </VRow>
    </VCardText>

    <VDivider />
    <!-- Add kids count & generate rows -->
    <VCardText class="d-flex gap-4 align-center">
      <AppTextField
        v-model.number="kidsCount"
        type="number"
        label="מספר ילדים"
        min="1"
        outlined
        class="w-32"
      />
      <VBtn color="primary" @click="generateKids">הוסף</VBtn>
    </VCardText>

    <!-- Temporary kids form rows -->
    <VTable v-if="tempKids.length > 0" class="mt-4">
      <thead>
        <tr>
          <th>שם פרטי</th>
          <th>ת.ז</th>
          <th>תאריך לידה</th>
          <th>סטטוס</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(kid, index) in tempKids" :key="index">
          <td>
            <AppTextField
              v-model="kid.firstName"
              :rules="[requiredValidator]"
              label="שם פרטי"
              placeholder="שם פרטי"
            />
          </td>
          <td>
            
            <AppTextField
              v-model="kid.IDNumber"
              label="ת.ז"
              placeholder="ת.ז"
            />
          </td>
          <td>
            <AppDateTimePicker
              v-model="kid.dob"
              :rules="[requiredValidator]"
              :label="$t('Birth Date')"
              :placeholder="$t('Birth Date')"
              :config="{
                enableTime: false,
                dateFormat: 'd.m.Y',
                allowInput: true,
                altInput: true,
                altFormat: 'd.m.Y',
                // For Flatpickr v4.6+, you can set:
                monthSelectorType: 'dropdown',
                yearSelectorType: 'dropdown'
              }"
            />
          </td>
          <td>
            <AppAutocomplete
              v-model="kid.maritalStatus"
              :items="[
                { value: 'רווק', title: 'רווק' },
                { value: 'נשוי', title: 'נשוי' },
                { value: 'גרוש', title: 'גרוש' },
                { value: 'אלמן', title: 'אלמן' }
              ]"
              placeholder="סטטוס"
              clearable
            />
          </td>
        </tr>
      </tbody>
    </VTable>

    <div v-if="tempKids.length > 0" class="mt-4">
      <VBtn color="success" @click="saveKids">שמור</VBtn>
    </div>
  </VCard>
</template>

<style scoped>
.w-32 {
  width: 5rem;
}
.mt-4 {
  margin-top: 1rem;
}
</style>
