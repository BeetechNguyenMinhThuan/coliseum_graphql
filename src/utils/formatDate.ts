import moment from 'moment';
import 'moment/locale/vi';  // Đối với tiếng Việt
import 'moment/locale/ja';  // Đối với tiếng Nhật

export type Language = 'vi' | 'ja';

type dateString = '';

export const formatDate = (dateString: dateString, language: Language) => {
    moment.locale(language);
    const date = new Date(dateString);

    switch (language) {
        case 'vi':
            return moment(date).format('DD/MM/YYYY');
        case 'ja':
            return moment(date).format('YYYY年MM月DD日');
        default:
            return moment(date).format('YYYY-MM-DD');
    }
}
