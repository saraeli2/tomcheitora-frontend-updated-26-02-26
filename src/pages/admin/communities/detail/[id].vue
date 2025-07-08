<script setup>
definePage({
  meta: {
    action: ['admin-view-communities'],
    subject: ['View Community'],
    navActiveLink: 'admin-communities',
    title: 'Community Details',
  },
})

import ContactInformationModule from '@/pages/admin/settings/contact-informations.vue'
import AddNewCommunityDrawer from '@/views/admin/communities/AddNewCommunityDrawer.vue'

import { can } from '@layouts/plugins/casl'

import Swal from 'sweetalert2'

const isCommunityDialogVisible = ref(false)

const resolveStatusVariantAndIcon = status => {
  if (status === 'Active')
    return {
      variant: 'success',
      title: 'Yes',
    }
  
  return {
    variant: 'secondary',
    title: 'No',
  }
}

const route = useRoute('admin-communities-detail-id')
const router = useRouter()

const userTab = ref(0)

const {
  data: communityDetail, execute: fetchCommunities,
} = await useApi(createUrl(`/admin/communities/${ route.params.id }`))

const communityData = computed(() => communityDetail.value)

const reloadTab = ref(true)

const modifyCommunity = async userData => {
  // refetch Organization
  fetchCommunities()
}

const deleteCommunity = async () => {
  Swal.fire({
    title: 'Are You Sure?',
    html: 'Selecting Delete will <strong>permanently delete</strong> this item. This action cannot be undone.',
    // eslint-disable-next-line global-require
    icon: 'warning',
    reverseButtons: true,
    showCancelButton: true,
    cancelButtonText: 'No, Cancel',
    confirmButtonText: 'Yes, Delete!',
    customClass: {
      confirmButton: 'btn btn-primary ml-1',
      cancelButton: 'btn btn-outline-primary',
    },
    buttonsStyling: false,
  })
    .then(async result => {
      if (result.value) {
        await $api(`/admin/communities/${ route.params.id }`, { method: 'DELETE' })
        router.push({ name: 'admin-communities' })
      }
    })
}

const refreshTab = async tabData => {
  reloadTab.value = false
  await nextTick()
  reloadTab.value = true
}

onMounted( async () => {
  if(route.query.detailstab) {
    userTab.value = route.query.detailstab
  }
})
</script>

<template>
  <div>
    <!-- 👉 Header  -->
    <div 
      v-if="communityData"
      class="d-flex justify-space-between align-center flex-wrap gap-y-4 mb-6"
    >
      <VRow>
        <VCol
          cols="12"
          md="12"
          lg="12"
        >
          <VBreadcrumbs
            class="px-0 pb-2 pt-0 help-center-breadcrumbs"
            :items="[{ title: $t('Community'), to: { name: 'admin-communities' }, class: 'text-primary' }, { title: communityData.name }]"
          />
        </VCol>
      </VRow>


      <VDivider class="my-6" />

      <div>
        <h4 class="text-h4 mb-1">
          {{ $t('Community ID') }} #{{ route.params.id }}
        </h4>
        <div class="text-body-1">
          {{ $t('Created At') }}: {{ formatDateWithTime(communityData.createdAt) }}, {{ $t('Updated At') }}: {{ formatDateWithTime(communityData.updatedAt) }}
        </div>
      </div>
      <div class="d-flex gap-4">
        <VBtn
          v-if="can('admin-delete-communities', 'Delete Community')"
          variant="tonal"
          color="error"
          @click="deleteCommunity"
        >
          {{ $t('Delete Community') }}
        </VBtn>
      </div>
    </div>
    <!-- 👉 Customer Profile  -->
    <VRow v-if="reloadTab">
      <VCol
        cols="12"
        md="12"
        lg="12"
      >
        <VTabs
          v-model="userTab"
          class="v-tabs-pill mb-3 disable-tab-transition"
        >
          <VTab>
            <VIcon
              size="20"
              start
              icon="tabler-eye"
            />
            {{ $t('Details') }}
          </VTab>

          <VTab>
            <VIcon
              size="20"
              start
              icon="tabler-bookmarks"
            />
            {{ $t('Contact Informations') }}
          </VTab>
        </VTabs>

        <VWindow
          v-model="userTab"
          class="disable-tab-transition"
          :touch="false"
        >
          <VWindowItem>
            <VCard v-if="communityData">
              <!-- 👉 Customer Details -->
              <VCardText>
                <h5 class="text-h5">
                  {{ $t('Details') }}
                </h5>

                <VDivider class="my-4" />

                <VList class="card-list mt-2">
                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Name') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ communityData.name }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('City ID') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ communityData.cityId }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('City Name') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ communityData.cityName }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Street') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ communityData.street }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('House Number') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ communityData.houseNumber }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Website') }}:
                      <span
                        v-if="communityData.website"
                        class="text-body-1 d-inline-block"
                      >
                        <a
                          :href="communityData.website"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="text-primary ms-1"
                        >{{ communityData.website }}</a>
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Discount Type') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ communityData.discountType }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Delivery Charge') }}:
                      <span class="text-body-1 d-inline-block">
                        {{ communityData.discount ?? '' }}
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <div class="d-flex gap-x-2 align-center">
                      <h6 class="text-h6">
                        {{ $t('Status') }}:
                      </h6>
                      <VChip
                        label
                        :color="resolveStatusVariantAndIcon(communityData.status).variant"
                        size="small"
                      >
                        {{ resolveStatusVariantAndIcon(communityData.status).title }}
                      </VChip>
                    </div>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Remarks') }}:
                      <span class="text-body-1 d-inline-block">
                        <div v-html="communityData?.remarks" />
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Created By') }}:
                      <span class="text-body-1 d-inline-block">
                        <RouterLink
                          v-if="can('admin-view-admins', 'View Admins') && communityData.createdBy"
                          :to="{ name: 'admin-admins-detail-id', params: { id: communityData.createdBy._id } }"
                        >
                          {{ communityData.createdBy.name }}
                        </RouterLink>
                        <span v-else>{{ communityData.createdBy ? communityData.createdBy.name : '' }}</span>
                      </span>
                    </h6>
                  </VListItem>

                  <VListItem>
                    <h6 class="text-h6">
                      {{ $t('Updated By') }}:
                      <span class="text-body-1 d-inline-block">
                        <RouterLink
                          v-if="can('admin-view-admins', 'View Admins') && communityData.updatedBy"
                          :to="{ name: 'admin-admins-detail-id', params: { id: communityData.updatedBy._id } }"
                        >
                          {{ communityData.updatedBy.name }}
                        </RouterLink>
                        <span v-else>{{ communityData.updatedBy ? communityData.updatedBy.name : '' }}</span>
                      </span>
                    </h6>
                  </VListItem>
                </VList>
              </VCardText>

              <VCardText
                v-if="can('admin-update-communities', 'Update Community')"
                class="text-center"
              >
                <VBtn
                  block
                  @click="isCommunityDialogVisible = !isCommunityDialogVisible"
                >
                  {{ $t('Edit Community') }}
                </VBtn>
              </VCardText>
            </VCard>
          </VWindowItem>

          <VWindowItem>
            <ContactInformationModule
              :morphableid="route.params.id"
              morphabletype="Community"
              @tab-data="refreshTab"
            />
          </VWindowItem>
        </VWindow>
      </VCol>
    </VRow>
    <div v-else>
      <VAlert
        type="error"
        variant="tonal"
      >
        {{ route.params.id }} {{ $t('Not Found!') }}
      </VAlert>
    </div>

    <AddNewCommunityDrawer
      v-if="isCommunityDialogVisible"
      v-model:is-drawer-open="isCommunityDialogVisible"
      v-model:community="communityData"
      @user-data="modifyCommunity"
    />
  </div>
</template>
