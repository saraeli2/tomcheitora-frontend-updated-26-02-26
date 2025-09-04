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
        <VRow class="justify-center">
          <VCol cols="12" md="6">
            <div class="app-logo mb-6">
              <div class="logo_items">
                <div class="logo-block">
                  <v-img style="width: 100px; height: auto"
                    src="/images/logo.png"
                  ></v-img>
                </div>
                <h1 class="app-logo-title text-white">
                  תומכי תורה
                </h1>
              </div>
              <div class="phone_Item">
                073-888-1871<br>*8591
              </div>
              </div>
          </VCol>
        </VRow>
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
