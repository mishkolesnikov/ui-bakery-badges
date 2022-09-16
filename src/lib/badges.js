import { Back as CMBack } from './badges/cert-membership/back';
import { Front as CMFront } from './badges/cert-membership/front'; 
import { fields as CMFields } from './badges/cert-membership/fields';


import { Back as FSBack } from './badges/favorite-stuffing/back';
import { Front as FSFront } from './badges/favorite-stuffing/front';
import { fields as FSFields } from './badges/favorite-stuffing/fields';

export const badges = {
  certMembership: {
    back: CMBack,
    front: CMFront,
    fields: Object.values(CMFields),
    title: 'CERT Membership'
  },
  favStuffing: {
    back: FSBack,
    front: FSFront,
    fields: Object.values(FSFields),
    title: 'Favorite Stuffing',
    noAvatar: true
  }
};