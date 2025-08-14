// import { useAuthStore } from '@/stores'
// import { createMongoAbility } from '@casl/ability'
// import { abilitiesPlugin } from '@casl/vue'

// export default function (app) {
//   const authStore = useAuthStore()
//   const userAbilityRules = authStore.userAbilityRules
//   const initialAbility = createMongoAbility(userAbilityRules ?? [])

//   app.use(abilitiesPlugin, initialAbility, {
//     useGlobalProperties: true,
//   })
// }

import { useAuthStore } from '@/stores'
import { createMongoAbility } from '@casl/ability'
import { abilitiesPlugin } from '@casl/vue'
import useHelper from '@/mixins/helper'

export default function (app) {
  const { isAdmin } = useHelper()

  const authStore = useAuthStore()
  const userAbilityRules = authStore.userAbilityRules
  const fuserAbilityRules = authStore.fuserAbilityRules
  if(isAdmin()) {
  	const initialAbility = createMongoAbility(userAbilityRules ?? [])

	app.use(abilitiesPlugin, initialAbility, {
	useGlobalProperties: true,
	})
  } else {
  	const initialAbility = createMongoAbility(fuserAbilityRules ?? [])

	app.use(abilitiesPlugin, initialAbility, {
	useGlobalProperties: true,
	})
  }
}

