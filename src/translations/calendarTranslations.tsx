import {LocaleConfig} from 'react-native-calendars';

const translations = () => {
  LocaleConfig.locales.fi = {
    monthNames: [
      'Tammikuu',
      'Helmikuu',
      'Maaliskuu',
      'Huhtikuu',
      'Toukokuu',
      'Kesäkuu',
      'Heinäkuu',
      'Elokuu',
      'Syyskuu',
      'Lokakuu',
      'Marraskuu',
      'Joulukuu',
    ],
    monthNamesShort: [
      'Tammi',
      'Helmi',
      'Maalis',
      'Huhti',
      'Touko',
      'Kesä',
      'Heinä',
      'Elo',
      'Syys',
      'Loka',
      'Marras',
      'Joulu',
    ],
    dayNames: [
      'Sunnuntai',
      'Maanantai',
      'Tiistai',
      'Keskiviikko',
      'Torstai',
      'Perjantai',
      'Lauantai',
    ],
    dayNamesShort: ['Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La'],
  };
  LocaleConfig.defaultLocale = 'fi';
};
export default translations;
