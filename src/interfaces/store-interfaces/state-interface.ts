import {
  AccountInformationIF, CertifyIF, DefineCompanyIF, NameRequestIF, TombStoneIF, PeopleAndRolesIF,
  ShareStructureIF, DateTimeIF, IncorporationAgreementIF, BusinessInformationIF, IncorporationFilingIF,
  FilingDataIF, StaffPaymentStepIF
} from '@/interfaces'

// State model example
export interface StateModelIF {
  tombstone: TombStoneIF
  accountInformation: AccountInformationIF
  businessInformation: BusinessInformationIF,
  nameRequest: NameRequestIF
  nameTranslations: Array<string>
  certifyState: CertifyIF
  defineCompanyStep: DefineCompanyIF
  peopleAndRoles: PeopleAndRolesIF
  createShareStructureStep: ShareStructureIF
  incorporationAgreementStep: IncorporationAgreementIF
  incorporationDateTime: DateTimeIF,
  originalIA: IncorporationFilingIF,
  staffPaymentStep: StaffPaymentStepIF,
  filingData: FilingDataIF
}
