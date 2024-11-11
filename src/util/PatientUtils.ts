import { fhirR4 } from "@smile-cdr/fhirts";

/* Helper classes to extract patient data from fhir response */

export const getFamilyName = (patient: fhirR4.Patient): string => {
  const familyNameP: string = "Unknown family name";
  const parsedName = patient.name?.at(0)?.family;
  return parsedName ? parsedName : familyNameP;
};

export const getGivenName = (patient: fhirR4.Patient): string => {
  let givenName: string = "unkown given name";
  const parsedGivenName = patient.name?.at(0)?.given;
  if (parsedGivenName) {
    givenName = parsedGivenName.join(" ");
  }
  return givenName;
};

export const getFullNamePatient = (patient: fhirR4.Patient): string => {
  return getGivenName(patient) + " " + getFamilyName(patient);
};

export const getGender = (patient: fhirR4.Patient): string => {
  const genderP: string = "unknown";
  const parsedGender = patient?.gender;
  return parsedGender ? parsedGender : genderP;
};

export const getBirthDate = (patient: fhirR4.Patient): string => {
  let birthDate: string = "unknown";
  const parsedBirthDate = patient?.birthDate;
  if (parsedBirthDate) {
    const [year, month, day] = parsedBirthDate.split("-");
    birthDate = day + "." + month + "." + year;
  }
  return birthDate;
};

export const getAddress = (patient: fhirR4.Patient): string => {
  let address: string = "unkown";
  const parsedAddress = patient.address?.at(0);
  if (parsedAddress) {
    const line = parsedAddress.line;
    const city = parsedAddress.city;
    const state = parsedAddress.state;
    const postal = parsedAddress.postalCode;
    address = [line, city, state, postal].join(", ");
  }
  return address;
};
