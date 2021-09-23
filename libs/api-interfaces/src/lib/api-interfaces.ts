export interface College {
  country: string;
  name: string;
  alpha_two_code: string;
  'state-province': number;
  domains: string[];
  web_pages: string[];
}

export const emptyCollege = {
  country: '',
  name: '',
  alpha_two_code: '',
  'state-province': 0,
  domains: [''],
  web_pages: [''],
};
