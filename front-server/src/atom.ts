import { atom } from 'recoil'
<<<<<<< HEAD

export const CareerSelectCode = atom({
  key: 'CareerSelectCode', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})

export const CareerSelectName = atom({
  key: 'CareerSelectName', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})

export const CareerSubSelectName = atom({
  key: 'CareerSubSelectName', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})

export const JobFamilyCode = atom({
  key: 'JobFamilyCode', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})
export const JobFamilyName = atom({
  key: 'JobFamilyName', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})

export const JobSubCode = atom({
  key: 'JobSubCode', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})
export const JobSubName = atom({
  key: 'JobSubName', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})

export const JobCode = atom({
  key: 'JobCode', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})
export const JobName = atom({
  key: 'JobName', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})

export const RegionCode = atom({
  key: 'RegionCode', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})

export const RegionName = atom({
  key: 'RegionName', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})

export const CityCode = atom({
  key: 'CityCode', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
})
export const CityName = atom({
  key: 'CityName', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
=======
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()
export interface logintype {
  isLoggedIn: boolean
  userId: number
}
export const isDarkAtom = atom({
  key: 'isDark',
  default: true,
})

export const LoginState = atom<logintype>({
  key: 'LoginState',
  default: {
    isLoggedIn: false,
    userId: 0,
  },
  effects_UNSTABLE: [persistAtom],
>>>>>>> frontend
})
