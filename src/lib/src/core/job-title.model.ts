export const SCR_USER_JOB_TITLES: ScrUserJobTitle[] = [
  {
    name: 'administrative_manager',
    displayName: 'Administrative Manager'
  },
  {
    name: 'office_assistant',
    displayName: 'Office Assistant'
  },
  {
    name: 'program_manager',
    displayName: 'Program Manager'
  },
  {
    name: 'financial_clerk',
    displayName: 'Financial Clerk'
  },
  {
    name: 'other',
    displayName: 'Other'
  },
];

export interface ScrUserJobTitle {
  name: string;
  displayName: string;
}
