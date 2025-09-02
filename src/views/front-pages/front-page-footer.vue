<script setup>
import appleImg from '@images/front-pages/landing-page/apple-icon.png'
import googlePlayImg from '@images/front-pages/landing-page/google-play-icon.png'
import footerDarkBg from '@images/front-pages/backgrounds/footer-bg-dark.png'
import footerLightBg from '@images/front-pages/backgrounds/footer-bg-light.png'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const footerBg = useGenerateImageVariant(footerLightBg, footerDarkBg)

const pagesList = [
  {
    name: 'Summer Collection',
    to: { name: 'front-pages-pricing' },
  },
  {
    name: 'Flash Sales ',
    to: { name: 'front-pages-payment' },
    isNew: true,
  },
  {
    name: 'Personal Care',
    to: { name: 'front-pages-checkout' },
  },
  
  {
    name: 'Home & Kitchen',
    to: { name: 'pages-authentication-login-v2' },
  },
]

const demoList = [
  {
    title: 'Home',
    to: '#',
  },
  {
    title: 'About Us',
    to: '#',
  },
  {
    title: 'Contact',
    to: '#',
  },
  {
    title: 'Terms & Conditions',
    to: '#',
  },
  {
    title: 'Privacy Policy',
    to: '#',
  },
]
</script>

<template>
  <div class="footer">
    <div
      class="footer-top pt-11"
      :style="{ 'background-image': `url(${footerBg})` }"
    >
      <VContainer>
        <VRow>
          <!-- 👉 Footer  -->
          <VCol
            cols="12"
            md="5"
            class="custom-ftr-col"
          >
            <div
              class="mb-4"
              :class="$vuetify.display.smAndDown ? 'w-100' : 'w-75'"
            >
              <div class="app-logo mb-6">
                <div class="logo-block">
                  <v-img style="width: 100px; height: auto"
                    src="/images/logo.png"
                  ></v-img>
                </div>
                <h1 class="app-logo-title text-white">
                  תומכי תורה
                </h1>
              </div>

              <div
                class="mb-6"
                :class="$vuetify.theme.current.dark ? 'text-body-1' : 'text-white-variant'"
              >
                Most Powerful & Comprehensive 🤩 Vuejs Admin Template with Elegant Material Design & Unique Layouts.
              </div>
              <VForm class="subscribe-form d-flex align-center">
                <AppTextField
                  label="Subscribe to newsletter"
                  placeholder="john@email.com"
                />
                <VBtn class="align-self-end rounded-s-0">
                  Subscribe
                </VBtn>
              </VForm>
            </div>
          </VCol>

          <!-- 👉 Demos -->
          <VCol
            md="4"
            sm="4"
            xs="6"
          >
            <div class="footer-links">
              <h6 class="footer-title text-h6 mb-6">
                Links
              </h6>
              <ul style="list-style: none;">
                <li
                  v-for="(item, index) in demoList"
                  :key="index"
                  class="mb-4"
                >
                  <a
                    :href="item.to"
                    target="_blank"
                    rel="noopener noreferrer"
                    :class="$vuetify.theme.current.dark ? 'text-body-1' : 'text-white-variant'"
                  >
                    {{ item.title }}
                  </a>
                </li>
              </ul>
            </div>
          </VCol>

          <!-- 👉 Pages  -->
          <VCol
            md="3"
            sm="4"
            xs="6"
          >
            <div class="footer-links">
              <h6 class="footer-title text-h6 mb-6">
                Category
              </h6>
              <ul style="list-style: none;">
                <li
                  v-for="(item, index) in pagesList"
                  :key="index"
                  class="mb-4"
                >
                  <RouterLink
                    :class="$vuetify.theme.current.dark ? 'text-body-1' : 'text-white-variant'"
                    class="me-2"
                    :to="item.to"
                  >
                    {{ item.name }}
                  </RouterLink>
                  <template v-if="item.isNew">
                    <VChip
                      color="primary"
                      variant="elevated"
                      label
                      size="small"
                    >
                      New
                    </VChip>
                  </template>
                </li>
              </ul>
            </div>
          </VCol>

          <!-- 👉 Download App -->
          
        </VRow>
      </VContainer>
    </div>

    <!-- 👉 Footer Line -->
    <div class="footer-line w-100">
      <VContainer>
        <div class="d-flex justify-space-between flex-wrap gap-y-5 align-center">
          <div class="text-body-1 text-white-variant text-wrap me-4">
            &copy;

            {{ new Date().getFullYear() }}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="font-weight-bold ms-1 text-white"
            >תומכי תורה</a>,
            Made With ❤️ for a better web.
          </div>

          <div class="d-flex gap-x-6">
            <template
              v-for="(item, index) in [
                { title: 'github', icon: 'tabler-brand-github-filled', href: '#' },
                { title: 'facebook', icon: 'tabler-brand-facebook-filled', href: '#' },
                { title: 'twitter', icon: 'tabler-brand-twitter-filled', href: '#' },
                { title: 'google', icon: 'tabler-brand-youtube-filled', href: '#' },
              ]"
              :key="index"
            >
              <a
                :href="item.href"
                target="_blank"
                rel="noopener noreferrer"
              >
                <VIcon
                  :icon="item.icon"
                  size="16"
                  color="white"
                />
              </a>
            </template>
          </div>
        </div>
      </VContainer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-title {
  color: rgba(255, 255, 255, 92%);
}

.footer-top {
  border-radius: 60px 60px 0 0;
  background-size: cover;
  color: #fff;
}

.footer-links {
  .text-white-variant,
  .text-body-1 {
    &:hover {
      color: #fff;
    }
  }
}

.footer-line {
  background: #282c3e;
}
</style>

<style lang="scss">
.subscribe-form {
  .v-label {
    color: rgba(225, 222, 245, 90%) !important;
  }

  .v-field {
    border-end-end-radius: 0;
    border-end-start-radius: 10px;
    border-start-end-radius: 0;
    border-start-start-radius: 10px;

    input.v-field__input::placeholder {
      color: rgba(225, 222, 245, 40%) !important;
    }

    input.v-field__input {
      color: rgba(255, 255, 255, 78%);
    }
  }
}

.footer {
  border-radius: 50%;

  @media (min-width: 600px) and (max-width: 960px) {
    .v-container {
      padding-inline: 2rem !important;
    }

    .footer-logo-buttons {
      gap: 0.75rem;
    }
  }
}
</style>
