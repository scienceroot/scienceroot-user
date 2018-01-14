export const SCR_USER_INDUSTRIES: ScrUserIndustry[] = [
  {
    displayName: 'Agriculture',
    name: 'agriculture'
  },
  {
    displayName: 'Automotive',
    name: 'automotive'
  },
  {
    displayName: 'Banking',
    name: 'banking'
  },
  {
    displayName: 'Defense',
    name: 'defense'
  },
  {
    displayName: 'Education',
    name: 'education'
  },
]

export interface ScrUserIndustry {
  name: string;
  displayName: string;
}
