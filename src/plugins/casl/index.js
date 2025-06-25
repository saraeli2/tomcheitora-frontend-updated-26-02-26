import { useAuthStore } from '@/stores'
import { createMongoAbility } from '@casl/ability'
import { abilitiesPlugin } from '@casl/vue'

export default function (app) {
  const authStore = useAuthStore()
  const userAbilityRules = authStore.userAbilityRules
  const initialAbility = createMongoAbility(userAbilityRules ?? [])

  app.use(abilitiesPlugin, initialAbility, {
    useGlobalProperties: true,
  })
}
