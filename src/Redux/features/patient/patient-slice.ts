import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DentistInfo } from '../dentist/dentist-slice';

export type PatientInfo = {
  id: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  gender?: string;
  dob?: string;
  address1?: string;
  address2?: string;
  country?: string;
  province?: string;
  postalCode?: string;
};

export type PatientState = {
  info: PatientInfo;
  dentists: DentistInfo[];
};

const initialState: PatientState = {
  info: {
    name: 'Behshad',
    surname: 'Babai',
    email: 'b@b.com',
    id: '8',
    phone: '2366888933',
    address1: '4720',
    address2: '4205',
    country: 'Canada',
    dob: '2001-04-09',
    gender: 'male',
    province: 'British Columbia',
    postalCode: 'V5C0M8'
  },
  dentists: []
};

const patientSlice = createSlice({
  name: 'patient',
  initialState: initialState,
  reducers: {
    changePatientInfo(state, action: PayloadAction<PatientInfo>) {
      state.info = action.payload;
    },
    changePatientDentists(state, action: PayloadAction<DentistInfo[]>) {
      state.dentists = action.payload;
    }
  }
});

export const { changePatientInfo, changePatientDentists } =
  patientSlice.actions;
export default patientSlice.reducer;