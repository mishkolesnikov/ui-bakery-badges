import { Back as CMBack } from './badges/cert-membership/back';
import { Front as CMFront } from './badges/cert-membership/front'; 

import { Back as FSBack } from './badges/favorite-stuffing/back';
import { Front as FSFront } from './badges/favorite-stuffing/front';

export const badges = {
  certMembership: {
    back: CMBack,
    front: CMFront,
  },
  favStuffing: {
    back: FSBack,
    front: FSFront
  }
};