import { Form, ErrorMessage } from 'vee-validate'

import { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.component('ValidationError', ErrorMessage)
  app.component('ValidationForm', Form)
}
