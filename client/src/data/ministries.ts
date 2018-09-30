import { MinistryArea } from '../../../server/src/generated/prisma'

const ministries: Array<{ value: MinistryArea; label: string }> = [
  { value: 'AdventurerClubMember', label: 'Adventurer Club Member' },
  { value: 'AdventurerClubOfficer', label: 'Adventurer Club Officer' },
  { value: 'PathfinderClubMember', label: 'Pathfinder Club Member' },
  { value: 'PathfinderClubOfficer', label: 'Pathfinder Club Officer' },
  { value: 'AdventistYouthOfficer', label: 'Adventurer Club Officer' },
  { value: 'MasterGuideInTraining', label: 'Master Guide In Training' },
  { value: 'AYLeadershipTraining', label: 'AY Leadership Training' },
  { value: 'PLATraining', label: 'PLA Training' },
  { value: 'APLATraining', label: 'APLA Training' },
  { value: 'AmbassadorTraining', label: 'Ambassador Training' },
]

export default ministries
